import { conexionAPI } from "./service/conexionAPI.js";

const contenedorProductos = document.querySelector("[data-productos]")

function crearCard(nombre,imagen,precio,id){
    const card = document.createElement("div");

    card.className = "card";

    card.innerHTML = `<img class="imagen-producto" src="${imagen}"/>
        <div class="card-container--info">
            <p>${nombre}</p>
            <div class="card-container--value">
                <p>${precio}</p>
               <i class="fa-regular fa-trash-can" data-id="${id}"></i>
            </div>
        </div>`;

    const iconBorrar = card.querySelector ("[data-id]");
    const idIcon = iconBorrar.getAttribute("data-id");
    
    iconBorrar.addEventListener("click", async () => {
    
        await conexionAPI.borrarCard(idIcon);
        card.remove();
           
    });

    return card;


}

    async function listaProductos(){
        const listaAPI = await conexionAPI.listaProductos();

        if(listaAPI.length === 0){
            const mensaje = document.createElement("span");
            mensaje.classList = "no-hay-producto";
            mensaje.innerText = "No se han agregado productos";
            contenedorProductos.appendChild(mensaje);
        }
        listaAPI.forEach(producto=>contenedorProductos.appendChild(crearCard(producto.nombre,producto.imagen,producto.precio,producto.id)))
            
    };
    
listaProductos();
