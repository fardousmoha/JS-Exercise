//Spread
const numbers = [1, 2, 3];
const newNumbers = [...numbers, 4, 5,6,7,8,9,10];
console.log(newNumbers); 


//Rest
function multiply(...args) {
    return args.reduce((acc, curr) => acc * curr, 1);
}
console.log(multiply(2, 3, 4,6)); 