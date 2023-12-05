interface Animal {
    name: string,
    age: number,
}

function getAgeSum(animals: Animal[]) {
    let ageTotal = 0
    const animalsName: string[] = [];

    for (const animal of animals) {
      ageTotal += animal.age;
      animalsName.push(animal.name);
    } 

    console.log(`ensemble, les animaux ${animalsName.join(', ')} ont ${ageTotal} ans`);
 }

 class Otter implements Animal {
    constructor(public name: string, public age: number) {} 
 } 

 const dramix = new Otter('Dramix', 4);
  
 const chouette: Animal = {
    name: 'Edwige',
    age: 8
 }

 getAgeSum([dramix, chouette]);