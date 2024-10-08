//Explicit Type Casting
const string = '42'
const integer = parseInt(string)
console.log(integer)
console.log(typeof integer)

const stringdecimal = '3.14'
const float = parseFloat(stringdecimal)
console.log(float)
console.log(typeof float)

const binary = '1111'
const decimal = parseInt(binary, 2)
console.log(decimal)
console.log(typeof decimal)

//implicit
const sum = '5' + 3
console.log(sum)

const sumaconboloeano = '3' + true
console.log(sumaconboloeano)

const sumaconnumero = 2 + true
console.log(sumaconnumero)

const valorstr = '10'
const valorint = 10
const valorbool = true

console.log('--------------------')
console.log(valorstr + valorstr)
console.log(valorstr + valorint)
console.log(valorstr + valorbool)
console.log(valorint + valorstr)
console.log(valorint + valorint)
console.log(valorint + valorbool)
console.log(valorbool + valorstr)
console.log(valorbool+ valorint)
console.log(valorbool + valorbool)
