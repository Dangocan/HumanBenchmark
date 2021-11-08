const min = 3000;
const max = 5000;
const tempoAlvo = Math.random() * (max - min) + min;

const telaDeReacao = document.querySelector("#tela-reacao");
const botaoDeReacao = document.querySelector("#botao-reacao");

let tempoInicial = 0;
let tempoFinal = 0;

botaoDeReacao.addEventListener("click", (evento) => {
  evento.stopPropagation();
  botaoDeReacao.classList.add("invisivel");
  tempoInicial = new Date();
  const IDTimeout = setTimeout(() => {
    telaDeReacao.classList.add("bg-reacao___ativado");
  }, tempoAlvo);
});

telaDeReacao.addEventListener("click", () => {
  tempoFinal = new Date();
  botaoDeReacao.classList.remove("invisivel");
  telaDeReacao.classList.remove("bg-reacao___ativado");

  if (tempoInicial)
    botaoDeReacao.innerHTML = `tempo de reação <br /> ${
      Math.floor(tempoFinal - tempoInicial - tempoAlvo) + "ms"
    } <br /> Jogar Novamente`;
});
