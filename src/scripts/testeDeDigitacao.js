const TEXTOS_DIGITACAO = [
  "Há três espécies de cérebros: uns entendem por si próprios; os outros discernem o que os primeiros entendem; e os terceiros não entendem nem por si próprios nem pelos outros; os primeiros são excelentíssimos; os segundos excelentes; e os terceiros totalmente inúteis.",
  "Os homens quando não são forçados a lutar por necessidade, lutam por ambição.",
  "",
  "",
  "",
  "",
  ""
];

const texto = TEXTOS_DIGITACAO[0];
let input = '';

const textInput = document.querySelector("#text-input");
const textSpan = document.querySelector("#text-span");
const textoPrincipal = document.getElementById('texto-principal');
const botaoPrincipal = document.getElementById('botao-jogar');

textoPrincipal.innerHTML = texto;

botaoPrincipal.addEventListener('click', ()=>console.log('start'));

textInput.addEventListener('keyup', ()=> {
  input = textInput.value.split('').map((letra, index) => texto[index] === letra ? letra : `<span class="text-span-error">${letra}</span>`).join('');
  textSpan.innerHTML = input+`<span id='barra-digitacao'>I</span>`;
});