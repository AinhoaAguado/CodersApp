

let coders = [
    {
      nombre: 'Victor'
    },
    {
      nombre: 'Jassed2'
    },
    {
      nombre: 'Jassed3'
    },
    {
      nombre: 'Jassed4'
    },
    {
      nombre: 'Jassed5'
    },
    {
      nombre: 'Jassed6'
    },
    {
      nombre: 'Jassed7'
    },
    {
      nombre: 'Jassed8'
    },
    {
      nombre: 'Jassed9'
    },
    {
      nombre: 'Jassed10'
    }
  ];
  
  // Array para almacenar las imágenes disponibles
  let imagenesDisponibles = Array.from(Array(36), (_, index) => index + 1);
  
  // Función para obtener una imagen aleatoria de la carpeta "Avatares sin fondo"
  function obtenerImagenAleatoria() {
    if (imagenesDisponibles.length === 0) {
      imagenesDisponibles = Array.from(Array(36), (_, index) => index + 1);
    }
    const indiceAleatorio = Math.floor(Math.random() * imagenesDisponibles.length);
    const imagenAleatoria = imagenesDisponibles.splice(indiceAleatorio, 1)[0];
    return `./Avatares sin fondo/${imagenAleatoria}.png`;
  }
  
  // Función para mostrar los coders en el contenedor
  function mostrarCoders() {
    const contenedor = document.getElementById("contenedor-coders");
    contenedor.innerHTML = "";
  
    coders.forEach(coder => {
      const imagen = document.createElement("img");
  
      // Obtener la imagen aleatoria de la carpeta "Avatares sin fondo"
      const imagenAleatoria = obtenerImagenAleatoria();
  
      // Establecer atributos src, width y height de la imagen
      imagen.src = imagenAleatoria;
      imagen.width = "200";
      imagen.height = "200";
  
      const nombre = document.createElement("p");
      nombre.textContent = coder.nombre;

      const botonEliminar = document.createElement("button");
      botonEliminar.textContent = "";
      botonEliminar.classList.add("button");
      botonEliminar.addEventListener("click", () => {
        eliminarCoder(coder);
        
      });

      const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");svg.setAttribute("viewBox", "0 0 448 512");svg.classList.add("svgIcon");
      const path = document.createElementNS("http://www.w3.org/2000/svg", "path");path.setAttribute("d", "M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z");
      svg.appendChild(path);
      botonEliminar.appendChild(svg);
  
      const objeto = document.createElement("div");
      objeto.classList.add("carta");
      objeto.appendChild(imagen);
      objeto.appendChild(nombre);
      objeto.appendChild(botonEliminar);
  
      contenedor.appendChild(objeto);
    });
  }

  

  function eliminarCoder(coder) {
    const indiceCoder = coders.findIndex(c => c.nombre === coder.nombre);
    coders.splice(indiceCoder, 1);
    mostrarCoders();
  }

  


  // Clase Coder
  class Coder {
    constructor(nombre) {
      this.nombre = nombre;
      this.src = obtenerImagenAleatoria(); // Asignar una imagen aleatoria al crear el objeto
    }
  }
  
  // Clase UI
  class UI {
    addCoder(coder) {
      coders.push(coder); // Agregar el nuevo coder al array
  
      // Mostrar los coders actualizados en el contenedor
      mostrarCoders();
  
      // Limpiar los campos del formulario
      document.getElementById("name").value = "";
      document.getElementById("apellidos").value = "";
    }
  
 
  }
  
  coders.forEach(coder => {
    coder.src = obtenerImagenAleatoria();
  });
  console.log(coders)
  
  // Evento submit del formulario
  document.getElementById("formulario").addEventListener("submit", function(e) {
    e.preventDefault();
  
    let name = document.getElementById("name").value;
    let apellidos = document.getElementById("apellidos").value;
  
    let coder = new Coder(name, apellidos);
  
    const ui = new UI();
    ui.addCoder(coder);

    fetch("https://page-backend-api.onrender.com/agregar-datosFormulario", {
  method: 'POST',
  headers: {
      'Content-Type': 'application/json'
  },
  body: JSON.stringify(coder)
})
  .then(response => response.json())
  .then( coder => {
  console.log('Respuesta del servidor:', coder);
  })
});



  //-------------------------------------
  //Contacto con el servidor

const button = document.querySelector(".add__button").addEventListener("click",function(){

  const datos = coders
  
fetch("https://page-backend-api.onrender.com/agregar-datos", {
  method: 'POST',
  headers: {
      'Content-Type': 'application/json'
  },
  body: JSON.stringify(datos)
})
  .then(response => response.json())
  .then( datos => {
  console.log('Respuesta del servidor:', datos);
  })
});




  mostrarCoders();

  
