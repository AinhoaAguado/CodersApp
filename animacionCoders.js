const name = document.createElement("p");
const img = document.createElement("img");
const coderDiv = document.getElementById("coder-display");

function displayCoderDOM(coder) {
    img.setAttribute("src", `./${coder.img}`);
    name.textContent = coder.nombre;

    // Verificamos si los elementos ya han sido añadidos al contenedor
    if (!name.parentElement) {
    coderDiv.appendChild(name);
    }

    if (!img.parentElement) {
    coderDiv.appendChild(img);
    }
}
let totalTime = 0;
let time = 5;
let timeIncrese = 1.08;

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
async function displayCodersRandom(array) {
    let cont = 0;
    
    while (totalTime < 300) {
      const random = Math.floor(Math.random() * array.length);
    displayCoderDOM(array[random]);

    cont++;
      time = time * timeIncrese;
      timeIncrese = timeIncrese * 0.9993;
    totalTime = totalTime + time;
      await sleep(cont * time); // Pausa con el tiempo calculado antes de la próxima iteración
    }

    console.log(totalTime);
}

displayCodersRandom(coders);