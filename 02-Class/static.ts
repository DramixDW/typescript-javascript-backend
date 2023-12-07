class Constants {
    static PI = 3.14;
    static ANSWER = 42;   
}

const instanceConstante = new Constants();
// le console.log ci-dessous affiche une erreur car mes propriétés sont static
// et donc, ne sont accesibles que par la version non-instancié de la classe.
// console.log(instanceConstante.PI, instanceConstante.ANSWER);
console.log(Constants.PI);

class StringUtils {
    static capitilizeFirstLetter(anyString: string) {
        return `${anyString.charAt(0).toUpperCase()}${anyString.slice(1)}`
    }
}

console.log(StringUtils.capitilizeFirstLetter('dramix'));