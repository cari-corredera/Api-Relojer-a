import { conexionAPI } from "./service/conexionAPI.js";

const formulario = document.querySelector("[data-formulario]");
const botonLimpiar = document.querySelector("[data-limpiar]")

async function crearProducto(evento){
    evento.preventDefault();// evita que el formulario envie la información

    const nombre = document.querySelector("[data-nombre]").value;

    const precio = document.querySelector("[data-precio]").value;

    const imagen = document.querySelector("[data-imagen]").value;

    await conexionAPI.enviarCard(nombre,precio,imagen);

    // window.location.href= "";
}

formulario.addEventListener("submit",evento => crearProducto(evento));

botonLimpiar.addEventListener("click",()=>{
    formulario.reset()
});

