import { validarExistenciaPersonaje } from "./funciones.js";

export const API_URL = "https://rickandmortyapi.com/api/character";

const findCharacterButton = document.querySelector("#find-character-button");
const optionsCharacters = document.querySelector("#options-characters");
const buttonCharacters = document.querySelector("#button-characters");

export const modalContainer = document.querySelector(".modal-container");
export const closeModal = document.querySelector("#boton-cierre-modal");
export const parrafoModal = document.querySelector("#parrafo-modal");
export const tituloModal = document.querySelector("#titulo-modal");
export const findCharacterInput = document.querySelector(
  "#find-character-input"
);

closeModal.addEventListener("click", () => {
  modalContainer.classList.remove("show");
});

findCharacterButton.addEventListener("click", () => {
  let value = findCharacterInput.value;
  validarExistenciaPersonaje(value);
});

findCharacterInput.addEventListener("keydown", (event) => {
  let value = findCharacterInput.value;
  if (event.key === "Enter") {
    validarExistenciaPersonaje(value);
  }
});

let characters = [];

export const getCharactersByName = async (url) => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

const createOptions = async (characters) => {
  if (characters != null && characters.length > 0) {
    characters.forEach((c) => {
      let option = document.createElement("option");
      option.value = c.name;
      optionsCharacters.appendChild(option);
    });
  }
};

const clearOptions = () => {
  while (optionsCharacters.firstChild) {
    optionsCharacters.removeChild(optionsCharacters.firstChild);
  }
};

findCharacterInput.addEventListener("input", async (e) => {
  const FIND_BY_NAME_URL = `${API_URL}/?name=${e.target.value}`;
  getCharactersByName(FIND_BY_NAME_URL).then((data) => {
    characters = data.results;
    clearOptions();
    createOptions(characters);
  });
});

buttonCharacters.addEventListener("click", () => {
  window.location.href = "../pages/characters.html";
});
