const API_URL = "https://rickandmortyapi.com/api/character";

const cardCharacter = document.querySelector(".card");
const buttons = document.querySelector(".buttons-paginado");
const buttonBackHome = document.querySelector(".button-back-home-element");

let templateHTML;
let btnNext;
let btnPrev;

const getCharacters = async (url) => {
  const response = await fetch(url);
  const data = await response.json();
  getDataCharacters(data.results);
  btnNext = data.info.next
    ? `<button class="button-paginado" data-url=${data.info.next}><i class="fa-solid fa-circle-right"></i></button>`
    : "";
  btnPrev = data.info.prev
    ? `<button class="button-paginado" data-url=${data.info.prev}><i class="fa-solid fa-circle-left"></i></button>`
    : "";
  buttons.innerHTML = btnPrev + " " + btnNext;
};

const getDataCharacters = async (data) => {
  cardCharacter.innerHTML = "";
  for (let index of data) {
    console.log(index.url);
    const response = await fetch(index.url);
    const resultCharacters = await response.json();
    templateHTML = `<div class="card-character">
      <img src=${resultCharacters.image} alt=${resultCharacters.name} />
      <h2>${resultCharacters.name}</h2>
      </div>`;
    cardCharacter.innerHTML += templateHTML;
  }
};

document.addEventListener("DOMContentLoaded", () => {
  getCharacters(API_URL);
});

buttons.addEventListener("click", (e) => {
  if (e.target.classList.contains("button-paginado")) {
    let value = e.target.dataset.url;
    console.log(value);
    getCharacters(value);
  }
});

buttonBackHome.addEventListener("click", () => {
  window.location.href = "../index.html";
});
