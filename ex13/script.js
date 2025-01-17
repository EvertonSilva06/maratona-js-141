function substituir() {
    let numeros = [4, -3, 2, -1, 0];

    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] < 0) {
            numeros[i] = 0;
        }
    }

    alert(numeros);
}

const btn = document.querySelector("button").addEventListener("click", (event) => {
    event.preventDefault();
    substituir();
})