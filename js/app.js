//Variables
const enivar = document.querySelector("#enviar");
const reset = document.querySelector("#resetBtn")
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


    form.addEventListener("submit", enviarEmail);

    reset.addEventListener("click", reseteador);
}
//Fucniones

function inicarApp() {
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

    if(er.test(email.value) && mensaje.value !== "" && asunto.value !== "" ){
        enivar.disables = false;
        enivar.classList.remove("cursor-not-allowed", "opacity-50");
    }else {
        enivar.disables = true;
        enivar.classList.add("cursor-not-allowed", "opacity-50");
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
function enviarEmail (e) {
    e.preventDefault();

    //mostrar el spinner
    const spinner = document.querySelector("#spinner");
    spinner.style.display = "flex";

    //3 seg despues

    setTimeout(  ()=>{
        spinner.style.display = "none";

        const parrafo = document.createElement("p");
        parrafo.textContent = "Enviado correctamente!";
        parrafo.classList.add("text-center", "my-10", "p-2", "bg-green-500", "text-white", "uppercase");
        form.insertBefore(parrafo, spinner);

        setTimeout( () => {
            parrafo.remove();
            resetearFormulario();
        })
    }, 3000)
}

function resetearFormulario() {
    form.reset();
    inicarApp();
}

function reseteador (e) {
    e.preventDefault();
    resetearFormulario();
}