let materia = ["fisica","quimica","biologia","matematicas","informatica"]
let nota = []
let fisica = Number(prompt("Ingrese nota de FISICA"))
nota.push(fisica)
let quimica = Number(prompt("Ingrese nota QUIMICA"))
nota.push(quimica)
let biologia = Number(prompt("Ingrese nota BIOLOGIA"))
nota.push(biologia)
let matematicas = Number(prompt("Ingrese nota MATEMATICAS"))
nota.push(matematicas)
let informatica = Number(prompt("Ingrese nota INFORMATICA"))
nota.push(informatica)

for( let i = 0; i< nota.length; i++ ){
    alert(`Tu porcentaje en la materia es: ${nota[i] * 10} % de ${materia[i]}`)
        if (nota[i] >0 && (nota[i] <= 5.99)){
            alert("TU NOTA ES MALA")

        }
        if (nota[i] >= 6 && (nota[i] <= 8)){
            alert("TU NOTA ES BUENA")}

        if (nota[i] >= 8 && (nota[i] <= 10)){
            alert("TU NOTA ES EXCELENTE")
        }

        
}