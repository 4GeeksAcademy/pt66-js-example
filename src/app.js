/* eslint-disable */
import "bootstrap";
import "./style.css";

const pets = [
  {
    title: "Look at this cute cat!",
    image: null,
    text:
      "I don't even know what this dog looks like, but they deserve exactly as many pets as they want.",
    href: "https://www.humanesociety.org/",
    aText: "Support your local humane society or shelter!",
    type: "cat",
  },
  {
    title: "Look at this cute dog!",
    image: "https://placedog.net/501",
    text:
      "I don't even know what this dog looks like, but they deserve exactly as many pets as they want.",
    href: "https://www.humanesociety.org/",
    aText: "Support your local humane society or shelter!",
    type: "dog",
  },
  {
    title: "Look at this cute dog!",
    image: "https://placedog.net/502",
    text:
      "I don't even know what this dog looks like, but they deserve exactly as many pets as they want.",
    href: "https://www.humanesociety.org/",
    aText: "Support your local humane society or shelter!",
    type: "dog",
  },
  {
    title: "Look at this cute dog!",
    image: "https://placedog.net/503",
    text:
      "I don't even know what this dog looks like, but they deserve exactly as many pets as they want.",
    href: "https://www.humanesociety.org/",
    aText: "Support your local humane society or shelter!",
    type: "dog",
  },
  {
    title: "Look at this cute cat!",
    image: "https://placehold.co/500x500",
    text:
      "I don't even know what this dog looks like, but they deserve exactly as many pets as they want.",
    href: "https://www.humanesociety.org/",
    aText: "Support your local humane society or shelter!",
    type: "cat",
  },
  {
    title: "Look at this cute cat!",
    image: "https://placehold.co/500x500",
    text:
      "I don't even know what this dog looks like, but they deserve exactly as many pets as they want.",
    href: "https://www.humanesociety.org/",
    aText: "Support your local humane society or shelter!",
    type: "cat",
  },
  {
    title: "Look at this cute cat!",
    image: "https://placehold.co/500x500",
    text:
      "I don't even know what this dog looks like, but they deserve exactly as many pets as they want.",
    href: "https://www.humanesociety.org/",
    aText: "Support your local humane society or shelter!",
    type: "cat",
  },
];

const renderCard = ({ title, image, text, href, aText, type, isReversed }) => {
  const cardDiv = document.createElement("div");
  cardDiv.classList.add("card", "mb-2", "mx-auto", "text-bg-secondary");
  if (type !== "dog") {
    cardDiv.classList.remove("text-bg-secondary");
  }
  cardDiv.style.width = "18rem";

  if (image) {
    const imgElem = document.createElement("img");
    imgElem.classList.add(isReversed ? "card-img-bottom" : "card-img-top");
    imgElem.src = image;
    cardDiv.appendChild(imgElem);
  }

  const bodyElem = document.createElement("div");
  bodyElem.classList.add("card-body");

  const h5Elem = document.createElement("h5");
  h5Elem.innerHTML = title;
  h5Elem.classList.add("card-title");

  const pElem = document.createElement("p");
  pElem.innerHTML = text;
  pElem.classList.add("card-text");

  const linkElem = document.createElement("a");
  linkElem.innerHTML = aText;
  linkElem.href = href;
  linkElem.classList.add("btn", "btn-primary");

  bodyElem.appendChild(h5Elem);
  bodyElem.appendChild(pElem);
  bodyElem.appendChild(linkElem);

  cardDiv.appendChild(bodyElem);

  console.log(cardDiv);
  return cardDiv;
};

const gridLayout = () => {
  const target = document.querySelector("#target");
  target.classList.add("grid");
  const cards = target.querySelectorAll(".card");
  for (let card of cards) {
    const body = card.querySelector(".card-body");
    body.style.display = "none";
    card.style.width = "100%";
  }
};

const columnLayout = () => {
  const target = document.querySelector("#target");
  target.classList.remove("grid");
  const cards = target.querySelectorAll(".card");
  for (let card of cards) {
    const body = card.querySelector(".card-body");
    body.style.display = "block";
    card.style.width = "18rem";
  }
};

window.onload = function() {
  const target = document.querySelector("#target");
  document.querySelector("#grid").addEventListener("click", gridLayout);
  document.querySelector("#col").addEventListener("click", columnLayout);

  for (let pet of pets) {
    const petCard = renderCard(pet);
    // petCard.style.color = "#09c";
    target.appendChild(petCard);
  }
};
