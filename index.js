"use strict";

const dropBtn = document.querySelectorAll(".dropBtn");
const answer = document.querySelectorAll(".answer");

const toggleDropdown = (i) => {
  answer[i].classList.toggle("hidden");
};

for (let i = 0; i < dropBtn.length; i++) {
  dropBtn[i].addEventListener("click", () => toggleDropdown(i));
}
