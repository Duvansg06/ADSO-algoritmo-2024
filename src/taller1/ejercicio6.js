let num1 = Number(prompt("INGRESE PRIMER NUMERO"))
let num2 = Number(prompt("INGRESE SEGUNDO NUMERO"))
let num3 = Number(prompt("INGRESE TERCER NUMERO"))
if(num1 > num2 && num1 > num3){
    alert(` ${num1} ES MAYOR`)

}
if(num2 > num1 && num2 > num3){
    alert(` ${num2} ES MAYOR`)
}

if(num3 > num1 && num3 > num2){
    alert(` ${num3} ES MAYOR`)

}