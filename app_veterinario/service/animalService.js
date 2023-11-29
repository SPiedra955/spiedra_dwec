import { animal } from "../model/animals.js";

export function getAnimals(){
    const animal1 = new animal(0, "Tot", "M", null, "DOG");
    const animal2 = new animal(1, "Ti ", "F", null, "CAT");
    const animal3 = new animal(2, "Can", "M", 1, "TURTLE");
    const animal4 = new animal(3, "Nac", "M", 45, "DOG");
    const animal5 = new animal(4, "Foc", "M", 50, "CAT");
    const animal6 = new animal(5, "Nin", "F", 4, "MONKEY");
    const animal7 = new animal(6, "Tot", "M", 2, "DOG");
    const animal8 = new animal(7, "Mon", "M", null, "FISH");

    return [animal1, animal2, animal3, animal4, animal5,
        animal6, animal7, animal8]
}

export function getAnimal(idAnimal){
    const animals = getAnimals();

    for(let i = 0; i < animals.length; i++){
        if(animals[i].id === idAnimal){
            return animals[i];
        }
    }

    animals.forEach(animal => {
        if(animals.id === idAnimal){
            return animal;
        }
    })

    return animals.find(ani => ani.id === idAnimal);

}
