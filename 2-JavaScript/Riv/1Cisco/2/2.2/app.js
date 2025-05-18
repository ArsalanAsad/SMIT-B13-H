//2.2.1 Complex data types..................
//objects...............

// let  testObj  =  {};
// console.log(typeof  testObj);  //  ->  object

// let  testObj  =  {
// 	nr:  600,
// 	str:  "text"
// };
// console.log(testObj.nr);  //  ->  600
// console.log(testObj.str);  //  ->  text

// let  name1  =  "Calvin";
// let  surname1  =  "Hart";
// let  age1  =  66;
// let  email1  =  "CalvinMHart@teleworm.us";
   
// let  name2  =  "Mateus";
// let  surname2  =  "Pinto";
// let  age2  =  21;
// let  email2  =  "MateusPinto@dayrep.com";

// let  user1  =  {
//          name:  "Calvin",
//          surname:  "Hart",
//          age:  66,
//          email:  "CalvinMHart@teleworm.us"
// };
   
// let  user2  =  {
//          name:  "Mateus",
//          surname:  "Pinto",
//          age:  21,
//          email:  "MateusPinto@dayrep.com"
// };

// console.log(user1.name);  //  ->  Calvin
// console.log(user2.name);  //  ->  Mateus
 
// //addition in Object........
// console.log(user1.age);  //  ->  66
// user1.age  =  67;
// console.log(user1.age);  //  ->  67
   
// console.log(user2.phone);  //  ->  undefined
// user2.phone  =  "904-399-7557";
// console.log(user2.phone);  //  ->  904-399-7557

// //deletion in object........
// console.log(user2.phone);  //  ->  904-399-7557
// delete  user2.phone;
// console.log(user2.phone);  //  ->  undefined

//Array..................................
// let  days  =  ["Sun",  "Mon",  "Tue",  "Wed",  "Thu",  "Fri",  "Sat"];
// console.log(days[0]);  //  ->  Sun
// console.log(days[2]);  //  ->  Tue
// console.log(days[5]);  //  ->  Fri
   
// days[0]  =  "Sunday";
// console.log(days[0]);  //  ->  Sunday
   
// let  emptyArray  =  [];
// console.log(emptyArray[0]);  //  ->  undefined

//Can be added with empty index numbers
// let  animals  =  [];
// console.log(animals[0]);  //  ->  undefined
   
// animals[0]  =  "dog";
// animals[2]  =  "cat";
   
// console.log(animals[0]);  //  ->  dog
// console.log(animals[1]);  //  ->  undefined
// console.log(animals[2]);  //  ->  cat

// let  values  =  ["Test",  7,  12.3,  false];

// let  names  =  [["Olivia",  "Emma",  "Mia",  "Sofia"],  ["William",  "James",  "Daniel"]];
// console.log(names[0]);  //  ->  ["Olivia",  "Emma",  "Mia",  "Sofia"]
// console.log(names[0][1]);  //  ->  Emma
// console.log(names[1][1]);  //  ->  James
   
// let  femaleNames  =  names[0];
// console.log(femaleNames[0]);  //  ->  Olivia
// console.log(femaleNames[2]);  //  ->  Mia

//2.2.2 What can arrays be useful for in practice?........................................
// let  user1  =  {
//          name:  "Calvin",
//          surname:  "Hart",
//          age:  66,
//          email:  "CalvinMHart@teleworm.us"
// };
   
// let  user2  =  {
//          name:  "Mateus",
//          surname:  "Pinto",
//          age:  21,
//          email:  "MateusPinto@dayrep.com"
// };

// let  users  =[  
//          {
//                  name:  "Calvin",
//                  surname:  "Hart",
//                  age:  66,
//                  email:  "CalvinMHart@teleworm.us"
//          },
//          {
//                  name:  "Mateus",
//                  surname:  "Pinto",
//                  age:  21,
//                  email:  "MateusPinto@dayrep.com"
//          }
// ];
   
// console.log(users[0].name);  //  ->  Calvin
// console.log(users[1].age);  //  ->  21

// //add new user to array in objects
// users[2]  =  {
//          name:  "Irene",
//          surname:  "Purnell",
//          age:  32,
//          email:  "IreneHPurnell@rhyta.com"
   
// }
   
// console.log(users[0].name);  //  ->  Calvin
// console.log(users[1].name);  //  ->  Mateus
// console.log(users[2].name);  //  ->  Irene

// let  days  =  ["Sun",  "Mon",  "Tue",  "Wed",  "Thu",  "Fri",  "Sat"];
// console.log(typeof  days);  //  ->  object

// let  days  =  ["Sun",  "Mon",  "Tue",  "Wed",  "Thu",  "Fri",  "Sat"];
// let  day  =  "Sunday";
   
// console.log(typeof  days);  //  ->  object
// console.log(typeof  day);  //  ->  string
   
// console.log(days  instanceof  Array);  //  ->  true
// console.log(day  instanceof  Array);  //  ->  false

//Length.............
// let  names    =  ["Olivia",  "Emma",  "Mateo",  "Samuel"];
// console.log(names.length);  //  ->  4
   
// names[5]  =  "Amelia";
// console.log(names.length);  //  ->  6
   
// console.log(names);  //  ->  ["Olivia",  "Emma",  "Mateo",  "Samuel",  undefined,  "Amelia"]
// console.log(names[3]);  //  ->  Samuel
// console.log(names[4]);  //  ->  undefined
// console.log(names[5]);  //  ->  Amelia

//IndexOf..............
// let  names  =  ["Olivia",  "Emma",  "Mateo",  "Samuel"];
// console.log(names.indexOf("Mateo"));  //  ->  2
// console.log(names.indexOf("Victor"));  //  ->  -1

//Push..................
// let  names  =  ["Olivia",  "Emma",  "Mateo",  "Samuel"];
// console.log(names.length);  //  ->  4
   
// names.push("Amelia");
// console.log(names.length);  //  ->  5
// console.log(names);  //  -  >  ["Olivia",  "Emma",  "Mateo",  "Samuel",  "Amelia"]

//Unshift................
// let  names  =  ["Olivia",  "Emma",  "Mateo",  "Samuel"];
// console.log(names.indexOf("Mateo"));  //  ->  2
// console.log(names.indexOf("Victor"));  //  ->  -1

//Pop....................
// let  names=  ["Olivia",  "Emma",  "Mateo",  "Samuel"];
// console.log(names.length);  //  ->  4
   
// let  name  =  names.pop();
// console.log(names.length);  //  ->  3
// console.log(name);  //  ->  Samuel
// console.log(names);  //  ->  ["Olivia",  "Emma",  "Mateo"]

//Shift...................
// let  names  =  ["Olivia",  "Emma",  "Mateo",  "Samuel"];
// console.log(names.length);  //  ->  4
   
// let  name  =  names.shift();
// console.log(names.length);  //  ->  3
// console.log(name);  //  ->  Olivia
// console.log(names);  //  ->  ["Emma",  "Mateo",  "Samuel"]

//Reverse..................
// let  names  =  ["Olivia",  "Emma",  "Mateo",  "Samuel"];
   
// names.reverse();
// console.log(names);  //  ->  ["Samuel",  "Mateo",  "Emma","Olivia"]

//Slice.....................
// let  names  =  ["Olivia",  "Emma",  "Mateo",  "Samuel"];
   
// let  n1  =  names.slice(2);
// console.log(n1);  //  ->  ["Mateo",  "Samuel"]
   
// let  n2  =  names.slice(1,3);
// console.log(n2);  //  ->  ["Emma",  "Mateo"]
   
// let  n3  =  names.slice(0,  -1);
// console.log(n3);  //  ->  ["Olivia",  "Emma",  "Mateo"]
   
// let  n4  =  names.slice(-1);
// console.log(n4);  //  ->  ["Samuel"]
   
// console.log(names);  //  ->  ["Olivia",  "Emma",  "Mateo", "Samuel"]

//Concat....................
let  names  =  ["Olivia",  "Emma",  "Mateo",  "Samuel"];
let  otherNames  =  ["William",  "Jane"];
let  allNames  =  names.concat(  otherNames);
   
console.log(names);  //  ->  ["Olivia",  "Emma",  "Mateo", "Samuel"]
console.log(otherNames);  //  ->  ["William",  "Jane"]
console.log(allNames);  //  ->  ["Olivia",  "Emma",  "Mateo", "Samuel",  "William",  "Jane"]


//SECTOIN PRACTICE......
//OBJECTS
//QUESTION: Question 1: Create an object that describes a train ticket and store it in the ticket variable. The object must have three fields:
// starting station (key name from, give the name of the nearest station in your area as a value);
// end station (key name to, give any other station within 100km as a value);
// the price of the ticket (key name price, give the amount you would like to pay for this ticket as a value).
// The object must be created using curly brackets, in which all created fields will be listed immediately. Then display the values of all fields of the ticket on the console.

// Creating the train ticket object
let ticket = {
  from: "Toronto Union Station",    // Nearest station
  to: "Hamilton GO Centre",         // Station within 100km
  price: 15.00                      // Desired price
};

// Displaying the values of all fields
console.log("Starting Station:", ticket.from);
console.log("End Station:", ticket.to);
console.log("Ticket Price: $", ticket.price);

// Question 2: Declare an empty object and save it to a person variable. Using dot notation, add the name and surname fields to the object by entering your data as values. Try to display the individual fields on the console.
// Declare an empty object
let person = {};

// Add fields using dot notation
person.name = "John";
person.surname = "Doe";

// Display the individual fields on the console
console.log("Name:", person.name);
console.log("Surname:", person.surname);

//ARRAYS...
// Question 3: We are setting up our small library of books about JavaScript programming. We have three books and want to prepare a list of them. We will store three pieces information about each book: title, author, and number of pages:

// Speaking JavaScript, Axel Rauschmayer, 460;
// Programming JavaScript Applications, Eric Elliott, 254;
// Understanding ECMAScript 6, Nicholas C. Zakas, 352.
// Create an array of three objects representing the books. Each object must have the following properties: title, author, pages.
// Array of book objects
let books = [
  {
    title: "Speaking JavaScript",
    author: "Axel Rauschmayer",
    pages: 460
  },
  {
    title: "Programming JavaScript Applications",
    author: "Eric Elliott",
    pages: 254
  },
  {
    title: "Understanding ECMAScript 6",
    author: "Nicholas C. Zakas",
    pages: 352
  }
];

// Optionally, display the books in the console
books.forEach((book, index) => {
  console.log(`Book ${index + 1}:`);
  console.log("Title:", book.title);
  console.log("Author:", book.author);
  console.log("Pages:", book.pages);
  console.log("------------------");
});

//Question 4: Add a new book to the collection: Learning JavaScript Design Patterns, by Addy Osmani, 254 pages. Use the appropriate method to do this, which will attach the book at the end of the array. Display the length of the array and, in turn, all the book names in the collection.

// Existing array of book objects
let books = [
  {
    title: "Speaking JavaScript",
    author: "Axel Rauschmayer",
    pages: 460
  },
  {
    title: "Programming JavaScript Applications",
    author: "Eric Elliott",
    pages: 254
  },
  {
    title: "Understanding ECMAScript 6",
    author: "Nicholas C. Zakas",
    pages: 352
  }
];

// Add a new book to the end of the array using push()
books.push({
  title: "Learning JavaScript Design Patterns",
  author: "Addy Osmani",
  pages: 254
});

// Display the length of the array
console.log("Total number of books:", books.length);

// Display the titles of all books
console.log("Book Titles in Collection:");
books.forEach((book, index) => {
  console.log(`${index + 1}. ${book.title}`);
});

//Question 5: Use the slice command to copy the last two books to the new array.

// Assuming the 'books' array already contains 4 book objects

// Copy the last two books using slice
let lastTwoBooks = books.slice(-2);

// Display the new array
console.log("Last Two Books:");
lastTwoBooks.forEach((book, index) => {
  console.log(`${index + 1}. ${book.title} by ${book.author}, ${book.pages} pages`);
});

// Question 6: The first book from the collection is lost in unexplained circumstances. You have already accepted the loss, so remove it from the array. Which method will you use for this purpose? Display the length of the array and all the names of the books from the collection in turn.
// Remove the first book using shift()
books.shift();

// Display the new length of the array
console.log("Total number of books after removal:", books.length);

// Display the titles of all remaining books
console.log("Remaining Book Titles:");
books.forEach((book, index) => {
  console.log(`${index + 1}. ${book.title}`);
});

//Question 7: Display the sum of the pages of all the books from the collection.
// Calculate the total number of pages
let totalPages = books.reduce((sum, book) => sum + book.pages, 0);

// Display the result
console.log("Total number of pages in the collection:", totalPages);
