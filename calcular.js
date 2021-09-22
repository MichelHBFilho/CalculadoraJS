const operadores = document.querySelectorAll(".operador");
const btnigual = document.querySelector("#igual");
const label = document.querySelector("label[for='displayNumeros']");
let valores = [];
let operador;

operadores.forEach(element => {
    element.addEventListener("click", event => {
        valores = [];
        valores.push(parseInt(display.value));
        operador = element.getAttribute("value");
        label.textContent = label.textContent + valores[valores.length - 1] + operador;
        display.value = "";
    })
})

btnigual.addEventListener("click", event => {
    valores.push(parseInt(display.value));
    display.value = seguir();
    label.textContent = "⠀";
})

function seguir() {
    if(operador == "x") {
        return multiplicar();
    } else if (operador == "/") {
        return dividir();
    } else if (operador == "+") {
        return somar();
    } else if (operador == "-") {
        return subtrair();
    }
}

function multiplicar() {
    total = valores[0] * valores[1];
    return total;
}
function dividir() {
    total = valores[0] / valores[1];
    return total;
}
function somar() {
    total = valores[0] + valores[1];
    return total;
}
function subtrair() {
    total = valores[0] - valores[1];
    return total;
}

