let lavadoraGrande = 4000
let lavadoraPequena = 3000
let cantGrande = Number(prompt("cantidad de horas de lavadoras grande"))
let cantPeque = Number(prompt("cantidad de horas de lavadoras pequenas"))
let result

if( cantGrande + cantPeque > 3){
    result = (cantGrande * lavadoraGrande + cantPeque * lavadoraPequena)*0.97 
} else{
    result = (cantGrande * lavadoraGrande + cantPeque * lavadoraPequena)
}

alert(`  ${result}`)