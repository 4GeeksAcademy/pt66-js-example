/* eslint-disable */
import "bootstrap";
import "./style.css";

const parseFaves = () => {
  const input = document.querySelector("#input");
  const target = document.querySelector("#faves");

  const favoriteInputs = input.value.split("\n");
  let favHtml = [];

  for (let fave of favoriteInputs) {
    let elem = document.createElement("li");
    elem.innerHTML = fave;
    elem.style.color = "#09c";
    favHtml.push(elem);
  }
  target.replaceChildren(...favHtml);
};

const clearFaves = () => {
  const target = document.querySelector("#faves");
  target.innerHTML = "<p>You don't have any favorites!</p>";
};

window.onload = function() {
  // // document.querySelector lets you store elements
  // // from your page as variables in JS.
  // const target = document.querySelector("#target");
  // target.innerHTML = `<p>This page has been changed from JS.</p>`;
  //
  // // document.querySelectorAll lets you select multiple
  // // elements from your page and iterate over them.
  // const listItems = document.querySelectorAll("li.favorite_things");
  // for (let i = 0; i < listItems.length; i++) {
  //   listItems[i].innerHTML = favorite_things[i];
  // }

  const button = document.querySelector("#button");
  button.onclick = parseFaves;
  const clearBtn = document.querySelector("#clearbtn");
  clearBtn.onclick = clearFaves;
};
