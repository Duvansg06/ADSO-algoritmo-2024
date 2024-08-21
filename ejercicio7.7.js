let genero = prompt("INGRESE SU GENERO")
let edad = Number(prompt("INGRESA TU EDAD"))

function dineroGenero(edad,genero){
    if(genero === "mujer"){
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
}
dineroGenero(edad,genero)