// Refer to Task 6 in your Instructions to complete this task
const prompt = require("prompt-sync")();
let arreglo = ["Valor 1", "Valor 2"];

console.log(`El arreglo tiene los siguientes valores: ${arreglo}`);

console.log(`¿Cuántos valores quieres introducir al arreglo?`);
let valorAgregado = Number(prompt());

console.log("Introduce el valor a agregar al arreglo");
for(let i = 0; i < valorAgregado; i++){

let introducirValores = arreglo.push(prompt());

}

console.log(arreglo);
