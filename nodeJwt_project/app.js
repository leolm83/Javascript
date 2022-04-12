/* imports*/
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const app = express();


// Config JSON req
app.use(express.json());

const User = require("./models/User")


/* public route */
app.get('/', (req,res)=>{
    res.status(200).json({
        msg:"Bem vindo a Leolms API!"
    })
})

// private route
app.get("/user/:id", checkToken, async (req,res)=>{
    const id = req.params.id
    const user = await User.findById(id,'-password')
    if(!user){
        return res.status(404).json({
            msg:"usuario não encontrado!"
        })
    };
    return res.status(200).json({
       user
    })
    
})
function checkToken(req,res,next){
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(" ")[1]
    if(!token){
        return res.status(401).json({
            msg:"acesso negado!"
        })
    }
    try{
        const secret = process.env.SECRET
        jwt.verify(token,secret)
        next()

    } catch (err){
        res.status(400).json({msg: "Acesso negado!"})
    }
}


//Register User
app.post('/auth/register', async(req,res)=>{
    const {name, email, password, confirmPassword} = req.body
    if(!name){
        return res.status(422).json({
            msg:"O nome é obrigatório"
        })
    }
    if(!email){
        return res.status(422).json({
            msg:"O email é obrigatório"
        })
    }
    if(!password){
        return res.status(422).json({
            msg:"O senha é obrigatória"
        })
    }
    if(password !== confirmPassword){
        return res.status(422).json({
            msg:"as senhas não conferem"
        })
    }
    //check if user exists
    const userExists = await User.findOne({email: email})
    if(userExists){
        return res.status(422).json({
            msg:"este email é invalido pois ja esta cadastrado!!!"
        })
    };

    //create password
    const salt = await bcrypt.genSalt(12);
    const passwordHash = await bcrypt.hash(password,salt)

    //create user
    const user = new User(
        {
            name
            ,email
            ,password: passwordHash
        }
    )

    try{
        await user.save()
        res.status(201).json({
            msg: "usuario cadastrado com sucesso!!"
        })
    } 
    catch(err){
        console.log(err)
        res.status(500).json({msg: "ocorreu um erro no servidor !"})
    }
})
// Login user
app.post("/auth/login",async(req,res)=>{
    const {email,password} = req.body
    if(!email){
        return res.status(422).json({
            msg:"O email é obrigatório"
        })
    }
    if(!password){
        return res.status(422).json({
            msg:"O senha é obrigatória"
        })
    }
    //check if user exists 
        //check if user exists
    const user = await User.findOne({email: email})
    if(!user){
        return res.status(404).json({
            msg:"usuario não encontrado!"
        })
    };

    //check if password matches
    const checkPassword = await bcrypt.compare(password,user.password)
    if(!checkPassword){
        return res.status(404).json({
            msg:"usuario não encontrado!"
        })
    }

    try{
        const secret = process.env.SECRET
        const token = jwt.sign({
            id: user._id,
        },
        secret
        )
        res.status(200).json({
            msg:'Autenticação realizada com sucesso!',token
        })
    }
    catch(err){
        console.log(`Ocorreu a seguinte falha ao se conectar ao banco : \n ${err}`)
        return res.status(404).json({
            msg:"Ocorreu uma falha!"
        })
    }

})


//CREDENTIALS
const dbUser = process.env.DB_USER
const dbPassword = process.env.DB_PASSWORD
const dbAdress = process.env.DB_ADDRESS
const dbName = process.env.DB_NAME
mongoose.connect(
    `mongodb://${dbUser}:${dbPassword}@${dbAdress}/${dbName}`
    ).then(() =>{
        app.listen(3000)
        console.log('Conectou ao banco!')
    }
    ).catch((err)=>{
        console.log(`Ocorreu a seguinte falha ao se conectar ao banco : \n ${err}`)
    })

