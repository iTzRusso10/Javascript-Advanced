// Perform a code refactoring by using the Spread Operator. The output of the console.log must be the same.

function sum(...val) {
  return val.reduce((a,b) => a + b)
}

// const numbers = [1, 2, 3];
// console.log(sum(numbers[0], numbers[1], numbers[2]));
console.log(sum(1,2,3,4,5,6,7,8,9,10,11,12));

