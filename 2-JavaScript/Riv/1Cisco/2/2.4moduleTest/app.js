//Question 1
// We need to come up with a name for a variable where we will store the age of a user. All of the following variable names are formally correct, but one of them is the most readable, indicate which one:


// radio_button_unchecked
// user

// radio_button_unchecked
// userAge

// radio_button_unchecked
// ua

// radio_button_unchecked
// age

// Question 2
// Point out the correct declaration of the height variable:


// radio_button_unchecked
// height is variable;

// radio_button_unchecked
// variable height;

// radio_button_unchecked
// height;

// radio_button_unchecked
// let height;

// Question 3
// Analyze the following code:
// let counter = 100;
// let counter = 200;
// counter = 300;
// console.log(counter)
// As a result of its execution:


// radio_button_unchecked
// the counter variable will have the value 300.

// radio_button_unchecked
// the counter variable will have the value 100.

// radio_button_checked
// the program will be aborted due to an error (redeclaration of a variable).

// radio_button_unchecked
// the counter variable will have the value 200.

// Question 4
// Review the following code (note the variable name):
// let age = 32;
// age = age + 1;
// console.log(Age);
// As a result of its execution, the following should appear in the console:


// radio_button_unchecked
// 33

// radio_button_checked
// error message: "Uncaught ReferenceError: Age is not defined"

// radio_button_unchecked
// undefined

// radio_button_unchecked
// 32

// Question 5
// We want to declare a distance constant and initialize it with the value 120. What should such a declaration look like?


// radio_button_unchecked
// const distance; distance = 120;

// radio_button_checked
// const distance = 120;

// radio_button_unchecked
// let constant distance = 120;

// radio_button_unchecked
// let distance; const distance = 120;

// Question 6
// By default, JavaScript allows us to write to an undeclared variable (it declares it implicitly for us). If we want the interpreter to treat such a situation as an error, we have to:


// radio_button_unchecked
// place the "use strict"; directive at the beginning of the script.

// radio_button_unchecked
// place the "use strict"; directive before each write we want to protect.

// radio_button_unchecked
// perform all writes to variables in a block of code delimited by braces.

// radio_button_unchecked
// place the "prevent undeclared variables"; directive at the beginning of the script.

// Question 7
// Analyze the code snippet:
// let name;
// let age;
// {
// let height;
// 			// 2
//  { 					// 2
//  { let weight; 		// 1 	// 2
//  console.log(name); 	// 1 	// 2
//  					// 2
//    console.log(name); 		// 2
// }
// }
// }
// We have access to the weight variable:


// radio_button_unchecked
// throughout the program.

// radio_button_unchecked
// in the part marked 1.

// radio_button_unchecked
// in the part marked 2.

// radio_button_unchecked
// nowhere, as we have no access at all (the variable has not been initialized).

// Question 8
// What does shadowing mean?


// radio_button_unchecked
// Changing the value of a variable.

// radio_button_unchecked
// Declaring a local variable with the same name as the previously declared global variable.

// radio_button_unchecked
// Deleting and rewriting a selected piece of program code.

// radio_button_unchecked
// Declaring a global variable with the same name as a previously declared global variable.

// Question 9
// Analyze the following code:
// let height = 180;
// {
// let height = 200;
// height = height + 10;
// }
//  console.log(height);
// As a result of its execution:


// radio_button_unchecked
// a value of 200 will be displayed in the console.

// radio_button_unchecked
// the program will be terminated due to an error (re-declaration of the height variable).

// radio_button_unchecked
// a value of 210 will be displayed in the console.

// radio_button_unchecked
// a value of 180 will be displayed in the console.

// Question 10
// Complex (or composite) data types:


// radio_button_unchecked
// may consist of multiple elements, each of which may be of a primitive or composite type.

// radio_button_unchecked
// may consist of multiple elements, each of which is of a primitive type.

// radio_button_unchecked
// is an alternative name for primitive types.

// radio_button_unchecked
// are not used in JavaScript.

// Question 11
// If a variable stores the value false, then the variable:


// radio_button_unchecked
// is of the Logical type.

// radio_button_unchecked
// is of the Math type.

// radio_button_checked
// is of the Boolean type.

// radio_button_unchecked
// will no longer be used in the program.

// Question 12
// Analyze the following code:

// let x = 10 / 100;
// {
// console.log(typeof (x));
// }
// As a result of its execution:


// radio_button_unchecked
// it will display fraction in the console.

// radio_button_unchecked
// it will display number in the console.

// radio_button_unchecked
// it will display 0.1 in the console.

// radio_button_unchecked
// an error will appear because JavaScript does not allow operations on fractional numbers.

// Question 13
// We can replace the declaration let x = 0x21; with:


// radio_button_unchecked
// let x = 17;

// radio_button_unchecked
// let x = 21;

// radio_button_unchecked
// let x = "0x21";

// radio_button_unchecked
// let x = 33;

// Question 14
// Performing the operation: let x = 100 / 0; will result in:


// radio_button_unchecked
// the value NaN being stored in the variable x.

// radio_button_checked
// the value 0 being stored in the variable x.

// radio_button_unchecked
// an Infinity value being stored in the variable x.

// radio_button_unchecked
// an undefined value being stored in the variable x.

// Question 15
// Performing the operation: let x = 20n + 10; will:


// radio_button_unchecked
// cause the program to abort due to an error.

// radio_button_checked
// result in the string "20n10" being stored in the variable x.

// radio_button_unchecked
// result in a value of 30n being stored in the variable x.

// radio_button_unchecked
// result in a value of 30 being stored in the variable x.

// Question 16
// Performing the operation: let x = "Alice" + 10; will result in:


// radio_button_unchecked
// the value NaN of Number type to be stored in the variable x.

// radio_button_unchecked
// the value 15 of Number type to be stored in the variable x.

// radio_button_unchecked
// the program execution to abort due to an error.

// radio_button_checked
// the value "Alice10" of String type to be stored in the variable x.

// Question 17
// The msg variable contains a String type value. Information about the number of characters of this string can be obtained using:


// radio_button_unchecked
// msg.length

// radio_button_unchecked
// msg.length()

// radio_button_unchecked
// msg.charsAt()

// radio_button_checked
// msg.chars

// Question 19
// We want to convert the string "1024" to type Number and store the result in variable n. Point out the correct statement:


// radio_button_checked
// let n = Number("1024");

// radio_button_unchecked
// let n = "1024" + 0;

// radio_button_unchecked
// let n = String("1024");

// radio_button_unchecked
// let n = StringToNumber("1024");

// Question 20
// We declare an object called dog, with two fields: age and name:
// let dog = {
// age: 5,
// name: "Axel"
// }
// To change the value of the age field to 6, we need to perform:


// radio_button_checked
// dog{age} = 6;

// radio_button_unchecked
// age of dog = 6;

// radio_button_unchecked
// dog[age] = 6;

// radio_button_unchecked
// dog.age = 6;

// Question 21
// We have declared an array of selected month names let summer = ["June", "July", "August"];. We want to change the value "July" stored in the array to the number 7:


// radio_button_checked
// summer[1] = 7;

// radio_button_unchecked
// summer.July = 7;

// radio_button_unchecked
// summer[0] = 7;

// radio_button_unchecked
// We cannot do this (an array can only contain elements of the same type).

// Question 22
// In order to check the number of elements of the array stored in the names variable, we call:


// radio_button_checked
// names.count

// radio_button_unchecked
// names.length

// radio_button_unchecked
// names.length();

// radio_button_unchecked
// length of names;

// Question 23
// Analyze the code snippet:

// let summer = ["June", "July", "August"];
// let index = summer.indexOf("June");
// The index variable will have the value:


// radio_button_checked
// 0

// radio_button_unchecked
// 1

// radio_button_unchecked
// True

// radio_button_unchecked
// "June"

// Question 24
// We have declared an array of animals let animals = ["dog", "cat", "hamster"];. Then we call the method animals.push("canary");. As a result, the animals array will look like this:


// radio_button_unchecked
// ["canary"]

// radio_button_unchecked
// ["canary", "dog", "cat", "hamster"]

// radio_button_unchecked
// ["dog", "cat", "hamster", "canary"]

// radio_button_unchecked
// ["dog", "cat", "hamster"]

// Question 25
// We have declared an array of animals let animals = ["dog", "cat", "hamster"];. Then we call the method animals.pop();. As a result, the animals array will look like this:


// radio_button_unchecked
// ["hamster"]

// radio_button_unchecked
// ["cat", "hamster"]

// radio_button_unchecked
// ["dog", "cat", "hamster"]

// radio_button_checked
// ["dog", "cat"]

// Question 26
// In the daysOfWeek variable, we place an array with the names of the days of the week. To reverse the order of the array elements, we should call:


// radio_button_checked
// daysOfWeek.reverse();

// radio_button_unchecked
// daysOfWeek.invert();

// radio_button_unchecked
// invert(daysOfWeek);

// radio_button_unchecked
// reverse daysOfWeek;

// Question 27
// We have declared an array let animals = ["dog", "cat", "hamster"];. We want to temporarily comment out the element "cat", and to do this, we can modify the declaration as follows:


// radio_button_checked
// let animals = ["dog", //"cat",// "hamster"];

// radio_button_unchecked
// let animals = ["dog", /*"cat",*/ "hamster"];

// radio_button_unchecked
// let animals = ["dog", #"cat",# "hamster"];

// radio_button_unchecked
// let animals = ["dog", "hamster"];

// Question 28
// Analyze the code snippet:


// let counter = 0;
// let userName = "John";

// After declaring a counter variable, we want to put a short comment with information about what the variable is used for. To do this, we modify the line with the declaration to the form:


// radio_button_unchecked
// let counter = 0; /* user visit counter

// radio_button_unchecked
// let counter = 0; user visit counter

// radio_button_unchecked
// let counter = 0; # user visit counter

// radio_button_checked
// let counter = 0; // user visit counter