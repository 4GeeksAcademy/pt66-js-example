/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  // Variables

  let someVar = "some value.";
  const someConstant = "This value can not change after it has been assigned!";

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
    console.log(
      `${book.title} -- ${book.author}, published: ${book.published}`
    );
  }

  `
From monday:
- Variables: where you store data.
  - let: makes a mutable variable.
  - const: makes in immutable variable.
- Datatypes:
  - Numbers (ints, floats)
  - Strings
  - Booleans (true, false)
  - Nullish values (null, undefined)
  - Arrays (collections of things)
  - Objects (key/value pairs, representing *things*)

Today:
- Control flow
  - If/else if/else
  - Looping
  - Functions
  - Try/catch
`;

  // // Operators:
  // console.log("Equality:", 1 == "1");
  // console.log("Strict equality:", 1 === "1"); // Use this most of the time!
  // console.log("Inequality:", 1 != "1");
  // console.log("Strict inequality:", 1 !== "1");
  // console.log("Less than:", 1 < 5);
  // console.log("Less than or equal:", 5 <= 5);
  // console.log("Greater than:", 1 > 5);
  // console.log("Greater than or equal:", 5 >= 5);

  // console.log("Plus:", 1 + 2);
  // console.log("Minus:", 1 - 2);
  // console.log("Mul:", 1 * 2);
  // console.log("Div:", 1 / 2);

  // // Logical operations:
  // console.log("Not:", !true);
  // console.log("And:", true && !false);
  // console.log("Or:", false || true);

  // // If statements:
  let tempF = -40;

  // if (tempF === -40) {
  //   console.log("It's -40 in both C and F.");
  // } else if (tempF <= 0) {
  //   console.log("Yeah, it's getting cold.");
  // } else if (tempF <= 32) {
  //   console.log("Water freezes now, and it's 0C.");
  // } else {
  //   console.log("It's kinda warm.");
  // }

  // console.log("Now this code executes!");

  // // Switch statements:
  // switch (tempF) {
  //   case -40:
  //     console.log("It is -40 in both C and F");
  //   case 32:
  //     console.log("Water is solid now, which is kinda a bummer.");
  //     break;
  //   case 65:
  //     console.log("It's a nice temperature.");
  //     break;
  //   default:
  //     console.log("This is the default case.");
  //     break;
  // }

  // Looping:
  let fib = [1, 1, 2, 3, 5, 8, 13];

  // for (let val of fib) {
  //   console.log(val);
  // }

  let someBook = {
    title: "Guards! Guards!",
    author: "Terry Pratchett",
    isbn_13: "978-0-06-222-575-7",
    published: 1989,
  };

  // for (let key in someBook) {
  //   console.log(key, someBook[key]);
  // }

  let sum = 0;

  // for (let i = 0; i < 100; i++) {
  //   sum += i;
  // }

  // console.log(sum);

  // sum = 1;

  // while (sum > 1024) {
  //   sum += sum;
  // }

  // console.log(sum);

  // Functions:

  // const someFunc = (a, b) => {
  //   console.log(a, b);
  //   return a + b;
  // };

  // sum = someFunc(5, 10);
  // console.log(sum);

  // function fibonacci(n) {
  //   if (n <= 1) {
  //     return 1;
  //   }

  //   let numbers = [1n, 1n];
  //   for (let i = n; i > 1; i--) {
  //     numbers.unshift(numbers[0] + numbers[1]);
  //   }
  //   return numbers[0];
  // }

  // for (let i = 0; i < 100; i++) {
  //   console.log(i, fibonacci(i));
  // }

  // Try/catch:

  /**
   * Try/catch blocks hide useful info about errors from you!
   */

  try {
    1n / 0n;
  } catch {
    console.log("oops!");
  }
};
