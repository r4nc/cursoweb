// Methods that iterate over an array.
// Methods that DO NOT modify the original array (Immutability).

// map()

const numbers = [1, 2, 3, 4, 5]
const squaredNumbers = numbers.map(num => num * num)

console.log(numbers)
console.log(squaredNumbers)

// forEach()

const colors = ['red', 'pink', 'blue']
const iteratedColors = colors.forEach(color => console.log(color))

console.log(colors)
console.log(iteratedColors)

//ejercicio: conversion de Fahrenheit a Celsius 

const temperaturesInFahrenheit = [32, 68, 95, 104, 212]

const temperaturesInCelsius = temperaturesInFahrenheit.map(fahrenheit => (5/9) * (fahrenheit - 32))

console.log('Temperatura en Fahrenheit: ', temperaturesInFahrenheit)
console.log('Temperatura en Celsius: ', temperaturesInCelsius)


//suma de elementos en un array

const newNumbers = [1, 2, 3, 4, 5]

let sum = 0

newNumbers.forEach(number => {
  sum = sum + number
})

console.log('Array of Numbers: ', newNumbers)
console.log('Sum of Numbers: ', sum)