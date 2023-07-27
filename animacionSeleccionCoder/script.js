//DECLARACIÓN DE VARIABLES
var SecuenciaID = null;
var SecuenciaEjecutandose = null;
var imagen = 1;
var tiempo = 0;

//ARRAY DE IMÁGENES
var imagenes = new CreaArray(25);
	imagenes[1].src = "../img/AvataresSinFondo/1-removebg-preview.png"
	imagenes[2].src =  "../img/AvataresSinFondo/2-removebg-preview.png"
	imagenes[3].src =  "../img/AvataresSinFondo/3-removebg-preview.png"
	imagenes[4].src =  "../img/AvataresSinFondo/4-removebg-preview.png"
	imagenes[5].src =  "../img/AvataresSinFondo/5-removebg-preview.png"
	imagenes[6].src =  "../img/AvataresSinFondo/6-removebg-preview.png"
	imagenes[7].src =  "../img/AvataresSinFondo/7-removebg-preview.png"
	imagenes[8].src =  "../img/AvataresSinFondo/8-removebg-preview.png"
	imagenes[9].src =  "../img/AvataresSinFondo/9-removebg-preview.png"
	imagenes[10].src =  "../img/AvataresSinFondo/10-removebg-preview.png"
	imagenes[11].src =  "../img/AvataresSinFondo/11-removebg-preview.png"
	imagenes[12].src =  "../img/AvataresSinFondo/12-removebg-preview.png"
	imagenes[13].src =  "../img/AvataresSinFondo/13-removebg-preview.png"
	imagenes[14].src =  "../img/AvataresSinFondo/14-removebg-preview.png"
	imagenes[15].src =  "../img/AvataresSinFondo/15-removebg-preview.png"
	imagenes[16].src =  "../img/AvataresSinFondo/16-removebg-preview.png"
	imagenes[17].src =  "../img/AvataresSinFondo/17-removebg-preview.png"
	imagenes[18].src =  "../img/AvataresSinFondo/18-removebg-preview.png"
	imagenes[19].src =  "../img/AvataresSinFondo/19-removebg-preview.png"
	imagenes[20].src =  "../img/AvataresSinFondo/20-removebg-preview.png"
	imagenes[21].src =  "../img/AvataresSinFondo/21-removebg-preview.png"
	imagenes[22].src =  "../img/AvataresSinFondo/22-removebg-preview.png"
	imagenes[23].src =  "../img/AvataresSinFondo/23-removebg-preview.png"
	imagenes[24].src =  "../img/AvataresSinFondo/24-removebg-preview.png"
	imagenes[25].src =  "../img/AvataresSinFondo/25-removebg-preview.png"

//ARRAY DE "DURACIONES". Tiempo durante el cual se mostrará cada imagen
var duracion = new CreaArray2(25);
// Agrega aquí las duraciones de cada imagen (en milisegundos)

//ARRAY DE "TAMAÑOS". Tamaño que irá tomando cada imagen
var size = new CreaArray2(25);
// Agrega aquí los tamaños de cada imagen

//FUNCIONCES QUE DEBEMOS DEFINIR PARA CREAR LOS ARRAYS
function CreaArray(n) {
  this.length = n;
  for (var i = 1; i <= n; i++) {
    this[i] = new Image();
  }
  return this;
}

function CreaArray2(n) {
  this.length = n;
  for (var i = 1; i <= n; i++) {
    this[i] = 0;
  }
  return this;
}

function MostrarSecuencia() {
  if (SecuenciaEjecutandose == true) {
    document.images["coder-img"].width = size[imagen];
    document.images["coder-img"].height = size[imagen];
    document.images["coder-img"].src = imagenes[imagen].src;

    document.getElementById("coder-name").textContent = "Coder " + imagen;

    imagen++;
    if (imagen == 26)
      imagen = 1;

    SecuenciaID = setTimeout("MostrarSecuencia()", duracion[tiempo]);

    tiempo++;
    if (tiempo == 26)
      tiempo = 1;
  }
}

function IniciarAutomatico() {
  SecuenciaEjecutandose = true;
  MostrarSecuencia();
  setTimeout(Parar, 3000); // Detener después de 3 segundos (3000 milisegundos)
}

function Parar() {
  SecuenciaEjecutandose = false;
  clearTimeout(SecuenciaID);
  const randomIndex = Math.floor(Math.random() * 25) + 1; // Generar un número aleatorio entre 1 y 25
  const selectedCoder = randomIndex;

  document.getElementById("coder-img").src = imagenes[selectedCoder].src;
  document.getElementById("coder-name").textContent = "Coder " + selectedCoder;
}

IniciarAutomatico();