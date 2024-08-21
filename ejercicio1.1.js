let usuario = prompt("ingrese su nombre")
let horas = Number(prompt("ingrese horas"))
let salario = 30000
let horasmayores = 33000
let total = 0

function calcularTotal(horas){
   if (horas > 0 && horas <= 10){
        total += horas * salario 

    }else{
        total += horas * horasmayores
        
    }
    
}
 alert(`Senor ${usuario} el numero de horas es ${horas} y su salario equivale a ${total}`)

calcularTotal(horas);
