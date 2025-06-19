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

// Question 6
// Review the following code:


// if (counter <= 10) {
//     if (counter >= 10) {
//      console.log(1);
//     }
// }

// We can replace it using:


// radio_button_unchecked
// if (counter >= 10) console.log(1);

// radio_button_unchecked
// if (false) console.log(1);

// radio_button_unchecked
// if (counter == 10) console.log(1); //RIGHT ANSWER

// radio_button_unchecked
// if (true) console.log(1);

// Question 7
// Review the following code snippet:


// if (counter <= 10 && show === false) {
//     console.log("test");
// }

// What values can the counter and show variables have so that the console displays "test" as a result of code execution?


// radio_button_unchecked
// counter: 9, show: true

// radio_button_unchecked
// counter: 10, show: true

// radio_button_unchecked
// counter: 10, show: false//RIGHT ANSWER

// radio_button_unchecked
// counter: 11, show: false

// /The switch statement:


// radio_button_unchecked
// is a conditional statement that allows different actions to be taken depending on the value stored in the indicated variable.
//RIGHT ANSWER
// radio_button_unchecked
// allows you to change the program mode to debug mode.

// radio_button_checked
// is a conditional statement that works identically to the if statement.

// radio_button_unchecked
// is not present in the JavaScript language.

// Question 9
// Analyze the code below:


// if (counter === 10) {
//     console.log("abc");
// }

// How can we write the same condition using the switch statement?


// radio_button_unchecked
// switch(counter) 
//   case 10:
//      console.log("abc");

// radio_button_unchecked
// switch(counter) {
//   case 10:
//      console.log("abc")//RIGHT ANSWER
// };

// radio_button_unchecked
// case(counter) {
//   switch 10:
//      console.log("abc")
// };

// radio_button_unchecked
// switch(counter) {
//   case ? 10 :
//      console.log("abc")
// };

// Question 10
// Which sequence of if ... else statements is incorrect?


// radio_button_unchecked
// if ... else if ... else if...

// radio_button_unchecked
// if ... else if ...

// radio_button_checked
// if ... else ... else if ... // RIGHT ANSWER

// radio_button_unchecked
// if ... else ...

// Question 11
// Which of the following is not a loop instruction in JavaScript?


// radio_button_unchecked
// do ... while

// radio_button_checked
// if ... else // RIGHT ANSWER

// radio_button_unchecked
// for ... of

// radio_button_unchecked
// for ... in

// Question 12
// Which of the following loop instructions is intended only to loop through all the keys of the indicated object?


// radio_button_unchecked
// do ... while

// radio_button_unchecked
// for ... of

// radio_button_unchecked
// if ... else

// radio_button_unchecked
// for ... in //RIGHT ANSWER

// Question 13
// If we want to display all the elements of the days array in reverse order (starting from the last element) then we can do this using the statement:


// radio_button_unchecked
// for(let i = days.length; i > 0; i--)
//      console.log(days[i]);

// radio_button_unchecked
// for(let i = days.length - 1; i >= 0; i--) //RIGHT ANSWER
//      console.log(days[i]);

// radio_button_unchecked
// for(let i = days.length - 1; i > 0; i--)
//      console.log(days[i]);

// radio_button_unchecked
// for(let i = days.length; i > 0; i--)
//      console.log(i);

// Question 14
// Analyze the following code:


// let a = 10;
// do {
//     console.log(a--);
// } while (a > 3);

// Which statement can replace the do ... while from the example above?


// radio_button_unchecked
// while (a >= 3)
//      console.log(a--);

// radio_button_unchecked
// while (a > 3)
//      console.log(a--);

// radio_button_unchecked
// while (a > 4)
//      console.log(--a);

// radio_button_unchecked
// while (a > 2)
//      console.log(--a);

// Question 14
// Analyze the following code:


// let a = 10;
// do {
//     console.log(a--);
// } while (a > 3);

// Which statement can replace the do ... while from the example above?


// radio_button_unchecked
// while (a >= 3)
//      console.log(a--);

// radio_button_checked
// while (a > 3)
//      console.log(a--); //RIGHT ANSWER

// radio_button_unchecked
// while (a > 4)
//      console.log(--a);

// radi/o_button_unchecked
// while (a > 2)
//      console.log(--a);

// Question 15
// Analyze the following code:


// for (let x = 10; x > 1; x -= 2)
// console.log("hello");

// How many times will "hello" be displayed in the console as a result of its execution?


// radio_button_unchecked
// 10

// radio_button_unchecked
// 5

// radio_button_unchecked
// 9

// radio_button_checked
// 4 //RIGHT ANSWER

// Question 16
// We store an array of animal names in the animals variable (e.g. let animals = ["dog", "cat", "hamster", "rabbit"];).

// Which of the following statements will display exactly two names from the array?


// radio_button_checked
// for (let i = 0; i < animals.length; i+=2)
//      console.log(animals[i]); //RGIHT ANSWER

// radio_button_unchecked
// for (let n in animals)
//      console.log(n);

// radio_button_unchecked
// for (let n of animals)
//      console.log(n);

// radio_button_unchecked
// for (let i =3 ; i < animals.length; i++)
//      console.log(animals[i]);

// Question 17
// Examine the following code:


// for (let a = 5; a > 1; a--) {
//     console.log(a);
// }
// ;

// Which statement can replace the for from the example above?


// radio_button_unchecked
// let a = 5; while (a > 1)
//      console.log(a--);//RIGHT ANSWER

// radio_button_unchecked
// let a = 6; while (a >= 1)
//      console.log(a--);

// radio_button_unchecked
// let a = 1; while (a < 5)
//      console.log(a++);

// radio_button_unchecked
// let a = 5; while (a > 1)
//      console.log(a++);


// Question 18
// Examine the following code:


// for (let a = 4; a < 4; a++) {
//     console.log("test");
// }

// How many times will "test" be displayed in the console as a result of its execution?


// radio_button_unchecked
// 4

// radio_button_unchecked
// 1

// radio_button_checked
// 3

// radio_button_unchecked
// It will not be displayed at all. // Right Answer


// Question 19
// Examine the following code:


// let car = {make: "Citroen", model: "DS"};
// for (let f in car)
// console.log(f);

// What will appear on the console as a result?


// radio_button_unchecked
// "car"

// radio_button_unchecked
// "Citroen" "DS"

// radio_button_checked
// "make""model" //RIGHT ANSWER

// radio_button_unchecked
// "make: Citroen" "model: DS"

// Question 20
// Examine the following code:


// let steps = [3, 2, 1];
// for (let n of steps)
// console.log(n);

// What will appear on the console as a result?


// radio_button_unchecked
// 0 1 2

// radio_button_unchecked
// 3 2 1

// radio_button_unchecked
// 1 2 3

// radio_button_unchecked
// "[3, 2, 1]"