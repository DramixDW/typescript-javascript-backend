"use strict";
function returnArg(arg) {
    return arg;
}
const formationTypescript = {
    subject: 'typescript',
    chapters: ['Types', 'Class', 'Generic'],
};
const newVar = returnArg(formationTypescript);
console.log(formationTypescript.subject);
function returnArgGeneric(arg) {
    return arg;
}
const copyOfTypescriptFormation = returnArgGeneric(formationTypescript);
console.log(copyOfTypescriptFormation.subject);
function returnArgGenericMagic(arg) {
    return arg;
}
const copyOfFormationAgain = returnArgGenericMagic(formationTypescript);
const apiResponseForUser = {
    id: "4",
    type: "users",
    attributes: {
        firstName: "Marc",
        email: "marc@zuc.facebook",
        password: "monVraiMotDePasseEvidemment"
    }
};
console.log(apiResponseForUser.attributes.firstName);
function logResponse(response) {
    console.log(response);
}
logResponse({
    status: 200,
    value: 'banane'
});
class Stack {
    constructor() {
        this.values = [];
    }
    add(newObject) {
        this.values.push(newObject);
    }
    getArray() {
        return this.values;
    }
}
const wordStacks = new Stack();
wordStacks.add('words');
const lottoNumbers = new Stack();
lottoNumbers.add(42);
wordStacks.add('54');
const copyOfWordStacks = wordStacks.getArray();
