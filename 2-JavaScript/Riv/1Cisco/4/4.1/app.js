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

let values = [10, 30, 50, 100];
// for (let i = 0; i < values.length; i++) {
//     console.log(values[i]);
// }

for (let i = values.length - 1; i >= 0; i--) {
    console.log(values[i]);
}