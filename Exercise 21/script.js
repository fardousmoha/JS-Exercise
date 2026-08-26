const numbers = [1, 2, 3, 4, 5 ,6,7];
const multiNum=numbers.reduce((total, num) => total * num, 1);
console.log(multiNum);
