async function listaProductos(){

  try {
    const conexion = await fetch("http://localhost:3000/productos",{
        method:"GET",
        headers:{
            "Content-type":"application/json",
        }
    })

     const conexionConvertida = await conexion.json();

     return conexionConvertida;
    
  } catch (error) {
    console.log(error);
    
    }  
 
}

async function enviarCard(nombre,precio,imagen){
    const conexion = await fetch("http://localhost:3000/productos",{ 
        method:"POST",
        headers: {"Content-type":"application/json"},
        
        body:JSON.stringify({
            nombre:nombre,
            precio:precio,
            imagen:imagen
        })
    })

    const conexionConvertida = await conexion.json(); 

    return conexionConvertida;
}


async function borrarCard(id) {
    
      const conexion = await fetch(`http://localhost:3000/productos/${id}`,{
        method: "DELETE",
        headers: {
          "Content-Type": "application/json"
        }
      });

      if(conexion.ok){
        const contentType = conexion.headers.get("Content-Type");
        if(contentType && contentType.includes("application/json")){
          const data = await conexion.json();
        }else{
          console.log("Producto borrado,pero no se recibió JSON");
        }

      }else{
        console.error("Error al borrar el producto:", conexion.statusText);
      }
}


export const conexionAPI = {
     listaProductos,enviarCard,borrarCard
}
