const producto = {
    nombreProducto: "monitor de 45 pulgadas",
    precio: 200,
    disponible: true,
    categoria: "monitores",
};

//forma anterior
/*const precioProducto = producto.precio;
console.log(precioProducto);*/

//forma nueva-> destructuring
const {nombreProducto, precio, disponible, categoria} = producto;
//deben tener el mismo nombre
console.log(nombreProducto);