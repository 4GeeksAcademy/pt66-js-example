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
  let isNotStable = true;

  // We do everything in this loop while
  // the array is not stable, i.e. a swap happened.
  while (isNotStable) {
    // We assume that no swaps will happen
    isNotStable = false;

    // Then we iterate over the array
    for (let i = 1; i < output.length; i++) {
      // The lefthand element is the one
      // earlier in the array, and the
      // righthand element is the one
      // that is later in ther array.
      let left = output[i - 1];
      let right = output[i];

      // If the left element is larger/later in
      // the alphabet than the right element,
      // we need to change their positions.
      if (left.author > right.author) {
        // A swap is happening, so we say that
        // the array isn't stable, i.e. it has
        // changed on this loop.
        isNotStable = true;

        // And now we actually swap the items.
        output[i] = left;
        output[i - 1] = right;
      }

      // And now we show the changes in the array.
      let shelf = output.map((book) => drawBook(book));
      target.innerHTML = target.innerHTML + drawRow(shelf);
    }
  }
  return output;
};

window.onload = function() {
  const target = document.querySelector("#target");
  let shelf = books.map((book) => drawBook(book));
  target.innerHTML = drawRow(shelf);
  console.table(books);
  sortBooks(books);
};
