// On ne peut pas instancier une classe abstraite.
// Elle ne sert que de base de logique
// On est obligé de l'étendre "extends" pour l'utiliser
// Comme une interface sauf qu'on peut utiliser du code
abstract class Player {
    abstract className: string;
    constructor(public health: number, 
                protected mana: number,
                private name: string,
            ) {
                console.log(this.name);
            }

    attack() {
        console.log("l'attaque de de base");
        this.mana -= 1;
    }

    // doit être défini avec un = et une =>
    abstract dance: () => void;
    // doit être défini comme une fonction normale
    abstract wave(): void;
}

    // On ne peut pas y accéder car la propriété est private et n'est accessible qu'au sein de la classe
    // const dummyPlayer = new Player(42, 42, 'Bidon');
    // console.log(dummyPlayer.name)
    // console.log(dummyPlayer.health)

class Warrior extends Player {
    className = "Guerrier";
    attack() {
        //super fait référence à la classe parent
        super.attack();
        console.log('je crie');
        // contrairement à ma propriété name qui est private, ma propriété mana
        // est protected. Et donc, accessible aussi dans toutes les classes qui "extends"
        // Player
        console.log(this.mana);
    }
    
    dance = () => {
        console.log("je danse la polka")
    }

    wave () {
        console.log("je salue comme un guerrier");
    } 
}

const garosh = new Warrior(42, 42, 'garosh');
garosh.attack();
garosh.dance();


