let operadores = Number(prompt("1. TIGO, 2. CLARO, 3. MOVISTAR"))
let cantidadMinutos = Number(prompt("INGRESA CANTIDAD DE MINUTOS INTERNACIONALES CONSUMIDOS"))
let cargoFijoti = 45000
let cargoFijocla = 30000
let cargoFijomov = 40000
let total = 0

function servidores(operadores, cantidadMinutos){
    switch (operadores) {
        case 1:
            total = cargoFijoti + cantidadMinutos * 200 + 12000
            break;
        case 2:
            total = cargoFijocla + cantidadMinutos *100 + 18000
            break;
        case 3: 
            total = cargoFijomov + cantidadMinutos *250 + 8000
            break;
        default:
            alert("TU OPERADOR ES INVALIDO")
            break;
     }
     alert(`EL PAQUETE DE CELUMOVIL TIENE UN COSTO DE: ${total}`)
}
servidores()