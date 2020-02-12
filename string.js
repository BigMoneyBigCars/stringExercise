"use strict";

window.addEventListener("DOMContentLoaded", init);

function init() {
  console.log("Init fucktions works");
}

document.querySelector("#select").addEventListener("click", checkOption);

const inputField = document.querySelector("#input");
const outputField = document.querySelector("#output");

let inputValue;
let dropDownValue;

function checkOption() {
  inputValue = inputField.value;

  let dropDownValue = dropdown.value;

  if (dropDownValue == 1) {
    let firstcharacter = inputValue.substring(0, 1).toUpperCase();

    let restCharacter = inputValue.substring(1, inputValue.length).toLowerCase();

    outputField.value = firstcharacter + restCharacter;
    console.log(dropDownValue);
  } else if (dropDownValue == 2) {
    let firstname = inputValue.substring(0, inputValue.indexOf(" "));

    outputField.value = firstname;

    console.log(dropDownValue);
  } else if (dropDownValue == 3) {
    let firstname = inputValue.substring(0, inputValue.indexOf(" "));
    let len = firstname.length;
    outputField.value = firstname.length;
    console.log(dropDownValue);
  } else if (dropDownValue == 4) {
    console.log(dropDownValue);
  } else if (dropDownValue == 5) {
    console.log(dropDownValue);
  } else if (dropDownValue == 6) {
    console.log(dropDownValue);
  } else if (dropDownValue == 7) {
    console.log(dropDownValue);
  } else if (dropDownValue == 8) {
    console.log(dropDownValue);
  }
}
