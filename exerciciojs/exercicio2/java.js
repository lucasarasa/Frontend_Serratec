let curtidas = 0;

function aumCurtidas() {
    curtidas++;
    atualizarCurtidas();
}

function dimCurtidas() {
    if(curtidas>0){
        curtidas--;
        atualizarCurtidas();
    }
}

function atualizarCurtidas() {
    document.getElementById("paragrafo").innerHTML = "Número de curtidas: " + curtidas;
}