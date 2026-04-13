"use strict";

const numberEl = document.querySelector(".number");
const decreaseEl = document.querySelector(".btn-dec");
const resetEl = document.querySelector(".btn-res");
const increaseEl = document.querySelector(".btn-inc");
const inputEl = document.querySelector(".input");

const state = {
  number: 0,

  decrease() {
    this.number--;
    numberEl.textContent = this.number;
    this.colorChange();
  },

  reset() {
    this.number = 0;
    numberEl.textContent = this.number;
    this.colorChange();
  },

  increase() {
    this.number++;
    numberEl.textContent = this.number;
    this.colorChange();
  },

  colorChange() {
    if (this.number < 0) {
      numberEl.style.color = "#932c00";
    } else if (this.number > 0) {
      numberEl.style.color = "#278200";
    } else {
      numberEl.style.color = "#354853";
    }
  },

  setInput(value) {
    this.number = value;
    numberEl.textContent = value;
    this.colorChange();
    if (value === "") {
      numberEl.textContent = 0;
    }
  },
};

decreaseEl.addEventListener("click", () => {
  state.decrease();
});

resetEl.addEventListener("click", () => {
  state.reset();
});

increaseEl.addEventListener("click", () => {
  state.increase();
});

inputEl.addEventListener("input", (e) => {
  state.setInput(e.target.value);
});
