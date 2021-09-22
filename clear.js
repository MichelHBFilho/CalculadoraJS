const btnClear = document.querySelector("#clear");
btnClear.addEventListener("click", event => {
    display.classList.add("esmaecer");
    label.classList.add("sumir");
    setTimeout(element => {
        display.value = "";
        label.textContent = "⠀";
        display.classList.remove("esmaecer");
        label.classList.remove("sumir");
    }, 500)
})