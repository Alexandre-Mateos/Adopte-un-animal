let form = document.querySelector("#formulaire");
let animalName = document.querySelector("#nom-animal");
let animalRace = document.querySelector("#race");
let adoptedAnimal = document.querySelector("#mon-animal");

adopterAnimal();

form.addEventListener("submit", () => {
  localStorage.setItem("nom_animal", animalName.value);
  localStorage.setItem("race_animal", animalRace.value);
});

function adopterAnimal() {
  let myAnimalName = localStorage.getItem("nom_animal");
  let myAnimalRace = localStorage.getItem("race_animal");

  let paraAnimalName = document.createElement("p");
  paraAnimalName.innerHTML = myAnimalName;
  adoptedAnimal.insertAdjacentElement("beforeend", paraAnimalName);

  let paraAnimalRace = document.createElement("p");
  paraAnimalRace.innerHTML = myAnimalRace;
  adoptedAnimal.insertAdjacentElement("beforeend", paraAnimalRace);
}
