import { findCharacterInput } from "./index.js";
import personajes from "./mock-data.js";

export const obtenerPersonajesFiltradosPorGenero = (
  personajes,
  generoAObtener
) => {
  return personajes
    .filter(
      (personaje) =>
        personaje.gender.toLowerCase() == generoAObtener.toLowerCase()
    )
    .map((p) => p.name);
};

export const buscarPersonaje = (nombrePersonaje) => {
  return personajes.find(
    (personaje) => personaje.name.toLowerCase() == nombrePersonaje.toLowerCase()
  );
};

export const validarExistenciaPersonaje = () => {
  const nombrePersonajeABuscar = findCharacterInput.value;
  if (nombrePersonajeABuscar != undefined && nombrePersonajeABuscar != "") {
    const personajeRetornado = buscarPersonaje(nombrePersonajeABuscar);
    personajeRetornado === undefined
      ? alert("No se encontro el personaje entre los personajes principales.")
      : alert(
          `El personaje existe y aqui esta su informacion principal.\n ${personajeRetornado}`
        );
  }
};
