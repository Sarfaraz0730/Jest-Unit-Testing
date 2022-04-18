const { expect } = require('@jest/globals')
const sum = require('./sum')

test('Propely add two Number', ()=>{
    expect(sum(1,2)).toBe(3)
})
