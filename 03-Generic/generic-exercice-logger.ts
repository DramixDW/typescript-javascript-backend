/*
Créer un classe abstraite logger qui accepte un générique. C'est classe forcera ses enfants à définir une méthode log qui reçoit un type d'objet que l'on ne connait pas encore en paramètres ainsi qu'une action. 

Ensuite créer une classe UserLogger dont la méthode log affichera le nom et le prénom de l'utilisateur ainsi que l'action qu'il effectue

Ainsi que classe StudentLogger dont la méthode Log affiche le nom, le prénom, le cours qu'il suit actuellement en plus de l'action qu'il effectue
*/

interface Utilisateur {
    firstName: string,
    lastName: string,
}

interface Student {
    firstName: string,
    lastName: string,
    currentCourse: string,
}

abstract class Logger<T extends Object> {
    abstract log(obj: T, action: string): void;
}

class UserLogger extends Logger<User> {
    log(obj: User, action: string) {
        console.log(`${obj.firstName} ${obj.lastName} a ${action}`);
    }
}

class StudentLogger extends Logger<Student> {
    log(obj: Student, action: string) {
        console.log(`${obj.firstName} ${obj.lastName}, en suivant le cours ${obj.currentCourse} a ${action}`);
    }
}

new UserLogger().log({
    firstName: 'Romain',
    lastName: 'Verliefden'    
}, 'choisi un timecode pour le son de banane');

new StudentLogger().log({
    firstName: "Etu",
    lastName: 'diant',
    currentCourse: "typescript"
}, 'a tenté de prendre un dafalgan pendant sa chute');
