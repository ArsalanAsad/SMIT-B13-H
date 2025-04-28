//4.0.2 The if statement
//let isUserReady = confirm("Are you ready?");
// console.log(isUserReady);
// if (isUserReady) {
//     alert("User ready!");
// }

// let isUserReady = confirm("Are you ready?");

// if (isUserReady) {
//     console.log("User ready!");
//     alert("User ready!");
//}

// let unitPrice = 10;
// let pieces = prompt("How many pieces do you order?", 0);
// if (pieces > 0) {
//     let total = unitPrice * pieces;
//     console.log(total);
// }
// console.log(total); // -> Uncaught ReferenceError: total is not defined

// let userAge = 18;
// let isFemale = false;
// let points = 495;
// let cartValue = 299;
// let shippingCost = 9.99;

// if (userAge > 21) {
//     if (cartValue >= 300 || points >= 500) {
//         shippingCost = 0;
//     }
// }

//console.log(shippingCost);

// if (userAge > 21 && (cartValue >= 300 || points >= 500)) {
//     shippingCost = 0;
//     console.log(shippingCost)
//}

//4.0.3 The if ... else statement

//let isUserReady = confirm("Are you ready?");

// if (isUserReady) {
//     console.log("User ready!");
// }

// if (isUserReady == false) {
//     console.log("User not ready!");
// }

// if (condition) {
//     condition - true code
//   } else {
//     condition - false code
//   }

// let isUserReady = confirm("Are you ready?");

// if (isUserReady) {
//     console.log("User ready!");
// } else {
//     console.log("User not ready!");
// }

//4.0.4 The if … else … if statement

// if (conditions_1) {
//     code
//   } else if (condition_2) {
//     code
//   } else if (condition_3) {
//     code
//   } else {
//     code
//   }

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

// const INSURANCE_COST = 2.99;

// let shippingCost = 9.99;
// let isOrderValid = true;

// let userAge = 22;
// let points = 400;
// let cartValue = 199;
// let hasPromoCode = false;
// let hasParentsApproval = false;
// let addInsurance = true;

// /** calculate shipping cost*/
// if ((userAge > 65) || (userAge >= 21 && (hasPromoCode || cartValue > 300 || points > 500))) {
// shippingCost = 0;
// } else if (userAge < 21 && hasParentsApproval) {
// shippingCost = shippingCost - 5;
// } else if (userAge < 21) {
// isOrderValid = false;
// }

// /** take account of insurance */
// if (isOrderValid && addInsurance && !hasPromoCode) {
// shippingCost += INSURANCE_COST;
// }

// /** show message */
// if (isOrderValid) {
// console.log(shippingCost);
// } else {
// console.log("Cannot order if under 21");
// }

//4.0.5 Conditional operator

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
// let message = start ? "Here we go!" "Aborted";
// alert(message);

// let start = confirm("Start?");
// let message = start ? "Here we go!" : "Aborted";
// alert(message);

//4.0.6 The switch … case statement

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

let gate = prompt("Choose gate: a, b, or c");
let win = false;

switch (gate) {
    case "a":
        alert("Gate A: empty");
        break;
    case "b":
        alert("Gate B: main prize");
        win = true;
        break;
    case "c":
        alert("Gate C: empty");
        break;
    default:
        alert("No gate " + String(gate));
}

if (win) {
    alert("Winner!");
}

//4.0.8 SECTION PRACTICE
//Example01 Write a script that will ask the user to input a number.
// Display the message "Bingo!" when the number is greater than 90 but less than 110, otherwise display the message: "Miss". Use the if statement.

// let number = prompt("Enter a random number");
// if(number > 90 && number < 110) {
//     alert("Bingo!");
// } else {
//     alert("Miss");
// }

//Example02 Rewrite the code from the previous task, replacing if with a ternary conditional operator.

let number = prompt("Enter a random number");
let message = (number > 90 && number < 110) ? "Bingo!" : "Miss";
alert(message);

//Example03 Write a simple calculator application. Ask the user for the following input, one by one: two numbers and a character representing a mathematical operation, one of "+", "-", "*", "/". If the user input is valid, calculate the result and show it to the user. If the user input is invalid, display a message that informs the user that an error has occurred.
// Remember that the value returned by the prompt function is of the type string. You can use the Number.isNaN method to check if you get the correct number after conversion. For example, calling Number.isNaN(10) will return false, while Number.isNaN(NaN) will return true.

let firstNumber = Number(prompt("Enter first number"));
let secondNumber = Number(prompt("Enter second number"));
let operand = prompt("Enter operand (+, -, * or /)");
let result;

if (!Number.isNaN(firstNumber) && !Number.isNaN(secondNumber)) {
    switch (operand) {
        case "+": result = firstNumber + secondNumber; break;
        case "-": result = firstNumber - secondNumber; break;
        case "*": result = firstNumber * secondNumber; break;
        case "/": result = firstNumber / secondNumber; break;
        default: result = "Error: unknown operand";
    }
} else {
    result = "Error: at least one of the entered values is not a number";
}
alert(result);

//4.0.9  LAB  Conditional execution
let contacts = [
    {
      name: "Maxwell Wright",
      phone: "(0191) 719 6495",
      email: "Curabitur.egestas.nunc@nonummyac.co.uk"
    },
    {
      name: "Raja Villarreal",
      phone: "0866 398 2895",
      email: "posuere.vulputate@sed.com"
    },
    {
      name: "Helen Richards",
      phone: "0800 1111",
      email: "libero@convallis.edu"
    }
  ];
  
  let choice = prompt("What do you want to do? (first, last, new)");
  
  if (choice === "first") {
    let first = contacts[0];
    alert(`Name: ${first.name}\nPhone: ${first.phone}\nEmail: ${first.email}`);
  } else if (choice === "last") {
    let last = contacts[contacts.length - 1];
    alert(`Name: ${last.name}\nPhone: ${last.phone}\nEmail: ${last.email}`);
  } else if (choice === "new") {
    let name = prompt("Enter name:");
    let phone = prompt("Enter phone:");
    let email = prompt("Enter email:");
  
    if (name && phone && email) {
      contacts.push({ name, phone, email });
      alert("Contact added successfully.");
    } else {
      alert("Error: All fields (name, phone, email) are required. Contact not added.");
    }
  } else {
    alert("Invalid option selected.");
  }
  