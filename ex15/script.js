function pares() {
let numerosPares = [];

for (let i = 1; i <= 20; i++) {

  if (i % 2 === 0) {
    numerosPares.push(i);
  }
}
alert(numerosPares);
}

const btn = document.querySelector("button").addEventListener("click", (event) => {
    event.preventDefault();
    pares();
})