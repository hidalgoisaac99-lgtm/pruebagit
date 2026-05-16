//objetos

//sintaxis de un objeto
/*const producto = {
    nombreProducto: "monitor de 45 pulgadas",
    precio: 200,
    disponible: true,
    categoria: "monitores",
};*/

//console.log(producto);

//console.log(producto.precio);//acceder a propiedad de objeto

const producto = {
    nombreProducto: "monitor de 45 pulgadas",
    precio: 200,
    disponible: true,
    categoria: "monitores",
};
producto.imagen = "imagen.jpg";//añade una propiedad a un ebjeto
delete producto.disponible;//elimino propiedad de un objeto

console.log(producto);
