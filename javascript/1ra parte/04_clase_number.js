const entero = 42
const decimal = 3.14
console.log(typeof entero, typeof decimal)

//notacion cientifica

const cientifico = 5e3
console.log(cientifico)

//infinitos y NaN
const infinito = Infinity
const noesunNumero = NaN
console.log (infinito)
console.log (noesunNumero)

//operadores
let suma = 5 + 3;          
let resta = 5 - 3;         
let multiplicacion = 5 * 3; 
let division = 5 / 3;       
console.log(suma, resta, multiplicacion, division);

//modulo y exponenciacion
let modulo = 15 % 8;         
let exponenciacion = 2 ** 3; 
console.log(modulo, exponenciacion);

//precision 
const resultado = 0.1 + 0.2 
console.log(resultado)
console.log(resultado.toFixed(1))
console.log(resultado === 0.3)

//operaciones avanzadas
const raizCuadrada = Math.sqrt(16)
const valorabsoluto = Math.abs(-7)
const aleatorio = Math.random()

console.log(raizCuadrada)
console.log(valorabsoluto)
console.log(aleatorio)