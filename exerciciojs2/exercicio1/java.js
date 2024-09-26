var nota = funcaoVerificarNota()

function funcaoVerificarNota(){    
    nota = prompt("Qual a sua nota?")

    if(nota <= 60){
        alert("Você foi reprovado")
        return funcaoVerificarNota()
    } else {
        alert("Você foi aprovado!")
        return funcaoVerificarNota()
    }
}