let sandwich = Number(prompt("QUE TAMAÑO DE SANDWICH DESEAS : 1. GRANDE, 2. PEQUEÑO "))
let adiciones1 = Number(prompt("QUIERES AGREGAR ADICIONAL DE JALAPENO? 1. SI 2. NO"))
let adiciones2 = Number(prompt("QUIERES AGREGAR ADICIONAL DE TOCINETA? 1. SI 2. NO"))
let adiciones3 = Number(prompt("QUIERES AGREGAR ADICIONAL DE PAVO? 1. SI 2. NO"))
let adiciones4 = Number(prompt("QUIERES AGREGAR ADICIONAL DE QUESO? 1. SI 2. NO"))
let pequeno = 6000
let grande = 12000
let jalapeno = 0
let tocineta = 3000
let pavo = 3000
let queso = 2500
let total = 0
let sumaPedido = 0

if(sandwich = 1 ){
    total += grande 
}
else{
    total += pequeno
}
if(adiciones1 = 1){
    total += jalapeno
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