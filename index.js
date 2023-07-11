/* Va a existir una funcionalidad para buscar un personaje a partir del nombre que se indique en el input del front */

/* Por el momento, hardcodeo la lista de personajes */

const personajes = ["Rick", "Morty", "Summer", "Beth", "Jerry"];

/* Funcion para buscar personaje pasandole por parametro el nombre del personaje a buscar */

const buscarPersonaje = (nombrePersonaje) => {
  for (let i = 0; i < personajes.length; i++) {
    if (nombrePersonaje.toLowerCase() == personajes[i].toLowerCase()) {
      alert("Personaje encontrado");
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
