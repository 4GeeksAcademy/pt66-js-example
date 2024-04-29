/* eslint-disable */
import "bootstrap";
import "./style.css";

const dogs = [
  {
    title: "Look at this cute dog!",
    image: "https://placedog.net/501",
    text:
      "I don't even know what this dog looks like, but they deserve exactly as many pets as they want.",
    href: "https://www.humanesociety.org/",
    aText: "Support your local humane society or shelter!",
  },
  {
    title: "Look at this cute dog!",
    image: "https://placedog.net/502",
    text:
      "I don't even know what this dog looks like, but they deserve exactly as many pets as they want.",
    href: "https://www.humanesociety.org/",
    aText: "Support your local humane society or shelter!",
  },
  {
    title: "Look at this cute dog!",
    image: "https://placedog.net/503",
    text:
      "I don't even know what this dog looks like, but they deserve exactly as many pets as they want.",
    href: "https://www.humanesociety.org/",
    aText: "Support your local humane society or shelter!",
  },
];

const renderCard = ({ title, image, text, href, aText }) => {
  return `
  <div class="card mb-2" style="width: 18rem;">
    <img src="${image}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${title}</h5>
      <p class="card-text">${text}</p>
      <a href="${href}" class="btn btn-primary">${aText}</a>
    </div>
  </div>`;
};

/**
 * Function to calculate the discount on a product.
 * @param {object} item
 * @param {number} quantity
 */
function calculateDiscount(item, quantity) {
  if (quantity >= 10 && item.category === "clothing") {
    return item.price * 0.9;
  } else if (item.category === "clothing") {
    return item.price * 0.95;
  }

  if (quantity >= 5 && item.category === "electronics") {
    return item.price * 0.8;
  } else if (item.category === "electronics") {
    return item.price * 0.9;
  }

  return item.price;
}

function calculateDiscount2(item, quantity) {
  let discount = 1.0;
  if (item.category === "clothing") {
    discount = quantity >= 10 ? 0.9 : 0.95;
  } else if (item.category === "electronics") {
    discount = quantity >= 5 ? 0.8 : 0.9;
  }

  return item.price * discount;
}

// Programmers only have one joke:
// There are only two hard problems in CS:
// The halting problem, naming things, and off by 1 errors.

window.onload = function() {
  const target = document.querySelector("#target");
  target.innerHTML = dogs.map((dog) => renderCard(dog)).join("");

  // Try/catch will hide errors on you!
  // try {
  //   console.log(1n / 0n);
  // } catch (e) {
  //   console.error("Welp.");
  //   console.error(e);
  // }

  // Errors will tell you a lot of what you need to fix them!
  // console.log(1n / 0n);
};
