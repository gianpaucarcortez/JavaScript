const numeros = [1, 2, 3];

// sin destructuración
let uno = numeros[0],
	dos = numeros[1],
	tres = numeros[2];
console.log("sin destructuracion")
console.log(uno, dos, tres);

// Con destructuración

const [one, two, three] = numeros;
console.log("con destructuracion")
console.log(one, two, three);

const persona = {
	nombre: "Gian",
	apellido: "Paucar",
	age: 35,
};
let { nombre, age, apellido } = persona;
console.log(nombre, apellido, age);
