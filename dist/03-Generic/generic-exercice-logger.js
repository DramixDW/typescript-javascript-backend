"use strict";
class Logger {
}
class UserLogger extends Logger {
    log(obj, action) {
        console.log(`${obj.firstName} ${obj.lastName} a ${action}`);
    }
}
class StudentLogger extends Logger {
    log(obj, action) {
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
