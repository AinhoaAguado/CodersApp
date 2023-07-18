
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
      botonEliminar.textContent = "Eliminar";
      botonEliminar.addEventListener("click", () => {
        eliminarCoder(coder);
      });
  
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
      this.imagen = obtenerImagenAleatoria(); // Asignar una imagen aleatoria al crear el objeto
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
  
    // ...
  }
  
  // Evento submit del formulario
  document.getElementById("formulario").addEventListener("submit", function(e) {
    e.preventDefault();
  
    let name = document.getElementById("name").value;
    let apellidos = document.getElementById("apellidos").value;
  
    let coder = new Coder(name, apellidos);
  
    const ui = new UI();
    ui.addCoder(coder);


    mostrarCoders()

  //---------------------------------------------------
  //Contacto con el servidor

    fetch("https://page-backend-api.onrender.com/agregar-datos", {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(coder)
  })
      .then(response => response.json())
      .then(coder => {
      console.log('Respuesta del servidor:', coder);
      })
  
  });

  
