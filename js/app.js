//Variables
const enivar = document.querySelector("#enviar");
//variables para campos
const email = document.querySelector("#email");
const asunto = document.querySelector("#asunto");
const mensaje = document.querySelector("#mensaje");
const form = document.querySelector("#enviar-mail");

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
        e.target.classList.add("border", "border-red-500");
        mostarError("Todos los campos son obligatorios");
    }

    if(e.target.type === "email" ) {
        const resultado = e.target.value.indexOf("@");
        if (resultado < 0 ){
            mostarError("Email no válido");
        }
    }
}
function mostarError (mensaje) {
    const mensajeError = document.createElement("p");
    mensajeError.textContent = mensaje;
    mensajeError.classList.add("border", "border-red-500", "background-color-100", "text-red-500", "p-3", "mt-3", "text-center", "error");
    const errores = document.querySelectorAll(".error");
    if(errores.length === 0){
        form.appendChild(mensajeError);
    }
    
}