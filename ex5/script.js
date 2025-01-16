
function array() {
    const lista = [3, 7, 2, 9, 5];
    let Maiornum = 0;

    for (numero of lista){
        if (numero > Maiornum) {
            Maiornum = numero;
        }
    }
    alert(Maiornum)
    console.log(Maiornum)
}   
const btn = document.querySelector("button").addEventListener("click", (event) => {
    event.preventDefault();
    array();
})