/**
 * JavaScrip es un lenguaje multiparadigma: Paradigma de la programación Funcional y Orientada a Objetos
 * El paradigma más usado es el de la POO, pero diferente.
 * Las clases en Js son compiladas por el navegador y convertidas a funciones prototipicas.
 */

//POO
/**
 * Clases - Modelo a seguir.
 * Objetos - Es una instancia de una clase(copia del modelo a seguir)
 *    Atributos -  es una característica o propiedad del objeto(son variables dentro de un objeto)
 *    Métodos - son las acciones que un objeto puede realizar(son funciones dentro de un objeto)
 */

/**
 * PROTOTIPO EN JS: Es un mecanismo por el cual un objeto puede heredar atributos y métodos
 * de un objeto padre.
 */

// --------- Objetos Literal -----------------------

const animal = {
  nombre: "Snoopy",
  sonar() {
    console.log("Hago sonidos porque estoy vivo");
  },
};

const animal2 = {
  nombre: "Lola Bunny",
  sonar() {
    console.log("Hago sonidos porque estoy vivo");
  },
};

console.log(animal);
console.log(animal2);
console.log("--------------------------------------------");

// ....... FUNCIÓN CONSTRUCTORA 1 .....

// function Animal(nombre, genero) {
//   //Atributos
//   this.nombre = nombre;
//   this.genero = genero;
//   //Métodos
//   this.sonar = function () {
//     console.log("Hago sonidos porque estoy vivo");
//   };
//   this.saludar=function(){
//     console.log(`Hola me llamo ${this.nombre}`);
//   }
// }
// const snoopy = new Animal("Snoopy", "Macho"),
//   lolaBunny = new Animal("Lola Bunny", "Hembra");

// console.log(snoopy);
// console.log(lolaBunny);

// snoopy.sonar();
// snoopy.saludar();

// lolaBunny.sonar();
// lolaBunny.saludar();

// ....... FUNCIÓN CONSTRUCTORA 2.....
/**Función constructora donde asignamos los métodos
 * al prototipo, mas no a la función como tal.
 */

// console.log('--------------------------------------------');

function Animal(nombre, genero) {
    //Atributos
    this.nombre=nombre;
    this.genero=genero;
}

//Métodos agregados al prototipo de la función constructora

Animal.prototype.sonar=function(){
    console.log('Hago sonidos porque estoy vivo');
}
Animal.prototype.saludar=function(){
    console.log(`Hola me llamo ${this.nombre}`);
}

// Herencia Prototípica
function Perro(nombre,genero,tamanio){
  this.super=Animal;
  this.super(nombre,genero);
  this.tamanio=tamanio;

}

// Perro está heredando de Animal
Perro.prototype=new Animal();
Perro.prototype.constructor=Perro;

// Sobreescritura de métodos del Prototipo padre en el hijo

Perro.prototype.sonar=function(){
  console.log("Soy un perro y mi sonido es un ladrido");
  
}

Perro.prototype.ladrar=function(){
  console.log("Guauuu Guauuu");
}
const snoopy=new Perro("Snoopy", "Macho","Mediano"),
lolaBunny = new Animal("Lola Bunny","Hembra");

console.log(snoopy);
console.log(lolaBunny);

snoopy.sonar();
snoopy.saludar();
snoopy.ladrar();

lolaBunny.sonar();
lolaBunny.saludar();
