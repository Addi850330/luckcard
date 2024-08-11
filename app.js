const exbtn = document.querySelector(".extrac");
const cardAnime = document.querySelector(".cardanime");
const boxAnime = document.querySelector(".animeimg");
const cimg = document.querySelector(".cimg");
const stickanime = document.querySelector(".stickanime");
const stickyimg = document.querySelector(".stickyimg");
const bgshiny = document.querySelector(".bgshiny");

const card = ["a", "b", "c", "d", "e", "f"];

const rrand = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const random = (items) => items[rrand(0, items.length - 1)];

const extractanime = function () {
  exbtn.classList.add("move");
  cimg.classList.remove("cardimgshow");
  cimg.src = `./img/card/${random(card)}.png`;
  //   console.log(cimg.src);
  cardAnime.classList.add("boxshow");
  boxAnime.classList.add("runanime");
  boxAnime.classList.remove("boxhide");
};
const boxend = function () {
  stickanime.classList.add("stickshow");
  stickyimg.classList.add("sishow");
  bgshiny.classList.add("bgshinyshow");
};

const removebox = function () {
  cardAnime.classList.remove("boxshow");
  boxAnime.classList.remove("runanime");
  boxAnime.classList.add("boxhide");
  stickanime.classList.remove("stickshow");
  stickyimg.classList.remove("sishow");
  bgshiny.classList.remove("bgshinyshow");
  cimg.classList.add("cardimgshow");
  exbtn.classList.remove("move");
};

exbtn.addEventListener("click", extractanime);
boxAnime.addEventListener("animationend", boxend);
stickanime.addEventListener("animationend", removebox);
