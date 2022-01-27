'use strict';

function add(a, b) {
    return a + b
}

function minus(a,b) {
    return a - b
}

function multiply(a, b) {
    return a * b
}

function divide(a, b) {
    return b === 0 ? new Error('You can\'t divide by zero') : a / b
}

module.exports = {
    add,
    minus,
    multiply,
    divide
}