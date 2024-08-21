let pitido = Number(prompt(" TU COMPUTADORA EMITE PITIDO AL INCIAR? 1. SI 2. NO"))
let disco = Number(prompt("EL DISCO DURO DE TU COMPUTADORA GIRA ? 1. SI 2. NO"))

function repuestosPc(pitido, disco){
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
}
repuestosPc()

