const pilotos = ["Vettel","Alonso","Raikkonen","Massa"]
//retira o ultimo item do array
pilotos.pop()
console.log(pilotos)

//adiciona ao final
pilotos.push("Verstappen")
console.log(pilotos)

//remove o primeiro item
pilotos.shift()

//insere no inicio
pilotos.unshift("Hamilton")
console.log(pilotos)

//splice pode adicionar e ou remover itens no array
//adicionar
pilotos.splice(2,0,...["Bottas","Leolm"])
console.log(pilotos)

pilotos.splice(1,1)
console.log(pilotos)

//splice tambem retorna os elementos retirados do array
let piloto = pilotos.splice(0,1)
console.log(piloto)

//usando desestruturação
//[] quando é array
//{} quando é objeto
let [segundo,terceiro] = pilotos.slice(0,2) 

console.log(segundo+" e "+terceiro)
pilotos[16] = "Nuzee"
console.log(pilotos)
console.log(pilotos.length)

//recursos:
//DESESTRUTURACAO DE ARRAy
//https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment