//6.0.3 Errors and exceptions in JavaScript...........................................

// let multiply = (a b) => a + b; // -> Uncaught SyntaxError: Unexpected identifier
// let result = multiply(10, 20);
// console.log(result);

// let multipl = (a, b) => a + b;
// let result = multiply(10, 20); // -> Uncaught ReferenceError: multiply is not defined
// console.log(result);

// let multiply = (a, b) => a + b;  
// let result = multiply(10, 20);
// console.log(result); // -> 30 ?

// let multiply = (a, b) => a * b;
// let result = multiply(10, 20);
// console.log(result); // -> 200

// console.log('abc'); // -> abc
// conole.log('def'); // -> Uncaught ReferenceError: conole is not defined
// console.log('ghi');

// try {
//     console.log('abc'); // -> abc
//     conole.log('abc');
// } catch (error) {  
//     console.log(error.message); // -> conole is not defined 
// }

//6.0.4 Errors without exceptions?.........................................................

// console.log(100 / 0); // -> Infinity
// let mult = (100 * "2")
// console.log(mult);  // -> 200
// console.log(typeof mult);
// console.log(100 * "abc"); // -> NaN

// console.log(Math.pow("abc", "def")); // -> NaN



let sX = prompt("Enter the first number");
let sY = prompt("Enter the second number");
let x = Number(sX);
let y = Number(sY);
if (Number.isFinite(x) && Number.isFinite(y) && y !== 0) {
    console.log(x / y);
} else {
    console.log("incorrect arguments");
}
