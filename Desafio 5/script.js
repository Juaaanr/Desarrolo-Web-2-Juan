let productos = ["Choclo", "Manzana", "Sandia", "Brocoli", "Carne"];

console.log(productos);
console.log("Se vendió el último producto.");

productos.pop();

console.log("stock actualizado")
for (let i = 0; i < productos.length; i++) {
    console.log(`Producto ${i + 1}: ${productos[i]}`);
}
