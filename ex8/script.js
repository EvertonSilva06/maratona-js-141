function soma(){
    let array = [1, 2, 3, 4, 5];
    let sum = 0;
    for (numero of array) {
        sum = sum + numero;
    }
    alert(sum)
}   
const btn = document.querySelector("button").addEventListener("click", (event) => {
    event.preventDefault();
    soma();
})