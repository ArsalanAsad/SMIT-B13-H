//6.2.1 Testing and debugging your code....................................................
// function average(a, b) {
//     return a + b / 2;
// }
 
// console.log(average(2, 10));   // -> 7 expected: 6
// console.log(average(5, 5));    // -> 7.5 expected: 5

// return a + b / 2;

// return a + (b / 2);

// return (a + b) / 2

// function largest(a, b, c) {
//     if (a > b && a > c) {
//         return a;
//     } else if (b > a && b > c) {
//         return b;
//     } else {
//         return c;
//     }
// }

// console.log(largest(1, 1, 2)); // -> 2
// console.log(largest(1, 2, 3)); // -> 3
// console.log(largest(3, 2, 1)); // -> 3
// console.log(largest(2, 2, 1)); // -> 1

//6.2.2 Debugging..................................................................................

// console.log("Before debugger");
// debugger;
// console.log("After debugger");

//6.2.4 Preparation of the environment and an example...............................................

// function outer() {
//     let name = "outer";
//     let str = inner();
//     return str;
// }
 
// function inner() {
//     let name = "inner";
//     return "Hello !";
// }
 
// console.log("before outer() call");
// console.log(outer());
// console.log("after outer() call");

//6.2.5 Use of the debugger statement................................................................

console.log("before outer() call");
debugger;
console.log(outer());
console.log("after outer() call");

