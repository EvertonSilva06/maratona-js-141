function proibido() {
 
    const palavrasProibidas = ['palavra1', 'palavra2', 'exemplo']; 

    const frase = document.getElementById('frase').value.toLowerCase();

    const palavrasFrase = frase.split(' ');

    for (let palavra of palavrasFrase) {
        if (palavrasProibidas.includes(palavra)) {
            alert("A frase contém uma palavra proibida!");
            return; 
        }
    }

    alert("A frase está limpa!");
}

const btn = document.querySelector("button").addEventListener("click", (event) => {
    event.preventDefault();
    proibido();
})