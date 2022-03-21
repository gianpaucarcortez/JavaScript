// Arrow function: implementada en ES6, es más expresivo.
// Es una nueva forma de expresion expresada

const saludar = (nombre) => console.log(`Hola ${nombre}`);
saludar("Gian");

// Estructura antigua

// const sumar = function (a, b) {
// 	return a + b;
// };

// Estructura nueva
const sumar = (a, b) => a + b;
console.log(sumar(9, 9));

const functionDeVariasLineas = () => {
	console.log("Uno");
	console.log("Dos");
	console.log("Tres");
};
functionDeVariasLineas();

console.log("-------------Método antiguo-----------------");

const numeros1 = [1, 2, 3, 4, 5];

numeros1.forEach(function (el, index) {
	console.log(`${el} esta en la posición ${index}`);
});

console.log("-------------Método Nuevo - arrow functions -----------------");
const numeros2 = [1, 2, 3, 4, 5];

numeros2.forEach((el, index) => {
	console.log(`${el} esta en la posición ${index}`);
});
