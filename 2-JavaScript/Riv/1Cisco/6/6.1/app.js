
// "use strict";
// iff (true) { //-> Uncaught SyntaxError: Unexpected token '{'
//     console.log("true");
//}

// let a = b; // -> Uncaught ReferenceError: b is not defined

// fun(); / -> Uncaught ReferenceError: fun is not defined

// const someConstValue = 5;
// someConstValue = 7; // -> Uncaught TypeError: Assignment to constant variable.

// let someNumber = 10;
// someNumber.length(); // -> Uncaught TypeError: someNumber.length is not a function

// let testArray1 = Array(10);
// console.log(testArray1.length); // -> 10
// let testArray2 = Array(-1); // -> Uncaught RangeError: Invalid array length
// console.log(testArray2.length);

// let testArray1 = Array(10);
// console.log(testArray1.length); // -> 10
// let testArray2 = Array(-1); // -> Uncaught RangeError: Invalid array length
// console.log(testArray2.length);

//6.1.2 The try...catch statement.................................................................

// try {
//     // code to try
// } catch (error) {
//     // code to run in case of an error, which throw an exception
// }

// try {
//     let a = b;
// } catch (error) {
//     console.log("Caught " + error); // -> Caught ReferenceError: b is not defined
// }
// console.log("We handled the exception!"); // -> we handled the exception!

// variable instanceof type

// let result = error instanceof ReferenceError;

// let a = -2;
// try {
//     a = b;
// } catch (error) {
//     if (error instanceof ReferenceError) {
//         console.log("Reference error, reset a to -2"); // -> Reference error, reset a to -2
//         a = -2;
//     } else {
//         console.log("Other error - " + error);
//     }
// }
// console.log(a); // -> -2

//6.1.4 The finally statement..................................................................
// try {
//     // code to try
// } finally {
//     // this will be always executed
// }

// let a = 10;
// try {
//     a = 5;
// } finally {
//     console.log(a); // -> 5
// }
// console.log(a); // -> 5

// let a = 10;
// try {
//     a = b;  // ReferenceError
// } finally {
//     console.log(a); // -> 10
// }
// console.log(a);

//6.1.5 Why should we use a finally block?............................................................

// let a = 10;
// try {
//     a = b;  // ReferenceError
// } catch (error) {
//     console.log("An Error!");
// }
// console.log("Finally!");

// let a = 10;
// try {
//     a = b;  // First ReferenceError
// } catch (error) {
//     console.log(b); // Second ReferenceError
 
// }
// console.log("Finally!");

// let a = 10;
// try {
//     a = b;  // First ReferenceError
// } catch (error) {
//     console.log(b); // Second ReferenceError
 
// } finally {
//     console.log("Finally!");
// }

// let a = 10;
// try {
//     a = b; // First ReferenceError
// } catch (error) {
//     try {
//         console.log(b); // Second ReferenceError
//     } catch {
//         console.log("Second catch!"); // -> Second catch!
//     }
// } finally {
//     console.log("Finally!"); // -> Finally!
// }

//6.1.6 The throw statement and custom errors

// console.log("start"); // -> start
// throw 100; // -> Uncaught 100
// console.log("end");


// console.log("start"); // -> start
// try {
//     throw 100;
// } catch (error) {
//     console.log(error); // -> 100
// }
// console.log("end"); // -> end

// function factorial(n) {
//     let result = 1;
//     for (; n > 1; n--) {
//         result = result * n;
//     }
//     return result;
// }
 
// console.log(factorial(3)); // -> 6
// console.log(factorial(5)); // -> 120
// console.log(factorial(8)); // -> 40320
// console.log(factorial(20)); // -> 2432902008176640000
// console.log(factorial(1000)); // -> Infinity

// Function factorial(n) {
//     if (n > 20) {
//         throw new RangeError("Max value 20");
//     }
//     let result = 1;
//     for (; n > 1; n--) {
//         result = result * n;
//     }
//     return result;
// }
 
// console.log(factorial(20)); // -> 2432902008176640000
// console.log(factorial(1000)); // -> Uncaught RangeError: Max value 20

