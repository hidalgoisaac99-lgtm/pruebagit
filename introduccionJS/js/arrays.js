//areglos o arrays

const numeros = [0, 2, 3, 4, 5];
console.log(numeros);

console.table(numeros);//lo muestra en una tabla

const meses = new Array("enero", "febrero", "marzo");//otra forma de hacer arrays
console.log(meses);

const arreglo = [
    "hola",
    true,
    20,
    {Nombre: "Isaac", Apellido: "Hidalgo"},
    [3, 6, 9],
];
console.table(arreglo);
console.log(arreglo[4]);//para acceder al valor que esta en un indice de un arreglo

//conocer el tamaño del arreglo
console.log(numeros.length);

//iterar o recorrer el arreglo
numeros.forEach(function (numero){
    console.log(numero);
});