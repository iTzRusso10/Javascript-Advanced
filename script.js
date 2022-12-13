// Use the destructuring, instead of a temporary variable, to swap the values of the variables.

let num1 = 10;
let num2 = 20;
console.log('Before swap: ', num1, num2); // Before swap: 10 20

// Variable swapping
[num1, num2] = [20, 10];

console.log('After swap: ', num1, num2); // After swap: 20 10