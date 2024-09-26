var numero = verificarNumero();

function verificarNumero() {
    let numero = prompt("Insira um número para verificar se é par ou ímpar")

    if(numero%2==0){
        alert("O número é par")
        return verificarNumero();
    } else {
        alert("O número é ímpar")
        return verificarNumero();
    }
}