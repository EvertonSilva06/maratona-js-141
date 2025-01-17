function numAleatorio() {
    
    let numeroAleatorio = Math.floor(Math.random() * 100) + 1;

    alert('O número aleatório é: ' +numeroAleatorio);
}

const btn = document.querySelector("button").addEventListener("click", (event) => {
    event.preventDefault();
    numAleatorio();
})