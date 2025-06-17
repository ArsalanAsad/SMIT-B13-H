///4.2 MODULE TEST...........................
// Question 1
// The condition if( a >= 0 ) can be replaced by the condition:


// radio_button_unchecked
// if (!(a > 0 && a == 0));

// radio_button_unchecked
// if (0 < a);

// radio_button_unchecked
// if (a > 0 || a == 0); //RIGHT ANSWER

// radio_button_unchecked
// if (a > 0 && a == 0);

// Question 2
// The condition if (!a) can be replaced by the condition:


// radio_button_unchecked
// if (a === false);

// radio_button_unchecked
// if (a);

// radio_button_unchecked
// if (!!a);

// radio_button_unchecked
// if (a == false); //RIGHT ANSWER

// Question 3
// We want to rewrite the following code snippet using the conditional operator:


// let name;
// if (test) {
//     name = "Alice";
// } else {
//     name = "Bob";
// }

// Which notation is correct?


// radio_button_unchecked
// let name = (test)("Alice")("Bob");

// radio_button_unchecked
// let name = test ? "Alice" : "Bob";

// radio_button_unchecked
// let name = test : "Alice" ? "Bob";

// radio_button_unchecked
// let name = if test ? "Alice" : "Bob"; //RIGHT ANSWER

// Question 4
// Which of the following operators is a ternary one?


// radio_button_unchecked
// A typeof operator.

// radio_button_unchecked
// A conditional operator ? :. //RIGHT ANSWER

// radio_button_unchecked
// An increment operator ++.

// radio_button_unchecked
// An assignment operator =.

// Question 5
// Review the following code:


// let x = 100;
// if (x < 100)
//     x = 20;
// console.log(x)

// What will be displayed in the console as a result of its execution?


// radio_button_unchecked
// nothing

// radio_button_unchecked // RIGHT ANSWER
// 100

// radio_button_unchecked
// 20

// radio_button_unchecked
// false

let keepGoing = true;

while (keepGoing) {
    let num1 = prompt("Enter the first number (or type 'exit' to quit):");
    if (num1.toLowerCase() === 'exit') break;

    let num2 = prompt("Enter the second number (or type 'exit' to quit):");
    if (num2.toLowerCase() === 'exit') break;

    let operator = prompt("Enter operator (+, -, *, /) (or type 'exit' to quit):");
    if (operator.toLowerCase() === 'exit') break;

    num1 = parseFloat(num1);
    num2 = parseFloat(num2);

    if (isNaN(num1) || isNaN(num2)) {
        alert("Invalid number. Try again.");
        continue;
    }

    let result;
    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            if (num2 === 0) {
                alert("Error: Division by zero");
                continue;
            }
            result = num1 / num2;
            break;
        default:
            alert("Invalid operator. Try again.");
            continue;
    }

    alert(`Result: ${result}`);
}
