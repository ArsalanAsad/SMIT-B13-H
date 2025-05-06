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

// console.log("before outer() call");
// debugger;
// console.log(outer());
// console.log("after outer() call");

//6.2.6 Resume execution..............................................................................

//6.2.10 Call stack...................................................................................
// console.log(name); // -> inner

// console.log(name); // -> outer

//Viewing and modifying variables......................................
// console.log(name); // -> inner
// name = "new name";
// console.log(name); // -> new name

//6.2.11 Step Out......................................................................................
// let part = 0;
// for (let k = 0; k < 10000000; k++) {
//     part = part + ((-1) ** k) / (2 * k + 1);
// }
// let pi = part * 4;
// console.log(pi); // -> 3.1415925535897915

// let part = 0;
// console.time('Leibniz');
// for (let k = 0; k < 10000000; k++) {
//     part = part + ((-1) ** k) / (2 * k + 1);
// }
// console.timeEnd('Leibniz'); // -> Leibniz: 456.60498046875 ms
// let pi = part * 4;
// console.log(pi); // -> 3.1415925535897915

// let part = 0;
// console.time('Leibniz');
// for(let k = 0; k < 10000000; k++) {
//     part = part + (k % 2 ? -1 : 1) / (2 * k + 1);
// }
// console.timeEnd('Leibniz'); // -> Leibniz: 175.5458984375 ms
// let pi = part * 4;
// console.log(pi);

//6.2.13 SECTION PRACTICE.....................................................................

//Excercise01
// let end = 2; 
// for(let i=1; i
//     console.log(i); 
// }

// let end = 6; 
// for (let i = 1; i < end; i++) {
//     console.log(i); 
// }

//Excercise02
// let counter = 0; 
// let maxValue = 10; 
// let result = 1; 
 
// debugger; 
// for (counter = 0; counter < maxValue; counter++) { 
//     console.log(result); 
//     result *= maxValue - counter - 1; 
// } 
 
// console.log("Final result: ", result);

// for (counter = 0; counter < maxValue; counter++) {
//     console.table({
//         counter,
//         multiplier: maxValue - counter - 1,
//         result
//     });
//     result *= maxValue - counter - 1;
// }

//Excercise03
// function max(array) { 
//     let maxValue = array[1]; 
//     for(let i=1; i
//         if(array[i] > maxValue) { 
//             maxValue = array[i]; 
//         } 
//     } 
//     return maxValue; 
// } 
 
// console.log( max([1, 4, 6, 2])); // -> 6 
// console.log( max([10, 4, 6, 2])); // -> 6

//Solutions
function max(array) {
    let maxValue = array[0]; // Start from the first element
    for (let i = 1; i < array.length; i++) {
        if (array[i] > maxValue) {
            maxValue = array[i];
        }
    }
    return maxValue;
}

console.log(max([1, 4, 6, 2]));     // -> 6
console.log(max([10, 4, 6, 2]));    // -> 10 ✅
