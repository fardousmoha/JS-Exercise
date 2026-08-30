const colors = ['red', 'green', 'blue', 'yellow', 'orange'];

const [firstcolor, secondcolor, thirdcolor, ...restcolors] = colors;

console.log(firstcolor);
console.log(thirdcolor);