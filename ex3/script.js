function resul(){
    const divNumeros = document.querySelector("div");
    let num = []; 
    
    let i = 1;
    while (i <= 10) {
        console.log(i);
        
     
        num.push(i);

        const paragrafo = document.createElement("p");
        paragrafo.innerText = i;
        divNumeros.appendChild(paragrafo);
        
        i++;
    }

}     
const btn = document.querySelector("button").addEventListener("click", (event) => {
    event.preventDefault();
    resul();
})
