const exbtn = document.querySelector(".extrac");
const cardAnime = document.querySelector(".cardanime");
const boxAnime = document.querySelector(".animeimg");
const cimg = document.querySelector(".cimg");
const stickanime = document.querySelector(".stickanime");
const stickyimg = document.querySelector(".stickyimg");
const bgshiny = document.querySelector(".bgshiny");
const infobg = document.querySelector(".infobg");

const card = ["a", "b", "c", "d", "e", "f", "g"];

const rrand = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const random = (items) => items[rrand(0, items.length - 1)];

const extractanime = function () {
  infobg.classList.remove("infobgshow");
  infobg.classList.remove("ssrank");
  infobg.classList.remove("srank");
  infobg.classList.remove("arank");
  infobg.classList.remove("brank");
  infobg.classList.remove("crank");
  infobg.classList.remove("drank");
  infobg.classList.remove("erank");
  let cardextra = random(card);
  if (cardextra == "a") {
    infobg.classList.add("ssrank");
  }
  if (cardextra == "b") {
    infobg.classList.add("srank");
  }
  if (cardextra == "c") {
    infobg.classList.add("arank");
  }
  if (cardextra == "d") {
    infobg.classList.add("brank");
  }
  if (cardextra == "e") {
    infobg.classList.add("crank");
  }
  if (cardextra == "f") {
    infobg.classList.add("drank");
  }
  if (cardextra == "g") {
    infobg.classList.add("erank");
  }
  exbtn.classList.add("move");
  cimg.classList.remove("cardimgshow");
  cimg.src = `./img/card/${cardextra}.png`;
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
  infobg.classList.add("infobgshow");
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
