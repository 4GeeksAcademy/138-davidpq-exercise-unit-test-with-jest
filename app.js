// Esta es mi función que suma dos números
const sum = (a,b) => {
    return a + b
}

let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

function fromEuroToDollar(amount) {
    return amount * oneEuroIs["USD"]
}

function fromDollarToYen(amount) {
    return amount * oneEuroIs["JPY"] / oneEuroIs["USD"]
}

function fromYenToPound(amount) {
    return amount * oneEuroIs["GBP"] / oneEuroIs["JPY"]
}

module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound };