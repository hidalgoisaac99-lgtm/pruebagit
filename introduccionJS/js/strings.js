/*//cadenas de texto

const producto1 = "Monitor de 20 pulgadas";//se puede usar con comillas simples o dobles
const producto2 = String("monitor de 30 pulgadas");
const producto3 = new String("Monitor de 50 pulgadas");//creacion de objeto tipo string



console.log(producto2);
console.log(producto1);
console.log(producto3);

console.log(typeof producto2);
console.log(typeof producto1);
console.log(typeof producto3); */

const producto= "mause";
const producto1 = "teclado";

console.log(producto.length);//para obtener el tamaño del string

//indexof permite encontrar un elemento en un string
console.log(producto.indexOf("ado")); //si sale -1es poruq no enconto la palabra
console.log(producto1.indexOf("ado"));

//includes retorna true o flase
console.log(producto.includes("se"));
console.log(producto.includes("teclado"));

''

