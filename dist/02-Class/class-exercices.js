"use strict";
function getAgeSum(animals) {
    let ageTotal = 0;
    const animalsName = [];
    for (const animal of animals) {
        ageTotal += animal.age;
        animalsName.push(animal.name);
    }
    console.log(`ensemble, les animaux ${animalsName.join(', ')} ont ${ageTotal} ans`);
}
class Otter {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
const dramix = new Otter('Dramix', 4);
const chouette = {
    name: 'Edwige',
    age: 8
};
getAgeSum([dramix, chouette]);
