// Agregamos un evento de clic al botón para ejecutar la función
let audioIndexCoin = document.getElementById("btnIndexAudioCoin");
let audioIndexTuberia = document.getElementById("marioIndexAudioTuberia");
let audioButton = document.querySelectorAll(".mainIndex__section")

audioButton.forEach(el => el.addEventListener("mouseover", activarAudioIndexCoin));
function activarAudioIndexCoin() {
  audioIndexCoin.play();
}
