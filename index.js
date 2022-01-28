const readline = require('readline-sync')

let calculator = require('./app/calculator')

const firstNum = parseInt(readline.question('set first number'))
const secondNum = parseInt(readline.question('set second number'))

console.log(`Add ${firstNum} + ${secondNum} = ${calculator.add(firstNum, secondNum)}`)
console.log(`Menus ${firstNum} - ${secondNum} = ${calculator.minus(firstNum, secondNum)}`)
console.log(`Multiply ${firstNum} * ${secondNum} = ${calculator.multiply(firstNum, secondNum)}`)
console.log(`Divide ${firstNum} / ${secondNum} = ${calculator.divide(firstNum, secondNum)}`)