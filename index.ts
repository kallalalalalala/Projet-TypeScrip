// Définition de l'interface Vehicle
interface Vehicle {
    make: string;      // Propriété make de type string
    model: string;     // Propriété model de type string
    year: number;      // Propriété year de type number
    start(): void;     // Méthode start qui retourne void
}

// Implémentation de l'interface Vehicle dans une classe
class Car implements Vehicle {
    make: string;
    model: string;
    year: number;

    constructor(make: string, model: string, year: number) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    start(): void {
     console.log("Car engine started");
    }
}

// Création d'une instance de Car
const myCar = new Car("Toyota", "Corolla", 2022);

//console.log("Car engine started");

myCar.start(); // Affiche "Car engine started"
