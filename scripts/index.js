import personajes from "./mock-data.js";
import {
  obtenerPersonajesFiltradosPorGenero,
  validarExistenciaPersonaje,
  mostrarPopUp,
} from "./funciones.js";

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
  let seEncontroPersonaje = validarExistenciaPersonaje();
  mostrarPopUp(seEncontroPersonaje);
});

findCharacterInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    let seEncontroPersonaje = validarExistenciaPersonaje();
    mostrarPopUp(seEncontroPersonaje);
  }
});

document.addEventListener("DOMContentLoaded", () => {
  personajes.forEach((p) => {
    let option = document.createElement("option");
    option.value = p.name;
    optionsCharacters.appendChild(option);
  });
});

buttonCharacters.addEventListener("click", () => {
  window.location.href = "../pages/characters.html";
});
