/*
Créer une fonction extractValueOfKey. Elle recevra 2 arguments, le premier sera un tableau d'objet (peu importe lequel) et le deuxième sera une clé de l'objet passé en premier argument.

Pour que la fonction soit valide, typescript devra afficher une erreur si la clé qu'on passe en deuxième argument ne fait pas partie de l'objet 

Le but de cette fonction est de remplacer chaque élément du tableau par la valeur de la clé que l'on passe en deuxième argument
*/

interface User {
    firstName: string,
    lastName: string,
}

const user: User = {
    firstName: 'Romain',
    lastName: 'Verliefden'
}

const user2: User = {
    firstName: 'Banano',
    lastName: 'Mango'
}

function extractValueOfKey<T extends Object>(objArr: T[], key: keyof T) {
    return objArr.map(obj => obj[key]);
}

// extractValueOfKey([user, user2], 'banane');

console.log(extractValueOfKey<User>([user, user2], "firstName"))