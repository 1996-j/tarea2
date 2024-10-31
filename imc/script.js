let peso = prompt("Ingrese su peso en kilogramos:");
let altura = prompt("Ingrese su altura en metros (por ejemplo, 1.75):");

peso = parseFloat(peso);
altura = parseFloat(altura);

let imc = peso / (altura * altura);

let clasificacion;
if (imc < 18.5) {
  clasificacion = "Bajo peso";
} else if (imc >= 18.5 && imc < 24.9) {
  clasificacion = "Normal";
} else if (imc >= 25 && imc < 29.9) {
  clasificacion = "Sobrepeso";
} else {
  clasificacion = "Obesidad";
}

console.log("Tu IMC es: " + imc.toFixed(2) + ". Clasificación: " + clasificacion);
