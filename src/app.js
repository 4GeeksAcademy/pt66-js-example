/* eslint-disable */
import "bootstrap";
import "./style.css";

const books = [
  {
    title: "Snow Crash",
    author: "Neal Stephenson",
    pub: 1992,
  },
  {
    title: "Neuromancer",
    author: "William S. Gibson",
    pub: 1984,
  },
  {
    title: "Cryptonomicon",
    author: "Neal Stephenson",
    pub: 1999,
  },
  {
    title: "Why Do Cats Sulk",
    author: "Arline Bleecker",
    pub: 1998,
  },
  {
    title: "Pride And Prejudice",
    author: "Jane Austin",
    pub: 1813,
  },
];

const drawRow = (books) => {
  return `
  <div class="row">
    <div class="col col-8 offset-2">
        <ol><li>${books.join("</li><li>")}</li></ol>
    </div>
  </div>
  `;
};

const drawBook = (book) => {
  return `<div class="book">
  ${book.title} - ${book.author} - ${book.pub}
</div>`;
};

const sortBooks = (books) => {
  const target = document.querySelector("#target");

  let output = [...books];
  for (let i = 0; i < books.length; i++) {
    let book_a = books[i];

    for (let j = 0; j < books.length; j++) {
      let book_b = books[j];

      target.innerHTML =
        target.innerHTML + drawRow([drawBook(book_a), drawBook(book_b)]);
    }
  }
};

window.onload = function() {
  const target = document.querySelector("#target");
  let shelf = books.map((book) => drawBook(book));
  target.innerHTML = drawRow(shelf);
  sortBooks(books);
};
