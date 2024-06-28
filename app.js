exibirMensagemInicial();
let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;


function exibirTextoNaTela (tag,texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto,'Brazilian Portuguese Female',{rate:1.2});
}

function exibirMensagemInicial(){
exibirTextoNaTela ('h1','Jogo do número secreto');
exibirTextoNaTela ('p','Escolha um número de 1 a 10');}

function verificarChute() {
    let chute = document.querySelector('input').value;

    let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Acertou');
        exibirTextoNaTela('p', `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }
    else{ if (chute > numeroSecreto) {
        exibirTextoNaTela('p', 'O número secreto é menor');
    }
    else {
        exibirTextoNaTela('p', 'O número secreto é maior');
    }
tentativas++;
limparCampo();}
}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

    if(quantidadeDeElementosNaLista == numeroLimite){
        listaDeNumerosSorteados = [];
    }

    if(listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
        }
    }

function limparCampo() {
   let campoChute = document.querySelector('input');
   campoChute.value = '';
}

function reiniciarJogo() {
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    numeroSecreto = gerarNumeroAleatorio();
    document.getElementById('reiniciar').setAttribute('disabled',true);
}
