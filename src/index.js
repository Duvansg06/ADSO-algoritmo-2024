/*let contrasenaSistema = "1234"
let usuarioSistema = "admin"
let estado = true

afirmacion = confirm("Quieres entrar o quieres perder tu trabajo")
let contrasenaaiangresada = prompt("igrese contrasena")
let usuarioIngresado =  prompt("ingrese el usuario") 

if(estado){

if(contrasenaSistema == contrasenaaiangresada && usuarioSistema == usuarioIngresado)
    alert("Bienvenido al sistema")
else{
    alert(" acceso denegado")
} }
else{
    alert(" Inactivo")
} 
*/

 //Ejercicio 1
/* 
let usuario = prompt("ingrese su nombre")
let horassumadas = prompt("ngrese horas")
let salario = 30000
let horasmayores = 33000

if (horassumadas > 0 && horassumadas <= 10){
    alert(`senor ${usuario}. el numero de ${horassumadas} horas, corresponde a ${salario * horassumadas}`)
}else{
    alert(`senor ${usuario}. el numero sus horas ${horassumadas} siendo mayor a 10 corresponde a: ${horassumadas * horasmayores}`)
} */



/// Ejercicio 2
/*

let numero = Number(prompt("ingrese numero"))
if( numero > 0){
    alert(`El numero es positivo`)
}else{
    alert(`El numero es negativo`)
}
*/


/// Ejercicio 3


/* let lavadoraGrande = 4000
let lavadoraPequena = 3000
let cantGrande = Number(prompt("cantidad de horas de lavadoras grande"))
let cantPeque = Number(prompt("cantidad de horas de lavadoras pequenas"))
let result

if( cantGrande + cantPeque > 3){
    result = (cantGrande * lavadoraGrande + cantPeque * lavadoraPequena)*0.97 
} else{
    result = (cantGrande * lavadoraGrande + cantPeque * lavadoraPequena)
}

alert(`  ${result}`) */

// Ejercicio 4

/* let num = Number(prompt("INGRESA NUMERO"))
if (num % 2 == 0){

    alert("Tu numero ingresa es PAR")
}else{
    alert("Tu numero ingresado es IMPAR")
} */

// Ejercicio 5

/* let materia = ["fisica","quimica","biologia","matematicas","informatica"]
let nota = []
let fisica = Number(prompt("Ingrese nota de FISICA"))
nota.push(fisica)
let quimica = Number(prompt("Ingrese nota QUIMICA"))
nota.push(quimica)
let biologia = Number(prompt("Ingrese nota BIOLOGIA"))
nota.push(biologia)
let matematicas = Number(prompt("Ingrese nota MATEMATICAS"))
nota.push(matematicas)
let informatica = Number(prompt("Ingrese nota INFORMATICA"))
nota.push(informatica)

for( let i = 0; i< nota.length; i++ ){
    alert(`Tu porcentaje en la materia es: ${nota[i] * 10} % de ${materia[i]}`)
        if (nota[i] >0 && (nota[i] <= 5.99)){
            alert("TU NOTA ES MALA")

        }
        if (nota[i] >= 6 && (nota[i] <= 8)){
            alert("TU NOTA ES BUENA")}

        if (nota[i] >= 8 && (nota[i] <= 10)){
            alert("TU NOTA ES EXCELENTE")
        }

        
} */

// Ejercicio 6

/* let num1 = Number(prompt("INGRESE PRIMER NUMERO"))
let num2 = Number(prompt("INGRESE SEGUNDO NUMERO"))
let num3 = Number(prompt("INGRESE TERCER NUMERO"))
if(num1 > num2 && num1 > num3){
    alert(` ${num1} ES MAYOR`)

}
if(num2 > num1 && num2 > num3){
    alert(` ${num2} ES MAYOR`)
}

if(num3 > num1 && num3 > num2){
    alert(` ${num3} ES MAYOR`)

} */
 

// Ejercicio 7

/* let genero = prompt("INGRESE SU GENERO")
if(genero === "mujer"){
    let edad = Number(prompt("INGRESA TU EDAD"))
    if(genero === "mujer"  && edad > 50  ){
        alert("SU CUENTA ES DE 120.000 PESITOS")
    }
    if(genero === "mujer" && edad >= 30 && edad <= 50 ){
        alert("SU CUENTA ES DE 100.000 PESITOS")
    }

}
else{
    alert("TU CUENTA ES DE 40.000 PESITOS")
    
}
 */

// Ejercicio 8 

/* let mensualidad = Number(prompt("INGRESE TU PLAN DE MENSUALIDAD, 1: 15 DIAS, 2: 30 DIAS, 3: 90 DIAS"))
let cancelarMen = Number(prompt("CUANTOS DIAS QUIERES CANCELAR"))
let totalACancerlar = 0
switch (mensualidad) {
    case 1:
        totalACancerlar = cancelarMen / 15 * 18000
        break;
    case 2:
        totalACancerlar = cancelarMen / 30 * 35000
        break;
    case 3: 
            totalACancerlar = cancelarMen / 90 * 86000
        break;
    default:
        alert("OPCION INVALIDA")
        break;
    
}
alert(`TU TOTAL A PAGAR ES: ${totalACancerlar}`)
 */
// Ejercicio 9

/* let angulo1 = Number(prompt("INGRESE 1  ANGULO"))
let angulo2 = Number(prompt("INGRESE 2  ANGULO"))
let angulo3 = Number(prompt("INGRESE 3 ANGULO"))

if(angulo1 + angulo2 + angulo3 == 180)
    alert("TU TRIANGULO ES VALIDO")
else{
    alert("TU TRIANGULO ES INVALIDO")
} */

// Ejercicio 10

/* let copiaImprimir = Number(prompt("INGRESE NUMERO DE COPIAS A IMPRIMIR"))
let precioCopia = 0 
if(copiaImprimir >0 && copiaImprimir <= 499){
    precioCopia =  120
}
if(copiaImprimir >= 500 && copiaImprimir <= 749){
    precioCopia =  100
}
if(copiaImprimir >= 750 && copiaImprimir <= 999){
    precioCopia =  80
}
if(copiaImprimir >=1000){
    precioCopia =  50
}

alert(`TU PRECIO POR COPIA ES DE ${precioCopia} pesos`)
alert(`TU PRECIO TOTAL ES DE: ${copiaImprimir * precioCopia}`) */

// Ejercicio 11

/* let computadora = Number(prompt(" QUE PROBLEMA PRESENTA LA COMPUTADORA? 1.emite pitido al iniciar y disco duro no gira, 2. emite pitido y la unidad no gira, 3.no emite pitido y disco duro no gira, 4. no emite pitido y disco duro gira"))
switch (computadora) {
    case 1:
        computadora = 1
        alert("PONGASE EN CONTACTO CON EL TECNICO DE APOYO")
        break;
    case 2:
        computadora = 2
        alert("VERIFICAR CONTACTOS DE LA UNIDAD")
        break;
    case 3: 
        computadora = 3
        alert("TRAE LA COMPUTADORA PARA REPARARLA EN LA CENTRAL")
        break;
    case 4: 
        computadora = 4
        alert("COMPRUEBE LAS CONEXIONES ALTAVOCES")
        

    default:
        alert("Ninguna opcion es correcta, revisate tu")
        break;
}
 *//* let pitido = Number(prompt(" TU COMPUTADORA EMITE PITIDO AL INCIAR? 1. SI 2. NO"))
let disco = Number(prompt("EL DISCO DURO DE TU COMPUTADORA GIRA ? 1. SI 2. NO"))

if(pitido == 1){
    if(disco == 1){
        alert("ESTA AVERIADA")
    }
    else{
        alert("PONGASE EN CONTACTO CON EL TECNICO DE APOYO")
}
}else{
    if(disco == 1){
        alert("COMPRUEBE LAS CONEXIONES ALTAVOCES")
    }
    else{
        alert("VERIFICAR CONTACTOS DE LA UNIDAD")
}
}

 */
// Ejercicio 12

/* let numeroModelo = Number(prompt("INGRESE NUMERO DE MODELO DE TU AMALLUGADO"))
let defectuosos = ["119, 179, 189, 195, 221, 780"]
if (numeroModelo = defectuosos){
    alert("TU AMALLUGADO ESTA DEFECTUOSO")
}else{
    alert("SU AMALLUGADO NO ESTA DEFECTUOSO")

} */

// Ejercicio 13

/* let operadores = Number(prompt("1. TIGO, 2. CLARO, 3. MOVISTAR"))
let cantidadMinutos = Number(prompt("INGRESA CANTIDAD DE MINUTOS INTERNACIONALES CONSUMIDOS"))
let cargoFijoti = 45000
let cargoFijocla = 30000
let cargoFijomov = 40000
let total = 0

 switch (operadores) {
    case 1:
        total = cargoFijoti + cantidadMinutos * 200 + 12000
        break;
    case 2:
        total = cargoFijocla + cantidadMinutos *100 + 18000
        break;
    case 3: 
        total = cargoFijomov + cantidadMinutos *250 + 8000
        break;
    default:
        alert("TU OPERADOR ES INVALIDO")
        break;
 }
 alert(`EL PAQUETE DE CELUMOVIL TIENE UN COSTO DE: ${total}`)
 */

// Ejercicio 14

/* let sandwich = Number(prompt("QUE TAMAÑO DE SANDWICH DESEAS : 1. GRANDE, 2. PEQUEÑO "))
let adiciones1 = Number(prompt("QUIERES AGREGAR ADICIONAL DE JALAPENO? 1. SI 2. NO"))
let adiciones2 = Number(prompt("QUIERES AGREGAR ADICIONAL DE TOCINETA? 1. SI 2. NO"))
let adiciones3 = Number(prompt("QUIERES AGREGAR ADICIONAL DE PAVO? 1. SI 2. NO"))
let adiciones4 = Number(prompt("QUIERES AGREGAR ADICIONAL DE QUESO? 1. SI 2. NO"))
let pequeno = 6000
let grande = 12000
let jalapeno = 0
let tocineta = 3000
let pavo = 3000
let queso = 2500
let total = 0
let sumaPedido = 0

if(sandwich = 1 ){
    total += grande 
}
else{
    total += pequeno
}
if(adiciones1 = 1){
    total += jalapeno
}
if(adiciones2 = 1){
    total += tocineta
}
if(adiciones3 = 1){
    total += pavo
}
if(adiciones4 = 1){
    total += queso
}
alert(`EL TOTAL A CANCELAR ${total}`)
 */




// Ejercicio 15

/* let usuario = prompt("INGRESA TU NOMBRE")
let puntuacionUsuario = 0
let puntuacionComputadora = 0
let U1 = Math.floor(10 * Math.random()) + 1
let U2 = Math.floor(10 * Math.random()) + 1
let comp1 = Math.floor(10 * Math.random()) + 1
let comp2 = Math.floor(10 * Math.random()) + 1

alert(`EL DEALER REPARTE UNA CARTA ABIERTA A ${usuario} Y ES ${U1}`)
alert(`EL DEALER REPARTE UNA CARTA ABIERTA A LA COMPURADORA Y ES ${comp1}`)

alert(`EL DEALER REPARTE UNA CARTA CERRADA A ${usuario} Y ES ${U2}`)

const cartasAdicionalesUsuario = []
let opcion = "A"
while (opcion == "A"  ) {
    opcion = prompt("Selecciona A si deseas otras carta si no deseas mas  ingresa otra cosa")
    if(opcion == "A"){
        const aux = (Math.floor(10 * Math.random()) + 1)
        cartasAdicionalesUsuario.push(aux)
        alert(`El dealer te reparte una carta adicional y es ${aux}`)
    }
}

puntuacionComputadora = comp1 + comp2



let totalDeCartasAdicionales = 0

for (let i= 0; i < cartasAdicionalesUsuario.length; i++) {
    totalDeCartasAdicionales +=  cartasAdicionalesUsuario[i];
}


puntuacionUsuario  =  U1 + U2 + totalDeCartasAdicionales
alert(`EL DEALER DESTAPA LA CARTA OCULTA DE LA COMPUTADORA Y ES ${comp2}`)


if (puntuacionComputadora <= 21  &&  (( puntuacionComputadora > puntuacionUsuario  &&  puntuacionUsuario <= 21 ) || puntuacionUsuario > 21 )){
alert(`la computadora es la ganadora con las siguientes cartas ${comp1}  y ${comp2} `)
}
else{
    alert(`el jugador ${usuario} es la ganador con las siguientes cartas ${U1}, ${U2}, ${cartasAdicionalesUsuario.join(", ")}`)

}
*/
