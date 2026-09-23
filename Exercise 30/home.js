function operate(a,b, callback) {
    return callback(a, b);
}
function add(a, b) {
    return a + b;
}
function subtract(a, b) {
    return a - b;
}   
function multiply(a, b) {
    return a * b;
}   
function divide(a, b) {
    return a / b;
}

console.log(operate(5, 3, add));
console.log(operate(5, 3, subtract));
console.log(operate(5, 3, multiply));
console.log(operate(5, 3, divide));