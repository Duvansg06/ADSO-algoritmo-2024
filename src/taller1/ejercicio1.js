let usuario = prompt("ingrese su nombre")
let horassumadas = prompt("ngrese horas")
let salario = 30000
let horasmayores = 33000

if (horassumadas > 0 && horassumadas <= 10){
    alert(`senor ${usuario}. el numero de ${horassumadas} horas, corresponde a ${salario * horassumadas}`)
}else{
    alert(`senor ${usuario}. el numero sus horas ${horassumadas} siendo mayor a 10 corresponde a: ${horassumadas * horasmayores}`)
} 