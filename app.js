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
    return Number((amount * oneEuroIs["USD"]).toFixed(2))
}

function fromDollarToYen(amount) {
    return Number((amount * oneEuroIs["JPY"] / oneEuroIs["USD"]).toFixed(2))
}

function fromYenToPound(amount) {
    return Number((amount * oneEuroIs["GBP"] / oneEuroIs["JPY"]).toFixed(2))
}

module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound };