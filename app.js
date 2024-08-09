const exbtn = document.querySelector(".extrac");
const cardAnime = document.querySelector(".cardanime");
const boxAnime = document.querySelector(".animeimg");
const cimg = document.querySelector(".cimg");

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
};

const removebox = function () {
  cardAnime.classList.remove("boxshow");
  boxAnime.classList.remove("runanime");
  cimg.classList.add("cardimgshow");
  exbtn.classList.remove("move");
};

exbtn.addEventListener("click", extractanime);
boxAnime.addEventListener("animationend", removebox);
