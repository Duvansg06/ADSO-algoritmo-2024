
alert("BIENVENIDOS A TU EPS SURA")
let eps = (prompt("Digite tu nombre "))
let id = Number(prompt("1. CC 2. TI"))
if(id > 2){
    alert("Incorrecto, CRIS SAPO")
}if(id <= 2){

let id1 = Number(prompt("Digite su numero de documento"))
let usuario = Number(prompt("3. Medicina general, 4. Ortodoncia, 5. Pediatra, 6. una inyeccion en la kola "))
while(usuario < 6){
    alert("CRIS SAPO ELIJA LA 6")
    if()
    

/* if(id = 1 && id == 2){
    alert("Incorrecto, CRIS SAPO")
}else{ */
}   switch (usuario) {
        case 3:
        let fichaUsuario = confirm("TENEMOS CITA PARA EL DIA 3 DE AGOSTO A LAS 10 PM, DESEAS TOMARLA?")
        switch (fichaUsuario) {
            case true :
                alert("TU CITA QUEDO ASIGNADA PARA EL DIA 3 DE AGOSOTO A LAS 10 PM")
                break;
            case false:
                alert("NO HAY CITAS ASIGNADAS")
                break;
        }
    break;

        case 4:
        let fichaUsuario2 = confirm("TENEMOS CITA PARA EL DIA 19 DE AGOSTO A LAS 11 PM, DESEAS TOMARLA?")
        switch (fichaUsuario2){
            case true:
                alert("TU CITA QUEDO ASIGNADA PARA EL DIA 19 DE AGOSOTO A LAS 11 PM")
                break;
            case false:
                alert("NO HAY CITAS ASIGNADAS")
                break;
        }

    break;   

        case 5: 
        let fichaUsuario3 = confirm("TENEMOS CITA PARA EL DIA 31 DE JULIO A LAS 8 AM, DESEAS TOMARLA?")
            switch (fichaUsuario3) {
                case true :
                    alert("TU CITA QUEDO ASIGNADA PARA EL DIA 31 DE AGOSOTO A LAS 8 AM")
                    break;
                case false:
                    alert("NO HAY CITAS ASIGNADAS")
                break;
            }
    break;

        case 6:
        let fichaUsuario4 = confirm("TENEMOS CITA PARA EL DIA DE MAÑANA A LAS 12 PM, DESEAS TOMARLA?")
        switch (fichaUsuario4) {
            case true :
                alert("NOS VEMOS EN MI CASA")
                break;
            case false:
                alert("NO CASA ASIGNADA")
                break;
        }
    break;
    }
}else{
    alert("error")
}



    
    
   
