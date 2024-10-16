import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let zijde1 = parseFloat(await userInput.question("voer de lengte van de eerste zijde in. "))

let zijde2 = parseFloat(await userInput.question("voer de lengte van de eerste zijde in. "))


let oppervlakte = zijde1 * zijde2 


console.log("de oppervlakte is " + oppervlakte + ".");
