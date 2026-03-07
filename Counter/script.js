"use strict";

const btnSub = document.querySelector(".btn-sub");
const btnRes = document.querySelector(".btn-res");
const btnAdd = document.querySelector(".btn-add");
const btn = document.querySelector(".btn");
let counter = document.querySelector(".counter");
let number = 0;

btnSub.addEventListener("click", function () {
  number--;
  counter.textContent = number;
  colorChange();
});

btnAdd.addEventListener("click", function () {
  number++;
  counter.textContent = number;
  colorChange();
});

btnRes.addEventListener("click", function () {
  number = 0;
  counter.textContent = number;
  colorChange();
});

function colorChange() {
  if (number < 0) {
    counter.style.color = "#932c00";
  } else if (number > 0) {
    counter.style.color = "#278200";
  } else {
    counter.style.color = "#000";
  }
}
