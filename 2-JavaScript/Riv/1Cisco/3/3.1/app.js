//3.1.1 String operators...................................
// let greetings = "Hi";
// console.log(greetings + " " + "Alice"); // -> Hi Alice
 
// let sentence = "Happy New Year ";
// let newSentence = sentence + 10191;
 
// console.log(newSentence); // -> Happy New Year 10191
// console.log(typeof newSentence); // -> string

//Compound Assignment Operators...,
// let sentence = "Happy New ";
// sentence += "Year ";
// sentence += 10191;
// console.log(sentence); // -> Happy New Year 10191

//3.1.2 Comparison operators...............................
// console.log(10 === 5); // -> false
// console.log(10 === 10); // -> true
// console.log(10 === 10n); // -> false
// console.log(10 === "10"); // -> false
// console.log("10" === "10"); // -> true
// console.log("Alice" === "Bob"); // -> false
// console.log(0 === false); // -> false
// console.log(undefined === false); // -> false

// The equality operator requires that they are only equal, and their types are not compared. So if the operands are of different types, the interpreter will try to convert them to numbers, for example, false will convert to 0, true to 1, undefined to NaN, null to 0, 10n to 10 and "123" to 123, etc.

// console.log(10 == 5); // -> false
// console.log(10 == 10); // -> true
// console.log(10 == 10n); // -> true
// console.log(10 == "10"); // -> true
// console.log("10" == "10"); // -> true
// console.log("Alice" == "Bob"); // -> false
// console.log(0 == false); // -> true
// console.log(undefined == false); // -> false
// console.log(NaN == NaN); // -> false

//.....................................
// console.log(10 !== 5); // -> true
// console.log(10 !== 10); // -> false
// console.log(10 !== 10n); // -> true
// console.log(10 !== "10"); // -> true
// console.log("10" !== "10"); // -> false
// console.log("Alice" !== "Bob"); // -> true
// console.log(0 !== false); // -> true
// console.log(undefined !== false); // -> true
// console.log(10 != 5); // -> true
// console.log(10 != 10); // -> false
// console.log(10 != 10n); // -> false
// console.log(10 != "10"); // -> false
// console.log("10" != "10"); // -> false
// console.log("Alice" != "Bob"); // -> true
// console.log(0 !=  false); // -> false
// console.log(undefined != false); // -> true
// console.log(NaN != NaN); // -> true

//......................................
// console.log(10 > 100); // -> false
// console.log(101 > 100); // -> true
// console.log(101 > "100"); // -> true
 
// console.log(101 < 100); // -> false
// console.log(100n < 102); // -> true
// console.log("10" < 20n); // -> true
 
// console.log(101 <= 100); // -> false
// console.log(10 >= 10n); // -> true
// console.log("10" <=  20); // -> true

//.......................................
// console.log("b" > "a"); // -> true
// console.log("a" > "B"); // -> true
// console.log("B" > "A"); // -> true
// console.log("A" > "4"); // -> true
// console.log("4" > "1"); // -> true
 
// console.log("ab1" < "ab4"); // -> true
// console.log("ab4" < "abA"); // -> true
// console.log("abB" < "aba"); // -> true
// console.log("aba" < "abb"); // -> true
 
// console.log("ab" < "ab4"); // -> true

//3.1.3 Other operators......................................
//typeof...
// let year = 10191;
// console.log(typeof year); // -> number
// console.log(typeof false); // -> boolean

//instanceof...
// let names = ["Patti", "Bob"];
// let name = names[0];
// console.log(name);
// console.log(names instanceof Array); // -> true
// console.log(name instanceof Array); // -> false

//delete...
// let user = {
//      name: "Alice",
//      age: 38
// };
// console.log(user.age); // -> 38
// delete user.age;
// console.log(user.age); // -> undefined

//ternary...
// console.log(true ? "Alice" : "Bob"); // -> Alice
// console.log(false ? "Alice" : "Bob"); // -> Bob

// let name = 1 > 2 ? "Alice" : "Bob";
// console.log(name); // -> Bob

//3.1.4 Precedence.......................................................
// let a = 10;
// let b = a + 2 * 3;
// let c = a + 2  < 20 - 15;
// console.log(a); // -> 10
// console.log(b); // -> 16
// console.log(c); // -> false

let a, b;
b = (a = (20 + 20) * 2) > (3 ** 2);
console.log(a); // -> 60
console.log(b); // -> true
