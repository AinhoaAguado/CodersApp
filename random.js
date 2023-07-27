// Creamos una variable global para almacenar los datos del servidor
let arraydatos = [];

// Función para obtener los datos del servidor y guardarlos en la variable global
async function obtenerDatosDelServidor() {
  const url = "https://page-backend-api.onrender.com/datos";
  try {
    const res = await fetch(url);
    const datos = await res.json();

    // Almacenamos los datos en la variable global arraydatos
    arraydatos = datos;

    // Barajamos el array y lo almacenamos en bufferImagenes
    bufferImagenes = barajarArray([...arraydatos]);

    // Mostramos los datos en la consola
    console.log(arraydatos);

    // Una vez que los datos se han cargado, habilitamos el botón
    const button = document.getElementById("btn-seleccion");
    button.disabled = false;
  } catch (error) {
    console.error("Error al obtener los datos:", error);
  }
}

// Función para barajar un array en su lugar usando el algoritmo Fisher-Yates
function barajarArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// Llamamos a la función para obtener los datos del servidor cuando se cargue la página
obtenerDatosDelServidor();

// Obtenemos una referencia al botón en el HTML
const btn = document.getElementById("btn-seleccion");

// Deshabilitamos el botón al inicio hasta que los datos se carguen
btn.disabled = true;

// Obtenemos referencia del audio
const audio = document.getElementById("mario");
const audioSuspenso = document.getElementById("suspenso");

// Función para reproducir el sonido
function reproducirAudio() {
  audio.play();
}

function reproducirSuspenso() {
  audioSuspenso.play();
}

// Creamos una copia del array original de los coders y lo barajamos
let bufferImagenes = [];

// Creamos un arreglo para almacenar los Coders que ya han aparecido
let codersMostrados = [];

// Función para cargar y mostrar una imagen aleatoria
function cargarMostrarImagenAleatoria() {
  // Verificamos si aún hay imágenes disponibles en el buffer
  if (bufferImagenes.length === 0) {
    // Si no quedan imágenes en el buffer, mostramos un mensaje o realizamos alguna acción
    alert("No hay más coders disponibles");
    return;
  }

  // Deshabilitamos el botón mientras se selecciona y muestra el coder
  btn.disabled = true;

  // Mostramos la animación de carga
  document.querySelector(".loader").style.display = "flex";

  // Establecemos un tiempo de espera (en milisegundos) antes de mostrar al coder seleccionado
  const tiempoEspera = 3000; // 3 segundos
  reproducirSuspenso();
  setTimeout(function(){
    document.getElementById("animacionPreviaLoader").style.display = "none";

  }, 700);
  setTimeout(function () {
    // Ocultamos la animación de carga
    document.querySelector(".loader").style.display = "none";
    // Obtenemos un índice aleatorio para seleccionar una imagen
    let indiceImagenAleatoria = generarEnteroAleatorio(bufferImagenes.length);

    // Obtenemos la imagen aleatoria según el índice obtenido
    let imagenAleatoria = bufferImagenes[indiceImagenAleatoria];

    // Reproducimos el sonido
    reproducirAudio();

    // Eliminamos la imagen seleccionada del buffer para evitar que se repita
    bufferImagenes.splice(indiceImagenAleatoria, 1);

    // Agregamos el Coder a la lista de Coders mostrados
    codersMostrados.push(imagenAleatoria);

    // Mostramos el Coder elegido en el área de resultado
    mostrarResultado(imagenAleatoria);

    // Actualizamos la lista de Coders mostrados en el área correspondiente
    actualizarListaCodersMostrados();

    // Restauramos la visibilidad del botón para obtener un nuevo coder
    btn.disabled = false;
  }, tiempoEspera);
}

// Agregamos un evento de clic al botón para ejecutar la función
btn.addEventListener("click", cargarMostrarImagenAleatoria);

// Función para generar un número entero aleatorio dentro de un rango
function generarEnteroAleatorio(cantidadImagenes) {
  return Math.floor(Math.random() * cantidadImagenes);
}

// Función para mostrar el Coder seleccionado en el área de resultado
function mostrarResultado(imagenAleatoria) {
  // Obtenemos el área donde mostraremos el Coder seleccionado
  const resultadoArea = document.querySelector(".resultado");

  // Limpiamos el contenido previo en caso de que exista
  resultadoArea.innerHTML = "";

  // Creamos un nuevo elemento de imagen en el DOM
  let nuevoElementoImagen = document.createElement("img");
  nuevoElementoImagen.src = imagenAleatoria.src;
  nuevoElementoImagen.width = 300;
  nuevoElementoImagen.height = 300;
  nuevoElementoImagen.setAttribute("data-nombre", imagenAleatoria.nombre);

  // Agregamos la imagen al documento HTML
  resultadoArea.appendChild(nuevoElementoImagen);

  // Obtenemos el nombre de la imagen aleatoria
  let nombreImagenAleatoria = imagenAleatoria.nombre;

  // Creamos un nuevo elemento de párrafo en el DOM
  let nuevoElementoNombre = document.createElement("p");
  nuevoElementoNombre.textContent = nombreImagenAleatoria;

  // Agregamos el nombre al documento HTML
  resultadoArea.appendChild(nuevoElementoNombre);
  confetti();
}


// Función para actualizar la lista de Coders mostrados en el área correspondiente
function actualizarListaCodersMostrados() {
  // Obtenemos el área donde mostraremos la lista de Coders
  const listaCodersArea = document.querySelector(".lista-coders");

  // Limpiamos el contenido previo en caso de que exista
  listaCodersArea.innerHTML = "";

  // Recorremos el arreglo de Coders mostrados y creamos elementos de párrafo e imagen para cada uno
  codersMostrados.forEach(coder => {
    let nuevoElementoNombre = document.createElement("p");
    nuevoElementoNombre.textContent = coder.nombre;

    let nuevoElementoImagen = document.createElement("img");
    nuevoElementoImagen.src = coder.src;
    nuevoElementoImagen.width = 100;
    nuevoElementoImagen.height = 100;

    listaCodersArea.appendChild(nuevoElementoNombre);
    listaCodersArea.appendChild(nuevoElementoImagen);
  });
}


//confeti
function confetti(){
  const canvas = document.getElementById('#confetti')
  const jsConfetti = new JSConfetti({ canvas })
  jsConfetti.addConfetti()
  }







