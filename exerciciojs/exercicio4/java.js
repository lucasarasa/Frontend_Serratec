document.getElementById("botao").addEventListener("click", function trocarNome() {
    if (this.innerHTML === "Clique aqui") {
      this.innerHTML = "Obrigado por clicar!";
    } else {
      this.innerHTML = "Clique aqui";
    }
  });
