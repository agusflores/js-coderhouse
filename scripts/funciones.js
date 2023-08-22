import {
  findCharacterInput,
  closeModal,
  modalContainer,
  parrafoModal,
  tituloModal,
} from "./index.js";
import personajes from "./mock-data.js";

export const buscarPersonaje = (nombrePersonaje) => {
  return personajes.find(
    (personaje) => personaje.name.toLowerCase() == nombrePersonaje.toLowerCase()
  );
};

export const validarExistenciaPersonaje = () => {
  let seEncontro;
  const nombrePersonajeABuscar = findCharacterInput.value;
  if (nombrePersonajeABuscar != undefined && nombrePersonajeABuscar != "") {
    const personajeRetornado = buscarPersonaje(nombrePersonajeABuscar);
    if (personajeRetornado !== undefined) {
      window.location.href = "../pages/character.html";
      seEncontro = true;
    } else {
      seEncontro = false;
    }
  }
  return seEncontro;
};

export const mostrarPopUp = (seEncontro) => {
  modalContainer.classList.remove("success");
  closeModal.classList.remove("success");
  modalContainer.classList.add("error");
  closeModal.classList.add("error");
  modalContainer.classList.add("show");
  let nombreBuscado = findCharacterInput.value;

  if (seEncontro === undefined) {
    findCharacterInput.value = "";
    tituloModal.textContent = `Personaje no encontrado!`;
    parrafoModal.textContent = `No ingreso ningun nombre de personaje a buscar.`;
  } else if (seEncontro === false) {
    findCharacterInput.value = "";
    tituloModal.textContent = `Personaje no encontrado!`;
    parrafoModal.textContent = `No existe el personaje con nombre '${nombreBuscado}.'`;
  } else {
    modalContainer.classList.remove("show");
    closeModal.classList.remove("error");
  }
};
