//Variables
const enivar = document.querySelector("#enviar");
//variables para campos
const email = document.querySelector("#email");
const asunto = document.querySelector("#asunto");
const mensaje = document.querySelector("#mensaje");
const form = document.querySelector("#enviar-mail");
const er =  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

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
        //Elimina errores
        const error = document.querySelector("p.error");
        if(error) {
            error.remove();
        }
        e.target.classList.remove("border", "border-red-500");
        e.target.classList.add("border", "border-green-500");
        
    }else {
        e.target.classList.remove("border", "border-green-500");
        e.target.classList.add("border", "border-red-500");
        mostarError("Todos los campos son obligatorios");
    }

    if(e.target.type === "email" ) {
        
        
        if (er.test(e.target.value) ){
            const error = document.querySelector("p.error");
            if(error) {
                error.remove();
            }
            e.target.classList.remove("border", "border-red-500");
            e.target.classList.add("border", "border-green-500");
        }else{
            e.target.classList.remove("border", "border-green-500");
            e.target.classList.add("border", "border-red-500");
            mostarError("Email no válido");
        }
    }

    if(er.test(e.target.value) && mensaje.value !== "" && asunto.value !== "" ){
        console.log("Pasaste la validacion")
    }else{
        console.log("no paso")
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