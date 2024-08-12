let mensualidad = Number(prompt("INGRESE TU PLAN DE MENSUALIDAD, 1: 15 DIAS, 2: 30 DIAS, 3: 90 DIAS"))
let planes = Number(prompt("CUANTOS PLANES QUIERES CANCELAR?"))
let totalACancerlar = 0
let persona1 = Number(prompt("CUANTOS DIAS QUIERES CANCELAR DE LA PRIMERA PERSONA"))
let persona2 = Number(prompt("CUANTOS DIAS QUIERES CANCELAR DE LA SEGUNDA PERSONA"))

if(mensualidad = 1 ){
   
    totalACancerlar += persona1 
}
else{
    totalACancerlar += persona2
}
if(adiciones1 = 1){
    total += 
}
if(adiciones2 = 1){
    total += tocineta
}
if(adiciones3 = 1){
    total += pavo
}
if(adiciones4 = 1){
    total += queso
}
alert(`EL TOTAL A CANCELAR ${total}`)

    

switch (mensualidad) {
    case 1:
        totalACancerlar = cancelarMen / 15 * 18000
        break;
    case 2:
        totalACancerlar = cancelarMen / 30 * 35000
        break;
    case 3: 
            totalACancerlar = cancelarMen / 90 * 86000
        break;
    default:
        alert("OPCION INVALIDA")
        break;
    
}
alert(`TU TOTAL A PAGAR ES: ${totalACancerlar}`)