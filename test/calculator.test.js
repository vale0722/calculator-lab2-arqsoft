'use strict';

let expect = require('chai').expect
let calculator = require('../app/calculator')

describe("Calculator -test", function () {
    describe("Testing the operations", function () {
        it('testing sum', function () {
            expect(calculator.add(1,1)).to.equal(2)
        });
        it('testing minus', function () {
            expect(calculator.minus(1,1)).to.equal(0)
        });
        it('testing multiply', function () {
            expect(calculator.multiply(1,1)).to.equal(1)
        });
        it('testing divide', function () {
            expect(calculator.divide(15,3)).to.equal(5)
        });
        it('testing divide by zero', function () {
            const expected = new Error('You can\'t divide by zero')
            expect(calculator.divide(15,0).message).to.equal(expected.message)
        });
    })
})