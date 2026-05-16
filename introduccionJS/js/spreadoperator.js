const producto = {
    nombreProducto: "monitor de 45 pulgadas",
    precio: 200,
    disponible: true,
    categoria: "monitores",
};

const medidas = {
    peso: "1kg",
    medida: "1m",
};

const nuevoProducto = {...producto, ...medidas};//pra unir o  concatenar objetos

console.log(nuevoProducto);

