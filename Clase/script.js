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

// BUCLES

let intentos = 0

while(intentos < 6){
    console.log("HOLA")
    intentos++
}

// do-while

let SaldoDisponible = 500
let totalCompra = 600
do{
    if(totalCompra > SaldoDisponible) {
        alert ("Saldo Insuficiente");
    } else { 
        alert ("Pago realizado con exito")
    }
    totalCompra = prompt("Introduce un nuevo total:")
} while(totalCompra > SaldoDisponible)

    alert("Gracias por su compra")

    // Bucle FOR , Bucle controlado

    for(let i = 1 ; i <= 5 ; i++ ) {
        console.log(i)
    }
        // ARRAYS conjunto dee datos los corchetes [ ] determinan un array

        const MiLista = []

    
        const nombres = [ "Facu" , "Leo" , "Juan" , "Pauli" , "Pedro" ];

        const Edades = [ 30, 16 , 18 , 78 , 35];

        console.log(nombres[2])


        console.log (nombres.length)
        // push agrega dato al final del ARRAY
        nombres.push("Jazmin")
        // SHIFT resta el primer espacio
        nombres.shift()
        // POP elimina el ultimo nombre de la primera lista impresa
        nombres.pop()
        //unshift agrega al indice 0
        nombres.unshift("Juliana")
        // eliminar - agregar - actualizar
        nombres.splice(1,2)
        nombres.splice(1,0,"Lucia")


        // bucle FOR con ARRAY  
    for(let i=0; i < nombres.length  ; i++){
        console,log(`Hola ${nombres[i]}`)
        }

        console.log(nombres.length)
        console.log(nombres[2])


         // CLASE 6

         let miJugador = {
            nombre : "Messi" ,
            edad : 37 ,
            posicion : 10 ,
         }

         console.log(miJugador.edad)
         console.log(miJugador["nombre"])
         console.log(miJugador.posicion)


         confirm("Estas seguro?")
         window.alert("si o no")


