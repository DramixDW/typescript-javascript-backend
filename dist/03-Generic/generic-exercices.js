"use strict";
const user = {
    firstName: 'Romain',
    lastName: 'Verliefden'
};
const user2 = {
    firstName: 'Banano',
    lastName: 'Mango'
};
function extractValueOfKey(objArr, key) {
    return objArr.map(obj => obj[key]);
}
console.log(extractValueOfKey([user, user2], "firstName"));
