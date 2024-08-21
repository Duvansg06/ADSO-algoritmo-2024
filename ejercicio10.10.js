let copiaImprimir = Number(prompt("INGRESE NUMERO DE COPIAS A IMPRIMIR"))
let precioCopia = 0 

function copiasImprimir(copiaImprimir, precioCopia){
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
    alert(`TU PRECIO TOTAL ES DE: ${copiaImprimir * precioCopia}`)
}
copiasImprimir()