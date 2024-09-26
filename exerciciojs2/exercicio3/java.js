const idade = verificarIdade();

function verificarIdade() {
    idade = prompt("Qual a sua idade?")

    if(idade >= 18 ) {
        alert("Você PODE entrar na festa!")
        return verificarIdade();
    } else {
        alert ("Você NÃO pode entrar na festa!")
        return verificarIdade();
    }
}