
alert('Boas vindas ao jogo número secreto!');
let numeroMaximo = 5000;
let numeroSecreto =  parseInt(Math.random() * numeroMaximo + 1);
console.log(numeroSecreto);
let chute;
let tentativas = 1;

while (chute != numeroSecreto){
    chute = prompt(`Escolha um numero entre 1 e ${numeroMaximo}`);
    if (chute == numeroSecreto){
       break;
    }else if( chute > numeroSecreto){
        alert(`O número secreto é menor que ${chute}`);
        tentativas++
    }else{
        alert(`O número secreto é maior que ${chute}`);
        tentativas++
}
}


let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
 alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}.`);

 /*
if (tentativas > 1) {
     alert(`Isso ai! Você descobriu o ${numeroSecreto}. Seu numero de Tentativas: ${tentativas}`);
} else{
    alert(`Isso ai! Você descobriu o ${numeroSecreto}. Seu numero de Tentativa: ${tentativas}`);
}
*/

/*

-----------------------------------------------------------------------------
Exercicios Modulo 1 

alert('Boas Vindas ao nosso Site');
let nome = ('Lua');
let idade = 25;
let numeroDeVendas = 50;
let saldoDisponivel = 1000;
alert ('Erro! Preencha todos os campos');
let mensagemDeErro = ("Erro! Preencha todos os campos!");
alert = mensagemDeErro;
let nome2 = prompt("Qual o seu nome usuário?");
let idade2 = prompt("Qual a sua idade?");
let habilitacao = 18;
if (idade2 >= habilitacao){
    //console.log("Pode Tirar a Habilitação");
}

-----------------------------------------------------------------------------
Excercicios Modulo 2

let usuario = prompt("Qual o seu nome: ");
alert (`Boas Vindas ${usuario}`);

let saldo = prompt(" Qual o Saldo da sua conta: ");
alert (`Saldo da sua conta: ${saldo}`);

let pontuacao = prompt ("Pontuação do jogador: ");
if (pontuacao >= 100){
    alert("Parabéns, Você venceu!");
} else{
    alert (" Tente novamente para ganhar!");
}

let number = prompt("Digite um numero: ");
let negativo = -10;

if (number >= 0){
    alert("Numero Positivo!");
} else if(number <= -1){
    alert (" Numero Negativo!");
}


let dia = prompt("Qual o dia da Semana?");

if (dia == "Sábado"){
    alert ("Bom final de Semana!");
}else if (dia == "Domingo"){
    alert ("Bom final de Semana!");
}else{
    alert ("Boa Semana!");
}
-----------------------------------------------------------------------------
Exercicios Modulo 3 

let contador = 0;
while (contador <= 10){
    alert(`Contador: ${contador}`);
    contador++
}

let contadorInvertido = 10;
while (contadorInvertido >= 0){
    alert(`Contador: ${contadorInvertido}`);
    contadorInvertido--
}

let contadorInvertido = prompt("Digite um numero: ");
while (contadorInvertido >= 0){
    alert(`Contador: ${contadorInvertido}`);
    contadorInvertido--
    console.log (contadorInvertido);
}

let contadorProgressivo = prompt("Digite um numero: ");
while (contadorProgressivo <= 10){
    alert(`Contador: ${contadorProgressivo}`);
    contadorProgressivo++
    console.log (contadorProgressivo);
}



-----------------------------------------------------------------------------
Exercicios Modulo 4 


console.log('Boas Vindas ao Game!');

let nome = prompt ("Qual o seu nome: ");
console.log (nome); 
alert(`O seu nome é ${nome}`);

let linguagem = prompt("Qual a linguagem de programação que você mais gosta? ");
console.log(`A linguagem que mais gosta é ${linguagem}`);

let valor1 = 5;
let valor2 = 5;
let resultado1 = valor1 + valor2; 
console.log(`A soma de ${valor1} e ${valor2} é igual a ${resultado1}.`);

let valor3 = 10;
let valor4 = 4;
let resultado2 = valor3 - valor4; 
console.log(`A subtração de ${valor3} e ${valor4} é igual a ${resultado2}.`);

let idade = prompt("Qual a sua idade: ");

if (idade >= 18){
    console.log("Você é maior de idade! ");
} else {
    console.log("Você é menor de idade!");
}

let numero2 = prompt(" Digite um numero: ");

if (numero2 >= 1){
    alert("O Numero é positivo!");
} else if(numero2 == 0){
    alert("O Numero é 0!");
} else{
    alert("O numero é negativo!");
}

let loop = 0

while(loop <= 10){
    if(loop == 10){
        break;
    }else{
        loop++
    console.log(`A contagem dos numeros: ${loop}`);
    }
    
}

let nota = prompt("Digite a sua nota: ");

if (nota >= 7){
    alert("Aprovado!");
}else{
    alert("Reprovado!");
}

let numeroAleatorio = Math.random();
console.log(`O primeiro numero aleatorio: ${numeroAleatorio}`);

let numeroAleatorio2 = parseInt(Math.random() * 10 + 1);
console.log(`O segundo numero aleatorio: ${numeroAleatorio2}`);

let numeroAleatorio3 = parseInt(Math.random() * 1000 + 1);
console.log(`O terceiro numero aleatorio: ${numeroAleatorio3}`);

-----------------------------------------------------------------------------
*/
