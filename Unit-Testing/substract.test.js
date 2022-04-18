const { expect } = require("@jest/globals")
const substract = require("./substract")

test("propely Testing Substract" , () => {
    expect(substract(10,5)).toBe(5)
    expect(substract(5,10)).not.toBe(5)
    expect(substract(500,10)).not.toBe(5)
 
    expect(substract(10,50)).toBe(-40)
})