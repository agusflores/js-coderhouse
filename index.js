class Personaje {
  constructor(id, name, status, species, gender, origin, location, image) {
    this.id = id;
    this.name = name;
    this.status = status;
    this.species = species;
    this.gender = gender;
    this.origin = origin;
    this.location = location;
    this.image = image;
  }
}

Personaje.prototype.toString = function () {
  return `Nombre: ${this.name}, Estado: ${this.status}, Especie: ${this.species}, Genero: ${this.gender}, Origen: ${this.origin}`;
};

const rick = new Personaje(
  1,
  "Rick",
  "Alive",
  "Human",
  "Male",
  "Earth",
  "Earth",
  "image-rick-url"
);
const morty = new Personaje(
  2,
  "Morty",
  "Alive",
  "Human",
  "Male",
  "Earth",
  "Earth",
  "image-morty-url"
);
const summer = new Personaje(
  3,
  "Summer",
  "Alive",
  "Human",
  "Female",
  "Earth",
  "Earth",
  "image-summer-url"
);
const beth = new Personaje(
  4,
  "Beth",
  "Alive",
  "Human",
  "Female",
  "Earth",
  "Earth",
  "image-beth-url"
);
const jerry = new Personaje(
  5,
  "Jerry",
  "Alive",
  "Human",
  "Male",
  "Earth",
  "Earth",
  "image-jerry-url"
);

/* Va a existir una funcionalidad para buscar un personaje a partir del nombre que se indique en el input del front */

/* Por el momento, hardcodeo la lista de personajes */

const personajes = [rick, morty, summer, beth, jerry];

/* Funcion para buscar personaje pasandole por parametro el nombre del personaje a buscar */

const buscarPersonaje = (nombrePersonaje) => {
  for (let i = 0; i < personajes.length; i++) {
    if (nombrePersonaje.toLowerCase() == personajes[i].name.toLowerCase()) {
      alert(
        `Personaje encontrado.\nInformacion del personaje:\n${personajes[i]}`
      );
      return personajes[i];
    }
  }
};

/* Guardo el nombre cargado en una variable */

let nombreABuscar = prompt(
  "Bienvenido a Rick y Morty App. Ingrese el nombre de uno de los personajes pricipales: "
);

/* Le asigno el valor a una variable  */

const personaje = buscarPersonaje(nombreABuscar);

/* En caso de que no se retorne nada quiere decir que el personaje no fue encontrado */

if (!personaje) {
  alert("No se encontro el personaje entre los personajes principales.");
}
