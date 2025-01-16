
function palavra() {
    
    const palavra = document.getElementById("palavra").value.split('');
    const invertida = palavra.reverse();

    alert(invertida.join(''))
}

const btn = document.querySelector("button").addEventListener("click", (event) => {
    event.preventDefault();
    palavra();
})