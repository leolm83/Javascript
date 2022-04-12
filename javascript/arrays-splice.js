let aprovados = ['Bia','Carlos','Ana']
//splice(inicio,qtd,substituto1,substituto2.....)
//qtd= quantidade de elementos a serem "trocados ou removidos"

aprovados.splice(1,0,["Leolm","BLNK"])
console.log(aprovados + " sem spread operator")
aprovados.splice(1,0,...["Leolm","BLNK"])
console.log(aprovados + " com spread operator")

//recursos:
//SPREAD OPERATOR
//https://devpleno.com/spread-operator
//https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Spread_syntax
