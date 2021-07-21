"use strict";

const userStringTextarea = document.getElementById("user-string-textarea");
const stringlength = document.getElementById("stringlength");

const countChars = () => {
  stringlength.innerText = userStringTextarea.value.length;
};
