//3.0.1 Operators........................

//3.0.2 Assignment operators.................................

// const name = "Alice";
// console.log(name); // -> Alice

// let year = 2050;
// let newYear = year = 2051;

// let year = 2050;
// year = 2051;
// let newYear = year;

//3.0.3 Arithmetic operators...................................
// console.log(2 + 2 * 2); // -> 6
// console.log(2 + (2 * 2)); // -> 6
// console.log((2 + 2) * 2); // -> 8

// const x = 5;
// const y = 2;
 
// console.log("addition: ", x + y); // -> 7
// console.log("subtraction: ", x - y); // -> 3
// console.log("multiplication: ", x * y); // -> 10
// console.log("division: ", x / y); // -> 2.5
// console.log("division remainder :", x % y); // -> 1
// console.log("exponent: ", x ** y); // -> 25

//3.0.4 Unary arithmetic operators...............................
// let str = "123";
// let n1 = +str;
// let n2 = -str;
// let n3 = -n2;
// let n4 = +"abcd";
 
// console.log(`${str} : ${typeof str}`); // -> 123 : string
// console.log(`${n1} : ${typeof n1}`); // -> 123 : number
// console.log(`${n2} : ${typeof n2}`); // -> -123 : number
// console.log(`${n3} : ${typeof n3}`); // -> 123 : number
// console.log(`${n4} : ${typeof n4}`); // -> NaN : number

//3.0.5 Unary increment and decrement operators.........................
// let n1 = 10;
// let n2 = 10;

// console.log(n1); // -> 10
// console.log(n1++); // -> 10
// console.log(n1); // -> 11

// console.log(n2); // -> 10
// console.log(++n2); // -> 11
// console.log(n2); // -> 11

// let n3 = 20;
// let n4 = 20;

// console.log(n3); // -> 20
// console.log(n3--); // -> 20
// console.log(n3); // -> 19

// console.log(n4); // -> 20
// console.log(n4); // -> 19
// console.log(n4); // -> 19

// console.log(0.2 + 0.1);     // 0.30000000000000004
// console.log(0.2 * 0.1);     // 0.020000000000000004
// console.log(0.3 / 0.1);     // 2.9999999999999996

// 3.0.6 Compound Assignment Operators.............................

// x += 100;
// x = x + 100;

// let x = 10;
 
// x += 2;
// console.log(x); // -> 12
// x -= 4;
// console.log(x); // -> 8
// x *= 3;
// console.log(x); // -> 24
// x /= 6;
// console.log(x); // -> 4
// x **= 3;
// console.log(x); // -> 64
// x %= 10;
// console.log(x); // -> 4

//3.0.7 Logical operators................................................
// console.log(true && true); // -> true
// console.log(true && false); // -> false
// console.log(false && true); // -> false
// console.log(false && false); // -> false

// console.log(true || true); // -> true
// console.log(true || false); // -> true
// console.log(false || true); // -> true
// console.log(false || false); // -> false

// console.log(!true); // -> false
// console.log(!false); // -> true

// const a = false;
// const b = true;
// const c = false;
// const d = true;
 
// console.log(a && b && c || d); // -> true
// console.log(a && b && (c || d)); // -> false

//3.0.8 Logical operators and non-Boolean values...................................

// let nr = 0;
// let year = 1970;
// let name = "Alice";
// let empty = "";
 
// console.log(!nr); // -> true
// console.log(!year); // -> false
// console.log(!name); // -> false
// console.log(!empty); // -> true
 
// console.log(!!nr); // -> false
// console.log(!!name); // -> true

// console.log(true && 1991); // -> 1991
// console.log(false && 1991); // -> false
// console.log(2 && 5); // -> 5
// console.log(0 && 5); // -> 0
// console.log("Alice" && "Bob"); // -> Bob
// console.log("" && "Bob"); // -> empty string
 
 
// console.log(true || 1991); // -> true
// console.log(false || 1991); // -> 1991
// console.log(2 || 5); // -> 2
// console.log(0 || 5); // -> 5
// console.log("Alice" || "Bob"); // -> Alice
// console.log("" || "Bob"); // -> Bob

//3.0.9 Compound Assignment Operators...............................

let a = true;
console.log(a); // -> true
a &&= false;
console.log(a); // -> false

let b = false;
console.log(b); // -> false
b ||= true;
console.log(b); // -> true
