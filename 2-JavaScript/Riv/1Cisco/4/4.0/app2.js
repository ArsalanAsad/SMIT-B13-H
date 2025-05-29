//4.0.1 Conditional Statement............................
//Definition

//4.0.2 The if statement..................................
// if (condition) {
//     block of code
// }

// let isUserReady = confirm("Are you ready?");
// console.log(isUserReady);
// if(isUserReady) {
//     alert("User is ready");
// }

// let isUserReady = confirm("Are you ready?");
// if(isUserReady) 
// console.log("User ready");
//     alert("User ready");


// let isUserReady = confirm("Are you ready?");
// if(isUserReady) {
// console.log("User ready");
//     alert("User ready");
// }

//local variable...
// let unitPrice = 10;
// let pieces = prompt("How many pieces do you order?",0);
// if (pieces > 0) {
//     let total = unitPrice * pieces;
//     console.log(total);
// }
// console.log(pieces)
// console.log(total) // -> Uncaught ReferenceError: total is not defined

//logicla and comparision operators...
//||...
// let userAge = 23;
// let isFemale = false;
// let points = 703;
// let cartValue = 299;
// let shippingCost = 9.99;
 
// if (userAge > 21) {
//     if (cartValue >= 300 || points >= 500) {
//         shippingCost = 0;
//     }
// }
 
// console.log(shippingCost);

//&&...
// if (userAge > 21 && (cartValue >= 300 || points >= 500)) {
//     shippingCost = 0;
// }
// console.log(shippingCost);

//4.0.3 The if ... else statement.............................................
// let isUserReady = confirm("Are you ready?");
 
// if (isUserReady) {
//     console.log("User ready!");
// }
 
// if (isUserReady == false) {
//     console.log("User not ready!");
// }

// if (condition) {
//   condition - true code
// } else {
//   condition - false code
// }

// let isUserReady = confirm("Are you ready?");
 
// if (isUserReady) {
//     console.log("User ready!");
// } else {
//     console.log("User not ready!");
// }

//4.0.4 The if … else … if statement..............................................
// if (conditions_1) {
//   code
// } else if (condition_2) {
//   code
// } else if (condition_3) {
//   code
// } else {
//   code
// }

// let number = prompt("Enter a number", 0);
 
// if (number < 10) {
//     alert("<10");
// } else if (number < 30) {
//     alert("<30");
// } else if (number < 60) {
//     alert("<60");
// } else if (number < 90) {
//     alert("<90");
// } else if (number < 100) {
//     alert("<100");
// } else if (number == 100) {
//     alert("100")
// } else {
//     alert(">100")
// }

//4.0.5 Conditional operator..............................
// let price = 100;
// let shippingCost;
// if (price > 50) {
//     shippingCost = 0;
// } else {
//     shippingCost = 5;
// }
// console.log(`price = ${price}, shipping = ${shippingCost}`); // -> price = 100, shipping = 0

// let price = 100;
// let shippingCost = price > 50 ? 0 : 5;
 
// console.log(`price = ${price}, shipping = ${shippingCost}`); // -> price = 100, shipping = 0

// let start = confirm("Start?");
// start ? alert("Here we go!") : console.log("Aborted");

// let start = confirm("Start?");
// let message = start ? "Here we go!": "Aborted";
// alert(message);

//4.0.6 The switch … case statement..............................
// switch (expression) {
//     case first_match:
//         code
//         break;
//     case second_match:
//         code
//         break;
//     default:  
//         code
// }

// let gate = prompt("Choose gate: a, b, or c");
// let win = false;
 
// switch (gate) {
//     case "a":
//         alert("Gate A: empty");
//         break;
//     case "b":
//         alert("Gate B: main prize");
//         win = true;
//         break;
//     case "c":
//         alert("Gate C: empty");
//         break;
//     default:
//         alert("No gate " + String(gate));
// }
 
// if (win) {
//     alert("Winner!");
// }

//4.0.8 SECTION PRACTICE...........................
// Exercise 1: Write a script that will ask the user to input a number.

// Display the message "Bingo!" when the number is greater than 90 but less than 110, otherwise display the message: "Miss". Use the if statement.
// Solution
// let number = prompt("Enter a random number");
// if(number > 90 && number < 110) {
//     alert("Bingo!");
// } else {
//     alert("Miss");
// }

// Exercise 2: Rewrite the code from the previous task, replacing if with a ternary conditional operator.
// Solution
// let number = prompt("Enter a random number");
// let message = (number > 90 && number < 110) ? "Bingo!": "Miss";
// alert(message);

// Exercise 3: Write a simple calculator application. Ask the user for the following input, one by one: two numbers and a character representing a mathematical operation, one of "+", "-", "*", "/". If the user input is valid, calculate the result and show it to the user. If the user input is invalid, display a message that informs the user that an error has occurred.

// Remember that the value returned by the prompt function is of the type string. You can use the Number.isNaN method to check if you get the correct number after conversion. For example, calling Number.isNaN(10) will return false, while Number.isNaN(NaN) will return true.
// Solution
// let firstNumber = Number(prompt("Enter first number"));
// let secondNumber = Number(prompt("Enter second number"));
// let operand = prompt("Enter operand (+, -, * or /)");
// let result;

// if (!Number.isNaN(firstNumber) && !Number.isNaN(secondNumber)) {
//     switch (operand) {
//         case "+": result = firstNumber + secondNumber; break;
//         case "-": result = firstNumber - secondNumber; break;
//         case "*": result = firstNumber * secondNumber; break;
//         case "/": result = firstNumber / secondNumber; break;
//         default: result = "Error: unknown operand";
//     }
// } else {
//     result = "Error: at least one of the entered values is not a number";
// }
// alert(result);

//4.0.9 LAB Conditional execution.............................
// Scenario
// During the last modification of the program with the contact list, we allow the user to add a new contact with the data entered by the user while the program is executing. Let's go a step further – try to modify the program so that the user has a choice of what they want to do with the list. They will have a choice of:

// showing the first contact (first)
// showing the last contact (last)
// adding a new contact (new)
// When adding a new contact, check if the user has entered all the necessary data. If at least one of the three values is missing (name, phone, or email) don't add the contact.

let contacts = [{
    name: "Maxwell Wright",
    phone: "(0191) 719 6495",
    email: "Curabitur.egestas.nunc@nonummyac.co.uk"
}, {
    name: "Raja Villarreal",
    phone: "0866 398 2895",
    email: "posuere.vulputate@sed.com"
}, {
    name: "Helen Richards",
    phone: "0800 1111",
    email: "libero@convallis.edu"
}];