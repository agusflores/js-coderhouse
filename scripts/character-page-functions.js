const characterImage = document.querySelector(".character-image");
const characterInformation = document.querySelector(".character-information");
const buttonBackCharacters = document.querySelector(
  ".button-back-home-element"
);

let character;
document.addEventListener("DOMContentLoaded", async () => {
  character = JSON.parse(localStorage.getItem("personajeABuscar"));
  console.log(character);
  completeImageCharacter(character);
  completeInformationCharacter(character);
});

const completeImageCharacter = (character) => {
  characterImage.innerHTML = `
    <h2>${character.name}</h2>
    <img class="selected-character-image" src=${character.image} alt=${character.name} />
  `;
};

const completeInformationCharacter = (character) => {
  characterInformation.innerHTML = `
  <p>Status: ${character.status}</p>
  <p>Species: ${character.species}</p>
  <p>Gender: ${character.gender}</p>
  <p>Origin: Name: ${character.originName}, Type:${character.originType}, Dimension: ${character.originDimension}</p>
  <p>Last location: Name: ${character.locationName}, Type:${character.locationType}, Dimension: ${character.locationDimension}</p>
  <p>Amount of episodes: ${character.amountOfEpisodes}</p>
  `;
};

buttonBackCharacters.addEventListener("click", () => {
  window.location.href = "characters.html";
});
