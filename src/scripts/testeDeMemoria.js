let tempoInicial, tempoFinal, fimJogo;
let sequencia = [0, 1, 2, 3];
let contagemClicks = 0;
let tempo = 1000;

const botaoVermelho = document.getElementById("botao-vermelho");
const botaoVerde = document.getElementById("botao-verde");
const botaoAzul = document.getElementById("botao-azul");
const botaoAmarelo = document.getElementById("botao-amarelo");
const botoesGrupo = document.querySelectorAll(".bt-genius");

const botaoJogar = document.getElementById("botao-jogar");

botaoJogar.onclick = async () => {
  console.log("START");
  setInterval(setTimeout(await piscaBotao(1), 2 * tempo), 3000);
};

function aumentaSequencia() {
  let proximo = Math.floor(Math.random() * 4);
  sequencia.push(proximo);
  console.log(sequencia);
}

botoesGrupo.forEach(
  (botao) =>
    (botao.onclick = () => {
      contagemClicks++;
      console.log(contagemClicks + " AA " + botao.innerHTML);
    })
);

async function limpaBotoes(tempo) {
  setTimeout(() => {
    botoesGrupo.forEach((botao, tempo) => botao.classList.remove("ativo"));
  }, tempo);
}

async function acendeBotao(botao) {
  botao.classList.add("ativo");
}

async function piscaBotao(indice) {
  acendeBotao(botoesGrupo[indice]);
  await limpaBotoes(tempo);
}

////////////////////////////////////////////////////////////////
//start sequence
setTimeout(changeMessage.bind(null, 0), 2500);

function changeMessage(index) {
  if (index >= messages.length) {
    return;
  }

  msg.classList.remove("fade-in-out");
  msg.textContent = messages[index];

  //Trigger reflow so page re-calculates itself
  //and doesn't optimize away the adding and
  //removing of the same class
  void msg.offsetWidth;

  msg.classList.add("fade-in-out");
  setTimeout(changeMessage.bind(null, index + 1), 2500);
}
