let computadora = Number(prompt(" QUE PROBLEMA PRESENTA LA COMPUTADORA? 1.emite pitido al iniciar y disco duro no gira, 2. emite pitido y la unidad no gira, 3.no emite pitido y disco duro no gira, 4. no emite pitido y disco duro gira"))
switch (computadora) {
    case 1:
        alert("PONGASE EN CONTACTO CON EL TECNICO DE APOYO")
        break;
    case 2:
        alert("VERIFICAR CONTACTOS DE LA UNIDAD")
        break;
    case 3: 
        alert("TRAE LA COMPUTADORA PARA REPARARLA EN LA CENTRAL")
        break;
    case 4: 
        alert("COMPRUEBE LAS CONEXIONES ALTAVOCES")
        

    default:
        alert("Ninguna opcion es correcta, revisate tu")
        break;
}



let pitido = Number(prompt(" TU COMPUTADORA EMITE PITIDO AL INCIAR? 1. SI 2. NO"))
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