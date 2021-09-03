//Variables
const enivar = document.querySelector("#enviar");
//variables para campos
const email = document.querySelector("#email");
const asunto = document.querySelector("#asunto");
const mensaje = document.querySelector("#mensaje");

eventListener();
function eventListener() {
    //Cuando la app aranca
    document.addEventListener("DOMContentLoaded", inicarApp);

    email.addEventListener("blur", validarFormulario);
    asunto.addEventListener("blur", validarFormulario);
    mensaje.addEventListener("blur", validarFormulario);
}
//Fucniones

function inicarApp() {
    console.log ("Iniciando");
    enivar.disables = true;
    enivar.classList.add("cursor-not-allowed", "opacity-50");
}

function validarFormulario (e) {
    if(e.target.value.length > 0){
        console.log ("hay cosas");
    }else {
        e.target.classList.add("border", "border-red-500")
    }
}
//EventListeners