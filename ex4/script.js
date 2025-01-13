
function resul(){
    n1 = Number(document.getElementById("n1").value);
    const divNumeros = document.querySelector("div");
    
    let i = 1;
    while (i <= 10) {

        const paragrafo = document.createElement("p");
        paragrafo.innerText = n1+" x "+i +" = " + (n1*i);
        divNumeros.appendChild(paragrafo);
        
        i++;
    }

}     
const btn = document.querySelector("button").addEventListener("click", (event) => {
    event.preventDefault();
    resul();
})
