let opcion = ""

do {
    let opcion = prompt(`ingrese una opcion \n notas - \n salir`)
    if(opcion == "notas"){
        let nota = Number(prompt(`ingrese la nta de asgnatura`))
        nota > 3? alert(`su nota ${nota}, es aprobado`): alert(`su nota de ${nota}, No es aprobado`)
    }else if(opcion == salir){
            break;
    }else{
        opcion = "salir"
        alert("opcion invalida")
    }

    }while (opcion != "salir");