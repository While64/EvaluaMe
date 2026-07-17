let registrar = document.querySelector("#navReg");
let dialogReg = document.querySelector("#registro");
let btnCerrarReg = document.querySelector("#btnCerrarReg");

// Espera a que todo el HTML esté cargado en el navegador
document.addEventListener("DOMContentLoaded", () => {
    
    if (dialogReg) {
        dialogReg.showModal();
    }
});

