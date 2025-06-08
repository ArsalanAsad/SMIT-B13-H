//4.1.2 The while loop........................
// console.log(0); // -> 0
// console.log(10); // -> 10
// console.log(20); // -> 20
// console.log(30); // -> 30
// console.log(40); // -> 40
// console.log(50); // -> 50
// console.log(60); // -> 60
// console.log(70); // -> 70
// console.log(80); // -> 80
// console.log(90); // -> 90

// let n = 0;
 
// console.log(n); // -> 0
// n += 10;
// console.log(n); // -> 10
// n += 10;
// console.log(n); // -> 20
// n += 10;
// console.log(n); // -> 30
// n += 10;
// console.log(n); // -> 40
// n += 10;
// console.log(n); // -> 50
// n += 10;
// console.log(n); // -> 60
// n += 10;
// console.log(n); // -> 70
// n += 10;
// console.log(n); // -> 80
// n += 10;
// console.log(n); // -> 90
// n += 10;

// console.log(n);
// n += 10;

// let n = 0;
// while(n < 91) {
//     console.log(n); // -> 0, 10, 20, 30, 40, 50, 60, 70, 80, 90
//     n += 10;
//}

// while(condition) {
//     block of code
// }

// let n = 0
// while(n < 91) {
//     // n += 10;  //count arrive at 100 here because while loop runt atleast one time before checking condition.
//     console.log(n);
//     n +=10;
// }

// let isOver = false;
// let counter = 1;
// while (isOver != true) {
//     let continueLoop = confirm(`[${counter}] Continue the loop?`)
//     isOver = continueLoop === true ? false : true;
//     counter = counter +1;
// }

// let isOver = false;
// let counter = 1;
 
// while (!isOver) {
//     isOver = !confirm(`[${counter++}] Continue the loop?`);
// }

//4.1.3 The do … while loop........................................

// do {
//     code block
// } while(condition);

// let isOver;
// let counter = 1;
 
// do {
//     isOver = !confirm(`[${counter++}] Continue the loop?`);
// } while (!isOver);

// let condition = false;
 
// while (condition) {
//     console.log("A while loop iteration."); // never executed
// }
 
// do {
//     console.log("A do ... while loop iteration."); // executed once
// } while (condition);

//4.1.4 The for loop...........................................
// for (initialization; condition; increment) {
//     block of code
// }

// for (let i = 0; i < 10; i++) {
//     console.log(i);
// }

// let i = 0;
// while (i < 10) {
//     console.log(i);
// i++;
// }

// let values = [10, 30, 50, 100];
// let sum = 0;
// for (let i = 0; i < 4; i++) {
//     sum += values[i];
// }
// console.log(sum); // -> 190

// let values = [10, 30, 50, 100];
// let sum = 0;
// for (let i = 0; i < values.length; i++) {
//     sum += values[i];
// }
// console.log(sum); // -> 190

//4.1.5 Loops and arrays....................
// let names = [];
// let isOver = false;
// while (!isOver) {
//     let name = prompt("Enter mother name or press cancel;");
//     if (name != null) {
//         names.push(name);
//     } else {
//         isOver = true
//     }
// }
// for (let i = 0; i<names.length; i++) {
//     console.log(names[i]);
// }

// let values = [10, 30, 50, 100];
// for (let i = 0; i < values.length; i++) {
//     console.log(values[i]);
// }

// for (let i = values.length - 1; i >= 0; i--) {
//     console.log(values[i]);
// }

//4.1.5 Loops and arrays...............................
// let names = [];
// let isOver = false;
// while (!isOver) {
//     let name = prompt("Enter another name or press cancel.");
//     if (name != null) {
//         names.push(name);
//     } else {
//         isOver = true;
//     }
// }
 
// for (let i = 0; i < names.length; i++){
//     console.log(names[i]);
// }

//4.1.6 for … of.........................................
// let values = [10, 30, 50, 100];
// let sum = 0;
// for (let i = 0; i < values.length; i++) {
//     sum += values[i];
// }
// console.log(sum); // -> 190

// let values = [10, 30, 50, 100];
// let sum = 0;
// for (let number of values) {
//     sum += number;
// }
// console.log(sum); // -> 190

// for (variable of array) {
//     block of code
// }

// let cities = [
//     { name: "New York", population: 18.65e6 },
//     { name: "Cairo", population: 18.82e6 },
//     { name: "Mumbai", population: 19.32e6 },
//     { name: "São Paulo", population: 20.88e6 },
//     { name: "Mexico City", population: 21.34e6 },
//     { name: "Shanghai", population: 23.48e6 },
//     { name: "Delhi", population: 25.87e6 },
//     { name: "Tokyo", population: 37.26e6 }
// ];
 
// for (let city of cities) {
//     if (city.population > 20e6) {
//         console.log(`${city.name} (${city.population})`);
//     }
// }

//4.1.7 for … in.......................................
// let user = {
//     name: "Calvin",
//     surname: "Hart",
//     age: 66,
//     email: "CalvinMHart@telworm.com"
// };

// for (let key in user) {
//     console.log(key); //
// }

// console.log(user.name); // -> Calvin
// console.log(user[name]); // -> Calvin

// for (let key in user) {
//     console.log(`${key} -> ${user[key]}`);
//     console.log(typeof key);
//     console.log(typeof user)
// };

//4.1.8 The break and continue statements............................

// let i = 0;
// while (true) {
//     console.log(i);
//     i++;
//     if (i >=5 ) {
//         break;
//     }
//  }
// alert(`Existed the loop with a break(${i}).`)

// for (let i = 0; i < 10; i++) {
//     if (i == 3) {
//         continue;
//     }
//     console.log(i);
// }

//4.1.9 The break keyword....................................

// let gate = prompt("Choose gate: a, b, or c");
// let win = false;
 
// switch (gate) {
//     case "a":
//         alert("Gate A: is empty");
//     case "b":
//         alert("Gabe B: win");
//         win = true;
//     case "c":
//         alert("Gate C: is empty")
// };
// if (win) {
//     alert("win")
// };

// let gate = prompt("Choose gate: a, b, or c");
// let win = false;

// switch (gate) {
//     case "a":
//         alert("Gate A: empty");
//     case "b":
//         alert("Main prize");
//     win = true;
//     case "c":
//         alert("Gate c: empty");
//     default:
//         alert("No gate" + String(gate));
// }
// if (win) {
//     alert("winner")
// } 


// let gate = prompt("Choose gate: a, b, or c");
// let win = false;
 
// switch (gate) {
//     case "a":
//     case "A":
//     case 1:
//     case "1":
//         alert("Gate A: empty");
//         break;
//     case "b":
//     case "B":
//     case 2:
//     case "2":
//         alert("Gate B: main prize");
//         win = true;
//         break;
//     case "c":
//     case "C":
//     case 3:
//     case "3":
//         alert("Gate C: empty");
// }
// if (win) {
//     alert("Winner!");
// };

// let gate = prompt ("choose gae: a, b, or c")
// let win = false
// switch(gate) {
//     case "a": {
//         let message = "Gate A";
//         console.log(message);
//         break;
//     }
//     case "b": {
//         let message = "Gate B";
//         console.log(message);
//         break
//     }
//     case "c": {
//         let message = "Gate C";
//         console.log(message);
//         break;
//     }
//     default:
//         alert("No gate" + String(gate));
// }
// if (win){
//     alert("Winner")
// }

//4.1.11 SECTION PRACTICE.................................................................

//Exercise 1: Write a piece of code that will write numbers from 100 to 0 to the console, but in steps of 10; so 100, 90, 80... etc.

for (let i = 100; i >= 0; i -= 10) {
    console.log(i);
}

