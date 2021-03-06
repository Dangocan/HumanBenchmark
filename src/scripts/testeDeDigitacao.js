const TEXTOS_DIGITACAO = [
  "Há três espécies de cérebros: uns entendem por si próprios; os outros discernem o que os primeiros entendem; e os terceiros não entendem nem por si próprios nem pelos outros; os primeiros são excelentíssimos; os segundos excelentes; e os terceiros totalmente inúteis.",
  "Os homens quando não são forçados a lutar por necessidade, lutam por ambição.",
  "Ninguém é tão grande que não possa aprender, nem tão pequeno que não possa ensinar.",
  "",
  "",
  "",
  "",
];
const texto = TEXTOS_DIGITACAO[0];

let input = "";
let tempoInicial, tempoFinal, fimJogo;

const textInput = document.querySelector("#text-input");
const textSpan = document.querySelector("#text-span");
const textoPrincipal = document.getElementById("texto-principal");
const botaoPrincipal = document.getElementById("botao-jogar");

textoPrincipal.innerHTML = texto;

botaoPrincipal.addEventListener("click", () => {
  if (!tempoInicial || fimJogo) {
    fimJogo = false;
    botaoPrincipal.classList.add("ativo");
    botaoPrincipal.innerHTML = "Jogo em progresso";
    textInput.value = "";
    textSpan.innerHTML = `<span id="barra-digitacao">I</span>`;
    textInput.focus();
    tempoInicial = new Date();
    console.log("start");
  }
});

textInput.addEventListener("blur", () => {
  !fimJogo && textInput.focus();
});

textInput.addEventListener("keydown", (e) => {
  switch (e.keyCode) {
    case 37:
    case 38:
    case 39:
    case 40:
      e.preventDefault();
      console.log("Arrow block" + e.keyCode);
      break;
    default:
      break;
  }
});

textInput.addEventListener("keyup", () => {
  if (!fimJogo) {
    if (texto === textInput.value) {
      tempoFinal = new Date();
      console.log(
        "Você levou " +
          Math.floor(tempoFinal?.getTime() - tempoInicial?.getTime()) / 1000 +
          "segundos"
      );
      botaoPrincipal.classList.remove("ativo");
      botaoPrincipal.innerHTML = `Você levou ${
        Math.floor(tempoFinal?.getTime() - tempoInicial?.getTime()) / 1000
      } segundos <br /> clique para jogar novamente`;
      fimJogo = true;
    }

    input = textInput.value
      .split("")
      .map((letra, index) =>
        texto[index] === letra
          ? letra
          : `<span class="text-span-error">${letra}</span>`
      )
      .join("");
    textSpan.innerHTML = input + `<span id='barra-digitacao'>I</span>`;
  }
});
