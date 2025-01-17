function fatorial() {
    let n1 = Number(document.getElementById("n1").value);
    let resultado = 1;

    for (let i = 1; i <= n1; i++) {
        resultado *= i; 
    }

    alert('Fatorial de ' + n1 + ' é ' + resultado);
}
const btn = document.querySelector("button").addEventListener("click", (event) => {
    event.preventDefault();
    fatorial();
})