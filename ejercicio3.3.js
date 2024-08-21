let lavadoraGrande = 4000
let lavadoraPequena = 3000
let cantGrande = Number(prompt("cantidad de  de lavadoras grande"))
let cantPeque = Number(prompt("cantidad de  de lavadoras pequenas"))


function cantidadLavadoras(cantGrande, cantPeque){
    let total 

    if( cantGrande + cantPeque > 3){
        total = (cantGrande * lavadoraGrande + cantPeque * lavadoraPequena)*0.97 
    } else{
        total = (cantGrande * lavadoraGrande + cantPeque * lavadoraPequena)
    }

    return total
}



alert(cantidadLavadoras(cantGrande,cantPeque ))















/* { */
    /* if (cantGrande + cantPeque > 3){
        total = (cantGrande * lavadoraGrande * cantPeque * lavadoraPequena * 0.97)
        
    }else{
        total = cantGrande * lavadoraGrande * cantPeque * lavadoraPequena

    }
}
alert(`Tu valor de compra es de ${total} `)
cantidadLavadoras(total) */