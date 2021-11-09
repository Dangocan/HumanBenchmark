let SequenciaEmAndamento, fimJogo, acertouSequencia;
let sequencia = [0, 1, 2];
let contagemClicks = 0;
let tempo = 1000;
let acertos = 0;

const botaoVermelho = document.getElementById("botao-vermelho");
const botaoVerde = document.getElementById("botao-verde");
const botaoAzul = document.getElementById("botao-azul");
const botaoAmarelo = document.getElementById("botao-amarelo");
const botoesGrupo = document.querySelectorAll(".bt-genius");

const botaoJogar = document.getElementById("botao-jogar");

botaoJogar.onclick = async () => {
  if (!SequenciaEmAndamento) {
    SequenciaEmAndamento = true;
    botaoJogar.innerHTML = "espere";
    fimJogo = false;
    acertouSequencia = false;

    console.log("START");
    for (let i = 0; i < sequencia.length; i++) {
      await new Promise((resolve, reject) => {
        setTimeout(() => {
          piscaBotao(sequencia[i]);
          resolve(1);
        }, 1800);
      });
    }

    await new Promise((resolve, reject) => {
      setTimeout(() => {
        SequenciaEmAndamento = false;
        contagemClicks = 0;
        botaoJogar.innerHTML = "aperte";
        console.log("FIM da Sequencia");
        resolve(1);
      }, 1800);
    });

    aumentaSequencia();
  }
};

function aumentaSequencia() {
  let proximo = Math.floor(Math.random() * 4);
  sequencia.push(proximo);
  console.log(sequencia);
}

botoesGrupo.forEach(
  (botao) =>
    (botao.onclick = () => {
      if (!SequenciaEmAndamento && !fimJogo && !acertouSequencia) {
        contagemClicks++;
        if (
          sequencia[contagemClicks - 1] == botao.innerHTML &&
          contagemClicks <= sequencia.length - 1
        ) {
          console.log("acerto");
          handleAcerto();
        } else {
          console.log("erro");
          handleErro();
        }
        console.log(contagemClicks + " AA " + botao.innerHTML);
      }
    })
);

function handleAcerto() {
  acertos++;
  botaoJogar.innerHTML = `Voce acertou - ${acertos}/${sequencia.length - 1}`;
  if (contagemClicks === sequencia.length - 1) {
    botaoJogar.innerHTML = `Próxima sequencia`;
    acertouSequencia = true;
    acertos = 0;
  }
}

function handleErro() {
  fimJogo = true;
  acertos = 0;
  contagemClicks = 0;
  sequencia = [0, 1, 2];
  botaoJogar.innerHTML = `Voce Errou <br /> Jogue Novamente`;
}

async function limpaBotoes() {
  await new Promise((resolve, reject) =>
    setTimeout(() => {
      botoesGrupo.forEach((botao) => botao.classList.remove("ativo"));
      resolve(1);
    }, 1000)
  );
}

async function acendeBotao(botao) {
  await new Promise((resolve, reject) =>
    setTimeout(() => {
      botao.classList.add("ativo");
      resolve(1);
    }, 1800)
  );
}

async function piscaBotao(indice) {
  await acendeBotao(botoesGrupo[indice]);
  await limpaBotoes();
}
