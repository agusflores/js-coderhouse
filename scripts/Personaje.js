class Personaje {
  consttructor() {}

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

export default Personaje;
