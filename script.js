import {aleatorio, nome} from './aleatorio.js';
import {perguntas} from './perguntas.js'

const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");
const botaoJogarNovamente = document.queryselector(".novamente-btn");
const botaoIniciar = document.querySelector(".iniciar-btn");
const telaInicial = document.querySelector(".tela-inicial");

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

botaoIniciar.addEventListener('click', iniciaJogo);

function iniciaJogo() {
    atual = 0;
    historiaFinal = "";
    telaInicial.style.display = 'none';
    caixaPerguntas.classList.remove("mostrar");
    caixaAlternativas.classList.remove("mostrar");
    caixaResultado.classList.remove("mostrar");
    mostraPergunta();
}

function mostraPergunta() {
    if(atual >= perguntas.length){
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
            const botaoAlternativas = document.createElement("button");
            botaoAlternativas.textContent = alternativa.texto;
            botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
            caixaAlternativas.appendChild(botaoAlternativas);
    }
   
function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historia += afirmacoes + "";
    atual++;
    mostraPergunta();
}

function respostaSelecionada(ropcaoSelecionada){
    const afirmacoes = aleatorio(opcaoSelecionada.afirmacoes);
    historiaFinal += afirmacoes;
    if(opcaoSelecionada.proxima !== undefined){
        atual = opçãoSelecionada.proxima;
    }else{                          
    mostraResultado();
    return;
}
mostraPergunta();
}

function mostraResultado(){
    caixaPerguntas.textContent = `Em 2049,${nome}`;
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
   
    
    botaoJogarNovamente.addEventListener("click", jogaNovamente());
}

function aleatorio(Lista){
      const posicao = Math.floor(Math.random()* Lista.length);
      return lista[posicao]
}

}

function jogarNovamente(){
    atual = 0;
    historiaFinal = ""
     caixaResultado.classList.remove("mostra");
    mostraPergunta();
}

function substituiNome(){
    for(const pergunta of perguntas){
        pergunta.enunciado = pergunta.enunciado.replace(/você/g, nome);
    }
}

substituiNome();

