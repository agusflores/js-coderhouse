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
    originType,
    originDimension,
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
    this.originType = originType;
    this.originDimension = originDimension;
    this.locationName = locationName;
    this.locationType = locationType;
    this.locationDimension = locationDimension;
    this.amountOfEpisodes = amountOfEpisodes;
  }
}
