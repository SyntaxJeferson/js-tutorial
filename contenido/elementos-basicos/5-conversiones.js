/**
 * 
 *              CONVERSIONES - EXPLICITAS E IMPLICITAS
 */


// Conversion Explicit Type Casting
const string = '54'
const number = parseInt(string)

console.log(typeof string)
console.log(typeof integer)

const float = parseFloat("3.14")
//console.log(typeof float)//number

               //8020
const binario = '1010' //10
const decimal = parseInt(binario, 2)
console.log(decimal)

const hexa = 'CAFE'
const decimalhex = parseInt(hexa, 16)
console.log(decimalhex)

//Conversion Implicit Type Casting
const resultado = '5' + 3 // 8
console.log(typeof resultado)

const sumaConBoolean = '3' + true
console.log(sumaConBoolean)

const sumaConNumero = 2 + true
console.log(sumaConNumero) //3

const valorString = '20'
const valorNumero = 10
const valorBoolean = true
console.log('----------------------------')
console.log(valorString+valorString)//concatenar
console.log(valorString+valorNumber)//concatenar
console.log(valorString+valorBoolean)//concatenar

console.log(valorNumber+valorNumber)//sumar
console.log(valorNumber+valorString)//concatenar
console.log(valorNumber+valorBoolean)//sumar

console.log(valorBoolean + valorBoolean)//sumar
console.log(valorBoolean + valorNumber)//sumar
console.log(valorBoolean + valorString)//concatenar