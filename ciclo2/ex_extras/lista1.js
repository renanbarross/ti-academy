/*1) Faça um programa que receba quatro
números inteiros, calcule e mostre a soma desses números.*/

/*var soma = 0;
var numero = 0;

numero = parseFloat(prompt("Insira o primeiro número inteiro."));
soma += numero;

numero = parseFloat(prompt("Insira o segundo número inteiro."));
soma += numero;

numero = parseFloat(prompt("Insira o terceiro número inteiro."));
soma += numero;

numero = parseFloat(prompt("Insira o quarto número inteiro."));
soma += numero;

if (soma%1 != 0) {
	console.log("Você digitou algum número não inteiro.");
} else {
	console.log("O resultado é: "+soma);
}*/



/*2)  Faça um programa que receba três notas,
calcule e mostre a média aritmética entre elas.*/

/*var media = 0;
var numero = 0;

numero = parseFloat(prompt("Insira a primeira nota."));
media += numero;

numero = parseFloat(prompt("Insira a segunda nota."));
media += numero;

numero = parseFloat(prompt("Insira a terceira nota."));
media += numero;

console.log("A média aritmética das notas é: "+(media/3)).toFixed(1);*/



/*3) Faça um programa que receba três notas e
seus respectivos pesos, calcule e mostre a média ponderada 
dessas notas*/

/*var mediaPond = 0;
var numero = 0;

numero = parseFloat(prompt("Insira a primeira nota."));
var peso1 = parseFloat(prompt("Insira o peso da primeira nota."));
mediaPond += numero*peso1;

numero = parseFloat(prompt("Insira a segunda nota."));
var peso2 = parseFloat(prompt("Insira o peso da segunda nota."));
mediaPond += numero*peso2;

numero = parseFloat(prompt("Insira a terceira nota."));
var peso3 = parseFloat(prompt("Insira o peso da terceira nota."));
mediaPond += numero*peso3;

console.log("A média aritmética ponderada das notas é: "+(mediaPond/(peso1+peso2+peso3)).toFixed(1));
*/



/*4) Faça um programa que receba o salário de
um funcionário, calcule e mostre o novo salário, sabendo-se que este sofreu um
aumento de 25%.*/

/*var salario = parseFloat(prompt("Insira o valor do salário."));

salario += salario*0.25;

console.log("O valor atualizado do salário é de: "+salario.toFixed(2));*/



/*5) Faça um programa que receba o salário de
um funcionário e o percentual de aumento, calcule e mostre o valor do aumento e o
novo salário.*/

/*var salario = parseFloat(prompt("Insira o valor do salário."));
var aumento = parseFloat(prompt("Insira o percentual de aumento."));

salario += salario*(aumento/100);

console.log("O valor atualizado do salário é de: "+salario.toFixed(2));*/



/*6) Faça um programa que receba o saláriobase de um funcionário, calcule e mostre o salário a receber, sabendo-se que esse
funcionário tem gratificação de 5% sobre o salário-base e paga imposto de 7% sobre o
salário-base.*/

/*var salario = parseFloat(prompt("Insira o valor do salário."));

var sal_liq = salario + salario*0.05 -salario*0.07;

console.log("O valor atualizado do salário é de: "+sal_liq.toFixed(2));*/



/*7) Faça um programa que receba o saláriobase de um funcionário, calcule e mostre o seu salário a receber, sabendo-se que esse
funcionário teve gratificação de R$ 600,00 e paga imposto de 10% sobre o salário base.*/

/*var salario = parseFloat(prompt("Insira o valor do salário."));

var sal_liq = salario+600 - salario*0.1;

console.log("O valor atualizado do salário é de: "+sal_liq.toFixed(2));*/



/*8) Faça um programa que receba o valor de
um depósito e o valor da taxa de juros, calcule e mostre o valor do rendimento e o
valor total depois do rendimento.*/

/*var deposito = parseFloat(prompt("Insira o valor do depósito."));
var taxa = parseFloat(prompt("Insira a taxa de juros."));

var rend = deposito*(taxa/100);
deposito += rend;

console.log("O valor do rendimento é de: "+rend.toFixed(2));
console.log("O valor total depois do rendimento é de: "+deposito.toFixed(2));*/



/*9) Faça um programa que calcule e mostre a
área de um triângulo. Sabe-se que: Área = (base * altura)/2.*/

/*var base = parseFloat(prompt("Insira o valor da base."));
var altura = parseFloat(prompt("Insira o valor da altura."));

console.log("A área do triângulo informado é de: "+((base*altura)/2).toFixed(1));*/



/*10) Faça um programa que calcule e mostre a
área de um círculo. Sabe-se que: Área = Pi * R², aonde Pi = 3,14.*/

/*var raio = parseFloat(prompt("Insira o valor da raio."));

console.log("A área do círculo informado é de: "+(3.14*raio*raio).toFixed(1));*/



/*11) Jeremias possui um cronômetro que consegue marcar o tempo apenas em segundos.
Sabendo disso, desenvolva um algoritmo que receba o tempo cronometrado, em
segundos, e diga quantas horas, minutos e segundos se passaram a partir do tempo
cronometrado.*/

/*var tempo = 0.5;

while (tempo%1 != 0) {
	tempo = parseFloat(prompt("Insira o tempo marcado no cronômetro. Somente valores inteiros."));
}

var h = Math.trunc(tempo/3600);
var min = Math.trunc((tempo%3600)/60);
var s = (tempo%3600)%60;

console.log("O valor detalhado do tempo marcado foi de: "+h+"h "+min+"min "+s+"s");*/



/*12) Desenvolva um algoritmo que emule um caixa eletrônico. O usuário deve inserir o
valor total a ser sacado da máquina e o algoritmo deve informar quantas notas de 100,
50, 20, 10, 5 ou 2 reais serão entregues. Deve-se escolher as notas para que o usuário
receba o menor número de notas possível.*/

/*var saque = 1;

while (saque == 1 || saque == 3 || saque%1 != 0) {
	saque = parseFloat(prompt("Insira um valor inteiro para saque. Não é permitido sacar os valores de 1,00 e 3,00 ou com casas de centavos, pois não dispomos de moedas."));
}

var n100 = 0;
var n50 = 0;
var n20 = 0;
var n10 = 0;
var n5 = 0;
var n2 = 0;

switch(saque) {

	case 6:
		n2 = 3;
	break;

	case 11:
		n5 = 1;
		n2 = 3;
	break;

	case 13:
		n5 = 1;
		n2 = 4;
	break;

	case 16:
		n10 = 1;
		n2 = 3;
	break;

	default:

		if (saque%10 == 1) {
			saque = saque-11;
			n5 = 1;
			n2 = 3;
		}

		if (saque%10 == 3) {
			saque = saque-13;
			n5 = 1;
			n2 = 4;
		}

		if (saque%10 == 6) {
			saque = saque-16;
			n10 = 1;
			n2 = 3;
		}

		if (saque >= 100) {
			n100 = Math.trunc(saque/100);
			saque = saque%100;
		} 

		if (saque >= 50) {
			n50 = Math.trunc(saque/50);
			saque = saque%50;
		} 

		if (saque >= 20) {
			n20 = Math.trunc(saque/20);
			saque = saque%20;
		} 

		if (saque >= 10) {
			n10 += Math.trunc(saque/10);
			saque = saque%10;
		} 

		if (saque >= 5) {
			n5 += Math.trunc(saque/5);
			saque = saque%5;
		} 

		if (saque >= 2) {
			n2 += Math.trunc(saque/2);
		} 
	break;
}

console.log("número de notas de 100,00: "+n100);
console.log("número de notas de 50,00: "+n50);
console.log("número de notas de 20,00: "+n20);
console.log("número de notas de 10,00: "+n10);
console.log("número de notas de 5,00: "+n5);
console.log("número de notas de 2,00: "+n2);*/



/*13) Faça um programa que receba um número
positivo e maior que zero, calcule e mostre:
a) o número digitado ao quadrado;
b) o número digitado ao cubo;
c) a raiz quadrada do número digitado;
d) a raiz cúbica do número digitado.*/

/*var numero = 0;

while (numero <= 0) {
	numero = parseFloat(prompt("Insira um número maior que zero."));
}

	console.log("O número digitado elevado ao quadrado é "+(numero**2).toFixed(2));
	console.log("O número digitado elevado ao cubo é "+(numero**3).toFixed(2));
	console.log("A raiz quadrada do número digitado é "+(numero**(1/2)).toFixed(2));
	console.log("A raiz cúbica do número digitado é "+(numero**(1/3)).toFixed(2));*/



/*14) Faça um programa que receba dois
números maiores que zero, calcule e mostre um elevado ao outro.*/

/*var n1 = parseFloat(prompt("Insira um número maior que zero."));
var n2 = parseFloat(prompt("Insira outro número maior que zero."));

if (n1 < 0 || n2 <0) {
	console.log("Um dos números que você digitou não é maior que zero.");
} else {
	console.log("O primeiro número digitado elevado ao segundo é "+(n1**n2).toFixed(1));
}*/



/*15) Sabe-se que:
1 pé = 12 polegadas;
1 jarda = 3 pés;
1 milha = 1760 jardas;
Faça um programa que receba uma medida em pés, faça as conversões a seguir e
mostre os resultados.
a) polegadas;
b) jardas;
c) milhas.*/

/*medida = parseFloat(prompt("Insira uma valor cuja unidade de medida será 'pé (ft)'."));

var inch = medida*12;
var yd = medida/3;
var mi = (medida/3)/1760;

console.log("O valor informado em polegadas é: "+inch.toFixed(2)+" in");
console.log("O valor informado em jardas é: "+yd.toFixed(2)+" yd");
console.log("O valor informado em milhas é: "+mi.toFixed(2)+" mi");*/



/*16) Faça um programa que receba o ano de
nascimento de uma pessoa e ano atual, calcule e mostre:
a) a idade dessa pessoa;
b) quantos anos essa pessoa terá em 2030;*/

/*var nasc = parseInt(prompt("Insira o seu ano de nascimento."));
var atual = parseInt(prompt("Insira o ano atual."));

var idade = atual-nasc;
var a2030 = 2030-nasc;

console.log("Caso já tenha feito aniversário este ano, a sua idade atual é "+idade+" anos.");
console.log("No ano de 2030 você completará "+a2030+" anos.");*/