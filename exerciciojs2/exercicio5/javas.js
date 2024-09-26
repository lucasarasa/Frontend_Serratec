let nomes = [];

function adicionarNome(event) {
    // Previne o envio do formulário
    event.preventDefault();

    // Obtém o valor do input
    const nomeInput = document.getElementById('nome').value;

    if(nomeInput) {
        nomes.push(nomeInput);

        document.getElementById('lista').innerHTML = 'Sua lista de produtos: <br>' + nomes.join('; ');

        //limpar campo
        document.getElementById('nome').value = '';
    } else {
        alert("O produto não pode ser nulo!");
    }
}