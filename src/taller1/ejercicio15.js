let usuario = prompt("INGRESA TU NOMBRE")
let puntuacionUsuario = 0
let puntuacionComputadora = 0
let U1 = Math.floor(10 * Math.random()) + 1
let U2 = Math.floor(10 * Math.random()) + 1
let comp1 = Math.floor(10 * Math.random()) + 1
let comp2 = Math.floor(10 * Math.random()) + 1

alert(`EL DEALER REPARTE UNA CARTA ABIERTA A ${usuario} Y ES ${U1} `)
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