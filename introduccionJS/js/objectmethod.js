"use strict";

const producto = {
    nombreProducto: "monitor de 45 pulgadas",
    precio: 200,
    disponible: true,
    categoria: "monitores",
};
//los objetos por defecto si se pueden modificar

//Object.freeze(producto);//con esto el objeto ya no puede ser modificado
//con freeze no se puede agregar ni eliminar propiedades 
//tampoco de pueden cambiar valores

console.log(Object.isFrozen(producto));

Object.seal(producto);//modifica los valores de las propiedades
producto.precio = 400;
console.log(producto.precio);

