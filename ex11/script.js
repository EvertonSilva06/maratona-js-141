function contarVogais() {

    let frase = document.getElementById("palavra").value;
    let contadorVogais = 0;

    let vogais = "aeiouAEIOU";

    for (let i = 0; i < frase.length; i++) {
        if (vogais.includes(frase[i])) {
            contadorVogais++;
        }
    }

    alert('A frase contém '+ contadorVogais + ' vogais.');
}

const btn = document.querySelector("button").addEventListener("click", (event) => {
    event.preventDefault();
    contarVogais();
})