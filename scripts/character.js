const characterImage = document.querySelector(".character-image");
const characterInformation = document.querySelector(".character-information");
const buttonBackCharacters = document.querySelector(
  ".button-back-home-element"
);

let character;
document.addEventListener("DOMContentLoaded", async () => {
  character = JSON.parse(localStorage.getItem("personajeABuscar"));
  completeImageCharacter(character);
  completeInformationCharacter(character);
});

const completeImageCharacter = (character) => {
  characterImage.innerHTML = `<img class="selected-character-image" src=${character.image} alt=${character.name} />`;
};

const completeInformationCharacter = (character) => {
  characterInformation.innerHTML = `
  <h2>${character.name}</h2>
  <p>Estado: ${character.status}</p>
  <p>Especie: ${character.species}</p>
  <p>Genero: ${character.gender}</p>
  <p>Origen: ${character.origin.name}</p>
  <p>Ultima ubicación: ${character.location.name}</p>
  <p>Cantidad de episodios: ${character.episode.length}</p>
  `;
};

buttonBackCharacters.addEventListener("click", () => {
  window.location.href = "characters.html";
});
