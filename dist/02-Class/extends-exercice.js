"use strict";
class AquaticAnimal {
}
class EarthAnimal {
}
function faireCrier(animals) {
    for (const animal of animals) {
        animal.shout();
    }
}
function faireNager(aquaticAnimals) {
    for (const aquaticAnimal of aquaticAnimals) {
        aquaticAnimal.swim();
    }
}
class Shark extends AquaticAnimal {
    constructor() {
        super(...arguments);
        this.pawCount = 0;
    }
    shout() {
        console.log("Lance la musique des dents de la mer");
    }
    swim() {
        console.log("Je nage et je suis un requin");
    }
}
class Snake extends EarthAnimal {
    constructor() {
        super(...arguments);
        this.pawCount = 0;
    }
    shout() {
        console.log("Je crie pas parce que j'entend pas");
    }
}
faireCrier([new Shark(), new Snake()]);
faireNager([new Shark()]);
