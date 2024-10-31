let hora = prompt("¿Qué hora es? (en formato 24 horas)");

hora = parseInt(hora);

let saludo;
if (hora < 12) {
  saludo = "¡Buenos días!";
} else if (hora < 18) {
  saludo = "¡Buenas tardes!";
} else {
  saludo = "¡Buenas noches!";
}

console.log(saludo);
