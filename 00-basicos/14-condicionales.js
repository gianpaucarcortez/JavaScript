let edad = 15;

if (edad > 17) {
	console.log("Eres mayor de edad");
} else {
	console.log("Eres menor de edad");
}

/*if - elseif - else */
/**
 * Déjame dormir: - 0hrs- 5hrs
 * Buenos dias: 6hrs - 11hrs
 * Buenas tardes: 12hrs - 18hrs
 * Buenas noches: 19hrs - 23hrs
 */

let hora = 20;
if (hora >= 0 && hora <= 5) {
	console.log("Déjame dormir");
} else if (hora >= 6 && hora <= 11) {
	console.log("Buenos dias");
} else if (hora >= 12 && hora <= 18) {
	console.log("Buenas tardes");
} else {
	console.log("Buenas noches");
}

/*
 * Operador ternario (condicion)? verdadero:falso
 */
console.log("Operador ternario");

let eresMayor = edad > 18 ? "Eres mayor de Edad" : "Eres menor de Edad";
console.log(eresMayor);

/**
 * Switch-case
 *
 * domingo - 0
 * lunes - 1
 * martes - 2
 * miércoles - 3
 * jueves - 4
 * viernes - 5
 * sábado - 6
 */

let dia = 0;

switch (dia) {
	case 0:
		console.log("Domingo");
		break;
	case 1:
		console.log("Lunes");
		break;
	case 2:
		console.log("Martes");
		break;
	case 3:
		console.log("Miercoles");
		break;
	case 4:
		console.log("Jueves");
		break;
	case 5:
		console.log("Viernes");
		break;
	case 6:
		console.log("Sábado");
		break;
	default:
		console.log("El día no existe");
		break;
}
