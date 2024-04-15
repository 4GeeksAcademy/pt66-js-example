/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  // Variables

let someVar = "some value.";
const someConstant = "This value can not change after asignation!";

// Numbers

let someNumber = 10;
let someInt = 10; // Integers are whole numbers, e.g. 1,2,3,4...
let someFloat = 10.0; // Floats are floating point numbers, e.g. 0.12345

// Sometimes floats are weird: https://0.30000000000000004.com
// console.log(0.1 + 0.2);

// Strings

let someString = "This is a string.";
let someOtherString = "They can use either type of quotes.";
let someStrLiteral = `These strings are fancy!
They can break returns in them, and you can have both
types of normal quotes in them ("",'')
They also support interpolation: ${Math.PI * 2}`;

// Interpolation:
// console.log(someStrLiteral);

// Concatenation:
// console.log("Hello" + " world!");

// Booleans

let someBool = true;
let someOtherBool = false;

// Most of the time, you'll make bools with expressions:
// console.log((0.1 + 0.2) !== 0.3);

// A nearly comprehensive list of falsy values:
// console.log("null:", !!null);
// console.log("undefined:", !!undefined);
// console.log("false:", !!false);
// console.log("NaN:", !!NaN);
// console.log("0:", !!0);
// console.log("-0:", !!-0);
// console.log("0n:", !!0n);
// console.log('"":', !!null);
// https://developer.mozilla.org/en-US/docs/Glossary/Falsy

// Nullish values:
let someNull = null;
let someUndefined;

// console.log(someNull);
// console.log(someUndefined);

// Arrays:
let someArr = [2, 3, 5, 7, 13, 17, 23];

// Accessing individual values in an array:
// console.log(someArr[0]);
// console.log(someArr[1]);

// Objects:

let someObj = {
  key: "value",
  attribute: "some other value",
  property: "some random value",
};

let someBook = {
  title: "Guards! Guards!",
  author: "Terry Pratchett",
  isbn_13: "978-0-06-222-575-7",
  published: 1989,
};

let someChessMove = {
  turn: 0,
  move: "e7-e6",
};

// Arrays of objects:

let bookshelf = [
  {
    title: "Guards! Guards!",
    author: "Terry Pratchett",
    isbn_13: "978-006222575-7",
    published: 1989,
  },
  {
    title: "Snow Crash",
    author: "Neal Stephenson",
    isbn_13: "978-061336162-0",
    published: 1992,
  },
];

// Iteration!

for (let book of bookshelf) {
  console.log(`${book.title} -- ${book.author}, published: ${book.published}`);
}

};
