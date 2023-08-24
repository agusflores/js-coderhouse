export class Personaje {
  consttructor() {}

  constructor(
    id,
    name,
    gender,
    image,
    species,
    status,
    originName,
    locationName,
    locationType,
    locationDimension,
    amountOfEpisodes
  ) {
    this.id = id;
    this.name = name;
    this.gender = gender;
    this.image = image;
    this.species = species;
    this.status = status;
    this.originName = originName;
    this.locationName = locationName;
    this.locationType = locationType;
    this.locationDimension = locationDimension;
    this.amountOfEpisodes = amountOfEpisodes;
  }
}
