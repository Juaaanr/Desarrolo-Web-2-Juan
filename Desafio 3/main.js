let nombreProducto = "canelones"

let precioUnitario = 500

let cantidadDeseada = prompt("Cuantos canelones de $500 vas a llevar:")

let costoTotal = precioUnitario * cantidadDeseada

alert("el costo total es de $" + costoTotal)


let costoTotalSinDescuento = cantidadDeseada * precioUnitario;
if (cantidadDeseada => 5) {
    let nuevoCosto = CostoTotalSinDescuento * 0.1
    let nuevoCosto2 = costoTotalSinDescuento - nuevoCosto;
}
alert("el costo total es de $" + nuevoCosto2)
    
// no lo entendi, luego ver regrabacion
//$ git commit -m "algo"
//$ git push origin main
//$ git add .