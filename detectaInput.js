const numeros = document.querySelectorAll(".numero");
const display = document.querySelector("#displayNumeros")
numeros.forEach(numero => {
    numero.addEventListener("click", event => {
        let valorNumero = numero.getAttribute("value");
        display.value = display.value + valorNumero;
    })
})