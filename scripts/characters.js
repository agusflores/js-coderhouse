export const API_URL = "https://rickandmortyapi.com/api/character";

const cardCharacter = document.querySelector(".card");
const buttons = document.querySelector(".buttons-paginado");
const buttonBackHome = document.querySelector(".button-back-home-element");
const buttonFilter = document.querySelector(".filter-button");
const card = document.querySelector(".card");
const filterStatus = document.querySelector("#filter-status");
const filterGender = document.querySelector("#filter-gender");
const filterSpecies = document.querySelector("#filter-species");

let templateHTML;
let btnNext;
let btnPrev;

const getCharactersAndData = async (url) => {
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

const getCharacter = async (id) => {
  const response = await fetch(`${API_URL}/${id}`);
  const data = await response.json();
  return data;
};

const getDataCharacters = async (data) => {
  cardCharacter.innerHTML = "";
  for (let index of data) {
    const response = await fetch(index.url);
    const resultCharacters = await response.json();
    templateHTML = `<div class="card-character">
      <img id="${resultCharacters.id}" src=${resultCharacters.image} alt=${resultCharacters.name} />
      <h2 id="${resultCharacters.id}">${resultCharacters.name}</h2>
      </div>`;
    cardCharacter.innerHTML += templateHTML;
  }
};

buttonFilter.addEventListener("click", () => {
  const gender = filterGender.value;
  const status = filterStatus.value;
  const species = filterSpecies.value;

  const FILTER_URL = `${API_URL}?gender=${gender}&status=${status}&species=${species}`;
  getCharactersAndData(FILTER_URL);
});

document.addEventListener("DOMContentLoaded", () => {
  getCharactersAndData(API_URL);
});

buttons.addEventListener("click", (e) => {
  if (e.target.classList.contains("button-paginado")) {
    let value = e.target.dataset.url;
    getCharactersAndData(value);
  }
});

buttonBackHome.addEventListener("click", () => {
  window.location.href = "../index.html";
});

card.addEventListener("click", async (e) => {
  let id = e.target.id;
  if (id) {
    const personaje = await getCharacter(id);
    localStorage.setItem("personajeABuscar", JSON.stringify(personaje));
    window.location.href = "../pages/character.html";
  }
});
