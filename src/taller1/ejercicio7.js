let genero = prompt("INGRESE SU GENERO")
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