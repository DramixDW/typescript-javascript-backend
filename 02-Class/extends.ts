class Player {
    constructor(private health: number, 
                protected mana: number,
                private name: string,
            ) {
                console.log(this.name);
            }
    }

    // On ne peut pas y accéder car la propriété est private et n'est accessible qu'au sein de la classe
    const dummyPlayer = new Player(42, 42, 'Bidon');
    // console.log(dummyPlayer.name)

class Warrior extends Player {
    attack() {
        console.log('je crie');
        // contrairement à ma propriété name qui est private, ma propriété mana
        // est protected. Et donc, accessible aussi dans toutes les classes qui "extends"
        // Player
        console.log(this.mana);
    }    
}

