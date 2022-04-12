//arrays em JS sao considerados do tipo Objetos
console.log(typeof Array)//aqui seria a funcão construtora da classe

console.log(typeof new Array)//aqui seria um novo "array"

console.log(typeof [])//aqui seria o tipo de um array literal

let aprovados = new Array('Bia', 'Carlos','Ana')
console.log(aprovados)

//esta forma é mais comum = 
aprovados = ['Bia','Carlos','Ana']
console.log( aprovados[0] )
console.log( aprovados[1] )
console.log( aprovados[2] )
console.log( aprovados[3] )//undefined

//adiciona um elemento ao array ou substitui um elemento
aprovados[3] = 'paulo'
aprovados.push('Giulia') //adiciona ao final

console.log(`Tamanho atual do array :  ${aprovados.length}`)
//por exemplo caso insira um elemento numa posicao muito maior que a atual,
// seu array será aumentado e tera o tamanho posicao+1(pois começamos a contar desde o zero)

//Exemplo:
aprovados[15] = "Leonardo"

console.log(`Tamanho atual do array :  ${aprovados.length}`)

//aqui tenho um comportamento inesperado pois ele não exibe valores undefined
aprovados.forEach(element => {
    console.log(element)
});
console.log(aprovados)

//remover elementos do array

delete aprovados[1] //ele não reordena o array, ele simplesmente 
//coloca undefined nessa posição do array