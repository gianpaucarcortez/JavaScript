let contador = 0;

// while (contador < 10) {
// 	console.log("while " + contador);
// 	contador++;
// }

do {
	console.log("do while" + contador);
	contador++;
} while (contador < 10);

/**----------------------------------- */

for (let i = 0; i < 10; i++) {
	console.log("for " + i);
}

let numeros = [10, 20, 30, 40, 50, 60, 70, 80, 90];

for (let i = 0; i < numeros.length; i++) {
	console.log(numeros[i]);
}

//----------------   for in ------------------------
 /**
  * For in: recorre todos los objetos
  */

const gian = {
	nombre: "Gian",
	apellido: "Paucar",
	edad: 35,
};
for (const propiedad in gian) {
	console.log(`key:${propiedad},value:${gian[propiedad]}`);
}
// ---------------------------------------------------

// ------------------ for of -------------------------
/**
 * for of: recorre cada objeto que se iterable
 */
for (const elemento of numeros) {
   console.log(elemento);
   
}

let cadena="Hola Mundo";

for (const caracter of cadena) {
   console.log(caracter);
   
}
// ---------------------------------------------------
