const listaDeHabilidades = ["JavaScript", "Java", "PHP", "CSS", "HTML"];

function verficarListaDeHabilidades() {
    if(listaDeHabilidades.includes("JavaScript")){
        return true;
    } else {
        return false;
    }
}

console.log(verficarListaDeHabilidades(listaDeHabilidades));