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
  await piscaBotao(1);
  await piscaBotao(0);
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

async function limpaBotoes() {
  await new Promise((resolve, reject) =>
    setTimeout(() => {
      botoesGrupo.forEach((botao) => botao.classList.remove("ativo"));
      resolve(1);
    }, 2000)
  );
}

async function acendeBotao(botao) {
  await new Promise((resolve, reject) =>
    setTimeout(() => {
      botao.classList.add("ativo");
      resolve(1);
    }, 2000)
  );
}

async function piscaBotao(indice) {
  await acendeBotao(botoesGrupo[indice]);
  await limpaBotoes();
}
