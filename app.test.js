const {sum} = require("./apps.js");

test("la suma de 14 + 9 es igual a 23", () =>{
    const firstNum = 14;
    const secondNum = 9;

    const result = sum(firstNum, secondNum);

    expect(result).toBe(23);
})