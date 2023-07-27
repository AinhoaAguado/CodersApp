// Agregamos un evento de clic al botón para ejecutar la función
let audioIndex = document.getElementById("marioIndexBtnSound");
let audioButton = document.querySelectorAll(".mainIndex__section")
console.log(audioButton)

audioButton.forEach(el => el.addEventListener("mouseover", activarAudioIndex));
function activarAudioIndex() {
  console.log("test")
  audioIndex.play();
}



//audioIndex.mouseover();