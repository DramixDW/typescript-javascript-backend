function returnArg(arg: unknown) {
    return arg;
}

interface Formation {
    subject: string,
    chapters: string[]
}

const formationTypescript: Formation = {
    subject: 'typescript',
    chapters: ['Types', 'Class', 'Generic'],
}

const newVar = returnArg(formationTypescript);

// J'ai le droit de faire un console.log de la propriété subject
// Je peux parce que cette propriété subject est renseigné dans mon
// interface Formation.
console.log(formationTypescript.subject);

// On ne peut plus accéder à cette propriété subject car typescript
// pense que newVar est de type inconnu car ma fonctionne ne fait
// que renvoyer son argument qui est de type inconnu
// console.log(newVar.subject)

function returnArgGeneric<T>(arg: unknown) {
    return arg as T
}
const copyOfTypescriptFormation = returnArgGeneric<Formation>(formationTypescript);
console.log(copyOfTypescriptFormation.subject);

function returnArgGenericMagic<T>(arg: T) {
    return arg;
}
// il sait que mon generic T sera égale à Formation dans ce cas-ci parce que 
// j'ai précisé dans ma fonction returnArgGenericMagic que l'argument serait typé
// comme mon généric. Ainsi mon argument est bien renvoyé en tant que formation.
// sans que j'ai eu besoin de connaitre le type de mon argument à l'avance.
const copyOfFormationAgain = returnArgGenericMagic(formationTypescript);

interface JsonApiResponse<TypeGeneric extends Object> {
    id: string,
    type: string,
    attributes: TypeGeneric
}

interface UserResponse {
    firstName: string,
    email: string,
    password: string,
}

const apiResponseForUser: JsonApiResponse<UserResponse> = {
    id: "4",
    type: "users",
    attributes: {
        firstName: "Marc",
        email: "marc@zuc.facebook",
        password: "monVraiMotDePasseEvidemment"
    }
}
console.log(apiResponseForUser.attributes.firstName);

interface BaseResponse {
  status: number;
  value: unknown;  
}

function logResponse<T extends BaseResponse>(response: T) {
    console.log(response);
}

// Je ne peux pas utiliser boolean comme type générique car il ne
// respecte pas la contrainte d'être au moins une BaseResponse 
// et donc, d'avoir au minimum une propriété status et une propriété value
// logResponse<boolean>(true);

interface BananaResponse extends BaseResponse {
    value: "banane";
}

logResponse<BananaResponse>({
    status: 200,
    value: 'banane'
})

class Stack<T> {
    values: T[] = [];

    add(newObject: T) {
        this.values.push(newObject);
    }

    getArray(): T[] {
        return this.values;
    }
}

const wordStacks = new Stack<string>();
// typescript affiche une erreur car j'ai défini mon stack
// comme étant un stack qui ne contient que de strings et donc, je ne peux envoyer
// que des string dans ma fonction add
// wordStacks.add(true)
wordStacks.add('words');
const lottoNumbers = new Stack<number>();
lottoNumbers.add(42);
wordStacks.add('54');

const copyOfWordStacks = wordStacks.getArray();

