
let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female',{rate:1.2});
}

function exibirMensagemInicial (){
    exibirTextoNaTela('h1','Jogo do Número Secreto');
    exibirTextoNaTela('p','Escolha um número entre 1 e 10');
}

exibirMensagemInicial();

function verificarChute() {
    let chute = document.querySelector('input').value;

    if (chute == numeroSecreto){
            exibirTextoNaTela('h1', 'Acertou!');
            let palavraTentativas = tentativas > 1 ? 'tentativas' : 'tentativa';
            let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativas}!`;
            exibirTextoNaTela('p',mensagemTentativas);
            document.getElementById('reiniciar').removeAttribute('disabled');
    } else if(chute > numeroSecreto){
            exibirTextoNaTela('p','O numero secreto é menor!');
    } else{
            exibirTextoNaTela('p','O numero secreto é maior!');
    }
    tentativas++;
    limparCampo();
}

function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled',true);
}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quatidadeDeElementosNaLista = listaDeNumerosSorteados.length;
    if (quatidadeDeElementosNaLista == numeroLimite){
        listaDeNumerosSorteados = [];
    }

    if (listaDeNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    } else{
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
    }
}

/*

-----------------------------------------------------------------------------
Exercicios Modulo 1 

let titulo2 = document.querySelector('h1');
titulo2.innerHTML = 'Hora do Desafio';

function verificarChute(){
    console.log('O Botão foi clicado!');
}

function verificarChute(){
    console.log ('Eu amo JS');
}

function verificarChute(){
    cidade = prompt("Nome de uma cidade do Brasil: ");
    alert (`Estive em ${cidade} e lembrei de você!`)
}

function verificarChute(){
    let n1 = prompt("Numero 1: ");
    let n2 = prompt("Numero 2: ");
    let n3 = n1 + n2;
    alert (`Resultado da soma dos numeros: ${n3}`);
}
-----------------------------------------------------------------------------
Exercicios Modulo 2

function mundo(){
    console.log ('Olá Mundo!');
}

mundo();

function nomeDaPessoa(nome){
    console.log(`Olá ${nome}`);
}

nomeDaPessoa('Bruno Ricardo Ferreira');


function numeroDobrado(n1){
    n1 = n1 * 2;
    console.log(`${n1}`);
}

numeroDobrado('5');

function treeNumber (n1,n2,n3){
    let numberMedia = (n1 + n2 + n3) / 3;
    console.log(`${numberMedia}`);
}

treeNumber(5,8,3);

function twoNumber (n4,n5){
    if (n4 > n5){
        console.log ("Numero 1 é maior que o numero 2");
    } else{
        console.log (" Numero 2 é maior que o numero 1");
    }
}

twoNumber(7,9);

function mNumber (n6){
    let multiplicacao = n6 * n6;
    console.log (`${multiplicacao}`);
}

mNumber(9);


-----------------------------------------------------------------------------
Exercicios Modulo 3




function conversao(valor){
    let dolar = 4.80; 
    let conversaoD = valor / dolar;
    console.log(`O valor da conversão em reais: ${conversaoD}`);
}

conversao('500');

function fatorial(fat){
    n1 = fat;
    fat--;
    while (fat >= 1){
        n1 = n1 * fat;
        fat--
        
    }
    console.log(`Soma do fatorial: ${n1}`);
}

fatorial(4);

function tabuada(n2){
    let tab = 1;
    while (tab <= 10){
        n3 = n2 * tab;
        console.log(`Tabuada: ${n2}X${tab} = ${n3}`);
        tab++
    }

}

tabuada(9);

function IMC (peso,altura){
    let imcR = peso / (altura * altura);
    if (imcR < 18.5){
        console.log("O seu IMC é abaixo do peso!");
    } else if(imcR > 18.5 && imcR < 24.9){
        console.log("O seu IMC é Peso Normal!");
    } else if (imcR > 25.0 && imcR < 29.9){
        console.log("O seu IMC é Sobrepeso!");
    } else if (imcR > 30.0 && imcR < 34.9){
        console.log("O seu IMC é Obesidade Grau 1!");
    } else if (imcR > 35.0 && imcR < 39.9){
        console.log("O seu IMC é Obesidade Grau 2!");
    } else if (imcR > 40.0){
        console.log("O seu IMC é Obesidade Grau 3! ");
    }
}

IMC(120,2.15);

function perimetro(altura,largura){
    let P = 2 * (altura + largura);
    console.log(`O perimetro de um retangulo é ${P}`);
}

perimetro(8,5);

function perimetroCircular(raio){
    let Pc = 2 * 3.1416 * raio;
    console.log(`O perimetro de uma sala circular é ${Pc}`);
}

perimetroCircular(5);


-----------------------------------------------------------------------------
Exercicios Modulo 4



let listaGenerica = [1,2,3];
let linguaguensProgramacao = ["JavaScript","C","C++","Kotlin","Python"];
linguaguensProgramacao.push("Java", "Ruby", "Golang");
console.log(linguaguensProgramacao);
console.log(linguaguensProgramacao[0]);
console.log(linguaguensProgramacao[1]);
console.log(linguaguensProgramacao[2]);

*/