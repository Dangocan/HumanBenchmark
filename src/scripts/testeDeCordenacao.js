const botaoJogar = document.querySelector("#botao-jogar");
const container = document.querySelector("#container-principal");
const placar = document.querySelector("#placar");

let tempoInicial = null;
let intervalo = 920;
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
  placar.textContent = `${acertos} de 10`;
}

function gameOver(tempoInicial) {
  let tempoFinal = new Date().getTime() - intervalo * 11;
  let timeLimit = tempoFinal - tempoInicial?.getTime();
  console.log(tempoInicial?.getTime(), tempoFinal, timeLimit);
  if (intervaloID && timeLimit >= 0) {
    console.log("GameOver");
    console.log(acertos + "/10");
    clearInterval(intervaloID);
    container.innerHTML = "";
    botaoJogar.classList.remove("invisivel");
  }
}

function start() {
  acertosLimiter = false;
  acertos = 0;
  container.innerHTML = "";
  placar.innerHTML = "0 de 10";
  tempoInicial = new Date();
  botaoJogar.classList.add("invisivel");
}

function handleAcerto() {
  if (acertosLimiter) {
    acertos++;
    console.log(acertos + "/10");
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
