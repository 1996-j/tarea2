let numeroSecreto = 7; 

let adivinanza = prompt("Adivina el número secreto (entre 1 y 10):");

if (adivinanza < numeroSecreto) {
  console.log("Demasiado bajo. Intenta con un número mayor.");
} else if (adivinanza > numeroSecreto) {
  console.log("Demasiado alto. Intenta con un número menor.");
} else {
  console.log("¡muy bien! Adivinaste el número.");
}
