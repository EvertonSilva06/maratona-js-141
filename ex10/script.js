function palindromo() {

    let palavra = document.getElementById("palavra").value;
    if (palavra === palavra.split('').reverse().join('')) {
        alert(palavra + " é um palíndromo.");
    } else {
        alert(palavra + " não é um palíndromo.");
    }
}

const btn = document.querySelector("button").addEventListener("click", (event) => {
    event.preventDefault();
    palindromo();
})