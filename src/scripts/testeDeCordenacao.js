const botaoJogar = document.querySelector("#botao-jogar");
const container = document.querySelector("#container-principal");
const placar = document.querySelector("#placar");

let tempoInicial = null;
let intervalo = 1000;
let acertos = 0;
let acertosLimiter = false;
let intervaloID = null;

let cordenadaX = "50";
let cordenadaY = "50";

function getCordAleatoria(height, weight) {
  return [
    Math.floor(Math.random() * (weight - 2 - 2 + 1)) + 2,
    Math.floor(Math.random() * (height - 2 - 2 + 1)) + 2,
  ];
}

function renderAlvo(y, x) {
  acertosLimiter = true;
  return `<button class='alvo' style='top:${y}vh;left:${x}vw'; >&#127919;</button>`;
}

function mudaPlacar() {
  placar.textContent = acertos;
}

function gameOver(tempoInicial) {
  tempoFinal = new Date().getTime() - intervalo * 10;
  let timeLimit = tempoFinal - tempoInicial?.getTime();
  console.log(tempoInicial?.getTime(), tempoFinal, timeLimit);
  if (intervaloID && timeLimit >= 0) {
    console.log("GameOver");
    console.log(acertos + "/10");
    clearInterval(intervaloID);
    container.innerHTML = "";
  }
}

function start() {
  acertosLimiter = false;
  acertos = 0;
  container.innerHTML = "";
  tempoInicial = new Date();
}

function handleAcerto() {
  if (acertosLimiter) {
    acertos++;
    console.log(acertos + "/9");
    mudaPlacar();
    acertosLimiter = false;
  }
  container.innerHTML = "";
}

botaoJogar.addEventListener("click", () => {
  start();
  intervaloID = setInterval(() => {
    [cordenadaY, cordenadaX] = getCordAleatoria(75, 75);
    container.innerHTML = renderAlvo(cordenadaY, cordenadaX);
    container.firstChild.addEventListener("click", handleAcerto);
    console.log(cordenadaY, cordenadaX);
    gameOver(tempoInicial);
  }, intervalo);
});

document.querySelector(".alvo")?.addEventListener("click", () => {
  let tempoFinal = new Date();
  if (tempoInicial)
    console.log(
      Math.floor(tempoFinal.getTime() - tempoInicial.getTime() - tempoAlvo) +
        "ms"
    );
});
