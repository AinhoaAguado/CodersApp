

/*
const button = document.getElementById("btn-seleccion");
function clog() {
    const url = "https://page-backend-api.onrender.com/datos"
    fetch(url)
        .then(res => res.text())
            .then(hola => {
                const arraydatos = JSON.parse(hola);
                console.log(arraydatos);
            })};


button.addEventListener("click", clog);



  // Obtenemos una referencia al botón en el HTML
  const btn = document.getElementById("btn-seleccion");
  
  // Creamos una copia del array original de los coders
  let bufferImagenes = [...coders];
  
  // Función para cargar y mostrar una imagen aleatoria
  function cargarMostrarImagenAleatoria() {
    // Verificamos si aún hay imágenes disponibles en el buffer
    if (bufferImagenes.length === 0) {
      // Si no quedan imágenes en el buffer, mostramos un mensaje o realizamos alguna acción
      alert("No hay más coders disponibles");
      return;
    }
  
    // Obtenemos un índice aleatorio para seleccionar una imagen
    let indiceImagenAleatoria = generarEnteroAleatorio(bufferImagenes.length);
  
    // Obtenemos la imagen aleatoria según el índice obtenido
    let imagenAleatoria = bufferImagenes[indiceImagenAleatoria];
  
    // Eliminamos la imagen seleccionada del buffer
    bufferImagenes.splice(indiceImagenAleatoria, 1);
  
    // Creamos un nuevo elemento de imagen en el DOM
    let nuevoElementoImagen = document.createElement("img");
    nuevoElementoImagen.src = imagenAleatoria.src;
    nuevoElementoImagen.width = imagenAleatoria.width;
    nuevoElementoImagen.height = imagenAleatoria.height;
    nuevoElementoImagen.setAttribute("data-nombre", imagenAleatoria.nombre);
  
    // Agregamos la imagen al documento HTML
    document.body.appendChild(nuevoElementoImagen);
  
    // Obtenemos el nombre de la imagen aleatoria
    let nombreImagenAleatoria = imagenAleatoria.nombre;
  
    // Creamos un nuevo elemento de párrafo en el DOM
    let nuevoElementoNombre = document.createElement("p");
    nuevoElementoNombre.textContent = nombreImagenAleatoria;
  
    // Agregamos el nombre al documento HTML
    document.body.appendChild(nuevoElementoNombre);
  }
  
  // Agregamos un evento de clic al botón para ejecutar la función
  btn.addEventListener('click', cargarMostrarImagenAleatoria);
  
  // Función para generar un número entero aleatorio dentro de un rango
  function generarEnteroAleatorio(cantidadImagenes) {
    return Math.floor(Math.random() * cantidadImagenes);
  }
  */