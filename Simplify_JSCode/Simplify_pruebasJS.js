const miLista = [
    {
     name: "personaje1",
     surname: "apellido1"
    },
    {
        name: "personaje2",
        surname: "apellido2"
    },
    {
        name: "personaje3",
        surname: "apellido3"
    },
    {
        name: "personaje4",
        surname: "apellido4"
    },
    {
        name: "personaje5",
        surname: "apellido5"
    },
    {
        name: "personaje6",
        surname: "apellido6"
    },
    {
        name: "personaje7",
        surname: "apellido7"
    },
    {
        name: "personaje8",
        surname: "apellido8"
    },
    {
        name: "personaje9",
        surname: "apellido9"
    },
    {
        name: "personaje10",
        surname: "apellido10"
    },
    {
        name: "personaje11",
        surname: "apellido11"
    },
    {
        name: "personaje12",
        surname: "apellido12"
    }
]

let arrayMisImagenes = Array.from(Array(miLista.length), (_, index) => index + 1);

function obtenerImagen () {
    if (arrayMisImagenes.length === 0) {
        arrayMisImagenes = Array.from(Array(miLista.length), (_, index) => index + 1)
    }
    //crea Indice de la imagen
    const creaIndiceAleatorio = Math.floor(Math.random() * arrayMisImagenes.length);

    //busca imagen aleatoria    // splice = para que no se repita
    const muestraImagenAleatoria = arrayMisImagenes.splice(creaIndiceAleatorio, 1)[0];

    // Nos devuelve desde la carpeta imagen la imagen aleatoria elegida anteriormente
    return `../img/AvataresSinFondo/${muestraImagenAleatoria}-removebg-preview.png`

}

// Mostrar coders
function muestraCoders () {
    const mostrar =  document.getElementById("mostrar"); //obtenemos el div en el que mostrar
    mostrar.innerHTML = ""; // para limpiar el contenido
    miLista.forEach(element => {
        const creaImg = document.createElement("img");
        const imagenMuestra = obtenerImagen();
        creaImg.src = imagenMuestra;
        creaImg.height = "200";
        creaImg.width = "200";

        const imprimeNombre = document.createElement("p");
        imprimeNombre.textContent = element.name;
        const imprimeApellido = document.createElement("p");
        imprimeApellido.textContent = element.surname;

        const creaDiv = document.createElement("div");
        creaDiv.classList.add("claseDiv");
        creaDiv.appendChild(creaImg);
        creaDiv.appendChild(imprimeNombre);
        
        creaDiv.appendChild(imprimeApellido);
        mostrar.appendChild(creaDiv);
    });
}

muestraCoders ();
