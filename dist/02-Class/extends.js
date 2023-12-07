"use strict";
class Player {
    constructor(health, mana, name) {
        this.health = health;
        this.mana = mana;
        this.name = name;
        console.log(this.name);
    }
    attack() {
        console.log("l'attaque de de base");
        this.mana -= 1;
    }
}
class Warrior extends Player {
    constructor() {
        super(...arguments);
        this.dance = () => {
            console.log("je danse la polka");
        };
    }
    attack() {
        super.attack();
        console.log('je crie');
        console.log(this.mana);
    }
}
const garosh = new Warrior(42, 42, 'garosh');
garosh.attack();
garosh.dance();
