const sum = (a, b) => {
    return a + b;
}

console.log(sum);

module.exports = { sum };


let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

const converEuroToDollar = (monto) => monto *1.2;
const convertEuroToJPY = 