// funciones

function saludar() {
    console.log("Hola como estan?")
}

function saludar(nombre) {
    console.log(`Hola ${nombre}, como estan?`)
}

saludar("Juan")
saludar("erik")

saludar(prompt("ingrese su nombre:"))



function sumar(x,y) {
    let suma = x + y;
    console.log (`${x} + ${y}  = ${suma}`)

}

suma(5,8);

function restar (x,y) {
    let resta = x - y;
    console.log (`${x} - ${y}  = ${resta}`)
}

restar(5,8);

// funciones arrow

let multiplicar = (x,y) => {

    let multiplicar = x * y;
    console.log(`${x} * ${y} = ${multiplicar}`)
    alert(`${x} * ${y} = ${multiplicar}`)
}

 multiplicar (5,8)

 // return

 function sumar(x,y) {
 return x + y
 
}
let UsN1 = prompt(" pone el primer numero que queres sumar:")
let UsN2 = prompt(" pone el segundo numero que queres sumar:")

let total = sumar (parseInt (UsN1), parseInt (UsN2));
    console.log(`${UsN1} + ${UsN2}  = ${total}`);


 // VER CLASE 3, TEMAS SWET ALERT,IF ELSE, no lo entendi
 // luego de ver esa parte ver el final de la CLASE 4 donde le agrega el return al swet alert

