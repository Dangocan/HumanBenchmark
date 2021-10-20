const min = 3000;
const max = 5000;
const tempoAlvo = Math.random()* (max - min) + min;
const botaoDeReacao = document.querySelector("#botao-reacao");

let tempoInicial = 0;
let tempoFinal = 0;

botaoDeReacao.addEventListener("dblclick", () => {
  tempoInicial = new Date();
  setTimeout(() => {
    botaoDeReacao.classList.remove("bg-reacao");
    botaoDeReacao.classList.add("bg-reacao___ativado");
  }, tempoAlvo);
});

botaoDeReacao.addEventListener("click", () => {
  tempoFinal = new Date();
  if(tempoInicial)
  console.log(Math.floor((tempoFinal.getTime()-tempoInicial.getTime())-tempoAlvo) + 'ms');
});
