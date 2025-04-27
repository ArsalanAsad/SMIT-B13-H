//OBJECTS

//Q01
let ticket = {
	from: "Berlin",
	to: "Potsdam",
	price: 11
};
console.log(`Ticket from: ${ticket.from}`);
console.log(`Ticket to: ${ticket.to}`);
console.log(`Ticket price: ${ticket.price}`);

//Q02
let person = {};
person.name = "Mary";
person.surname = "Stuart";
console.log(`${person.name} ${person.surname}`);

//ARRAY
//Q03
let books = [{
    title: "Speaking JavaScript",
    author: "Axel Rauschmayer",
    pages: 460
},
{
    title: "Programming JavaScript Applications",
    author: "Eric Elliot",
    pages: 254
},
{
    title: "Understanding ECMAScript 6",
    author: "Nicholas C. Zakas",
    pages: 352
}
];

//Q04
let newBook = {
    title: "Learning JavaScript Design Patterns",
    author: "Addy Osmani",
    pages: 254
};
books.push(newBook);
console.log(books.length);
console.log(books[0].title);
console.log(books[1].title);
console.log(books[2].title);
console.log(books[3].title);

//Q05
let selectedBooks = books.slice(-2);

//Q06
books.shift();
console.log(books.length);
console.log(books[0].title);
console.log(books[1].title);
console.log(books[2].title);

//Q07
let sum = books[0].pages + books[1].pages + books[2].pages;
console.log(`pages: ${sum}`);