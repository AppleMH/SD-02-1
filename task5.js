// Refer to Task 5 in your Instructions to complete this task
//Preguntarle al usuario, ¿cuántas líneas quieres generar?

const prompt = require("prompt-sync")();
const generarCaracteres = prompt(`¿Cuántos caracteres * deseas generar?: `);
let caracteres = '';

for(let i = 0; i < generarCaracteres; i++){

  caracteres = '*' + caracteres;

}

console.log(caracteres);

  
  