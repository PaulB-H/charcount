"use strict";

const userStringTextarea = document.getElementById("user-string-textarea");
const displayStringLength = document.getElementById("display-string-length");

const countChars = () => {
  displayStringLength.innerText = userStringTextarea.value.length;
};
