import {
  findCharacterInput,
  closeModal,
  modalContainer,
  parrafoModal,
  tituloModal,
  API_URL,
  getCharactersByName,
} from "./index.js";

export const buscarPersonaje = async (nombrePersonajeABuscar) => {
  const FIND_BY_NAME_URL = `${API_URL}/?name=${nombrePersonajeABuscar}`;
  let characters = [];
  await getCharactersByName(FIND_BY_NAME_URL).then((data) => {
    characters = data.results;
  });

  if (characters != undefined && characters.length > 0) {
    return characters.find(
      (personaje) =>
        personaje.name.toLowerCase() == nombrePersonajeABuscar.toLowerCase()
    );
  }
};

export const validarExistenciaPersonaje = async (value) => {
  let seEncontro;
  if (value != undefined && value != "") {
    const personajeRetornado = await buscarPersonaje(value);
    if (personajeRetornado !== undefined) {
      localStorage.setItem(
        "personajeABuscar",
        JSON.stringify(personajeRetornado)
      );
      window.location.href = "../pages/character.html";
      seEncontro = true;
    } else {
      seEncontro = false;
    }
  }
  mostrarPopUp(seEncontro);
};

const mostrarPopUp = (seEncontro) => {
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
