import personajes from "./mock-data.js";
import {
  obtenerPersonajesFiltradosPorGenero,
  validarExistenciaPersonaje,
} from "./funciones.js";

export const findCharacterInput = document.querySelector(
  "#find-character-input"
);
const findCharacterButton = document.querySelector(
  "#find-character-button"
);

findCharacterButton.addEventListener("click", () => {
  validarExistenciaPersonaje();
});

findCharacterInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    validarExistenciaPersonaje();
  }
});

const GENERO_FEMENINO = "Female";
const GENERO_MASCULINO = "Male";

const personajesFemeninos = obtenerPersonajesFiltradosPorGenero(
  personajes,
  GENERO_FEMENINO
);
const personajesMasculinos = obtenerPersonajesFiltradosPorGenero(
  personajes,
  GENERO_MASCULINO
);

console.log(`Los personajes femeninos son: ${personajesFemeninos}.`);
console.log(`Los personajes masculinos son: ${personajesMasculinos}.`);
