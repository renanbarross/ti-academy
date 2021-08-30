/*1) Desenvolva um algoritmo que some todos os números inteiros compreendidos entre 1
e 10 (inclusive).*/

/*var soma = 0;
var numero = 0;

while (numero <= 10) {
	soma += numero;
	numero++;
}
 console.log("A soma é "+soma+".");*/



/*2) Desenvolva um algoritmo que receba dois números inteiros positivos A e B. Exiba na
tela todos os números inteiros compreendidos entre A e B, excluindo os próprios A e
B. Suponha que o usuário respeite o enunciado e insira valores válidos para A e B.*/

/*var a = parseInt(prompt("Insira um número inteiro positivo."));
var b = parseInt(prompt("Insira mais um número inteiro positivo."));
var soma = 0;

if (a < b) {

	var aN = a + 1;
	while (aN < b) {
		soma += aN;
		aN++;
	}

	console.log("A soma é "+soma+".");

} else if (b < a) {

	var bN = b + 1;
	while (bN < a) {
	soma += bN;
	bN++;
	}

	console.log("A soma é "+soma+".");

} else if (a == b) {

	console.log("A soma é 0.");
	
}*/



/*3) Desenvolva um algoritmo que receba um número N e calcule o fatorial de N, sabendo
que N! = N * (N-1) * (N-2) * ... * 3 * 2 * 1.*/

/*var n = 0;
var produto = 1;

while(n <= 0 || n%1 != 0) {
	n = parseFloat(prompt("Insira um número inteiro positivo."));
}

while (n >= 1) {
		produto *= n;
		n--;
	}

console.log("O fatorial do número informado é "+produto+".");*/



/*4) Desenvolva um algoritmo que receba um número N e imprima a tabuada de N, na tela.*/

/*var n = 0;
var i = 1;
var produto = 0;

while(n <= 0 || n%1 != 0) {
	n = parseFloat(prompt("Insira um número inteiro positivo."));
}

while (produto < (n*10)) {
		produto = n * i;
		console.log(n+" x "+i+" = "+produto);
		i++;
	}*/



/*5) Charlinho tem 11 anos, mede 1,40 metros de altura e cresce em média 2,1
centímetros ao ano. Seu irmão, Bossa, aos 14 anos, tem 1,45 metros de altura e cresce
em média 1,1 centímetro por ano. Elabore um programa que conte quantos anos
serão necessários para que a altura de Charlinho ultrapasse a de Bossa.*/

/*var alturaCh = 1.4;
var crescCh = 0.021;
var alturaBo = 1.45;
var crescBo = 0.011;
var anosPassados = 0;

while (alturaBo >= alturaCh) {
	alturaCh += crescCh;
	alturaBo += crescBo;
	anosPassados++;
}

console.log("Charlinho, idade "+(11+anosPassados)+", altura "+alturaCh.toFixed(2)+".");
console.log("Bossa, idade "+(14+anosPassados)+", altura "+alturaBo.toFixed(2)+".");
console.log("Serão necessários "+anosPassados+" anos para que a altura de Charlinho ultrapasse a de Bossa.");*/



/*6) Um funcionário de uma empresa recebe
aumento salarial anualmente. Sabe-se que:
a) esse funcionário foi contratado em 2015, com salário inicial de R$ 1.000,00;
b) em 2016 recebeu aumento de 1,5% sobre seu salário inicial;
c) a partir de 2017 (inclusive), os aumentos salariais sempre corresponderam ao dobro
da porcentagem do ano anterior.
Faça um programa que receba o ano atual determine o salário atual desse funcionário.*/

/*var salario = 1000;
var aumento = 1.5;
var anoInicial = 2016;
var anoAtual = parseInt(prompt("Insira o ano atual."));

while (anoInicial <= anoAtual) {
	salario+= salario*(aumento/100);
	aumento = aumento*2;
	anoInicial++;
}

console.log("No ano de "+anoAtual+" o salário do funcionário será de "+salario.toFixed(2)+".");*/



/*7) Desenvolva um algoritmo que peça para o usuário inserir vários números inteiros. O
algoritmo deverá contabilizar a quantidade de números positivos informados. Caso o
usuário digite 0, o algoritmo deve mostrar quantidade contabilizada e encerrar.*/


/*var quantPositivos = 0;
var soma = 0;
var numero = parseFloat(prompt("Insira um número inteiro positivo ou negativo, para encerrar digite 0.")); 

while (numero != 0) {
	if (numero > 0) {
		quantPositivos++;
	}
	soma+= numero;
	numero = parseFloat(prompt("Insira um número inteiro positivo ou negativo, para encerrar digite 0.")); 
}

if (soma%1 != 0) {
	console.log("Você inseriu algum número decimal.");
} else {
	console.log("Foram inseridos "+quantPositivos+" números positivos.");
}*/



/*8) Desenvolva um algoritmo que peça para o usuário informar dois números. Após isso, o
algoritmo deve mostrar cálculo o primeiro número elevado ao segundo. Ao final, o
algoritmo deve perguntar se o usuário deseja repetir a operação. Caso o usuário insira
o caractere "s", o algoritmo solicita novamente dois números e mostra novamente a
potência do primeiro pelo segundo. Caso contrário, o algoritmo é encerrado.*/

/*var n1 = 0;
var n2 = 0;
var resp = "s"

while (resp == 's') {
	n1 = parseFloat(prompt("Insira um número qualquer."));
	n2 = parseFloat(prompt("Insira mais um número."));
	resp = prompt("O resultado de "+n1+" elevado a "+n2+" é "+n1**n2+". Para repetir o cálculo com outros números digite a letra 's', caso contrário digite 'n'");
}

console.log("Fim dos cálculos.");*/



/*9) Desenvolva um algoritmo que peça ao usuário que insira dois números inteiros
positivos A e B, no qual A deve ser menor que B (supõe-se que o usuário irá respeitar
esse enunciado). O algoritmo deve mostrar, na tela, todos os números ímpares
compreendidos entre A e B (inclusive).*/

/*var a = parseInt(prompt("Insira um número inteiro positivo."));
var b = parseInt(prompt("Insira mais um número inteiro positivo maior que o anterior."));

while(a <= b) {
	if (a%2 != 0) {
		console.log(a);
	}
		a++;
}*/



/*10) Faça um programa que leia dez conjuntos
de dois valores, o primeiro representando o número do aluno e o segundo
representando sua altura em centímetros. Encontre o aluno mais alto e o mais baixo.
Mostre o número do aluno mais alto e o número do mais baixo, junto com suas
alturas.*/

/*var numero = parseInt(prompt("Insira o número do aluno."));
var altura = parseInt(prompt("Insira a altura do aluno em centímetros."));

var maior = altura;
var maiorNum = numero;
var menor = altura;
var menorNum = numero;

var conj = 1;

while (conj <= 9) {
	numero = parseInt(prompt("Insira o número do aluno."));
	altura = parseInt(prompt("Insira a altura do aluno em centímetros."));

	if (altura > maior) {
		maior = altura;
		maiorNum = numero;
	}

	if (altura < menor) {
		menor = altura;
		menorNum = numero;
	}

	conj++;
}

console.log("Mais alto: aluno "+maiorNum+" com "+maior+" cm.");
console.log("Mais baixo: aluno "+menorNum+" com "+menor+" cm.");*/



/*11) Faça um programa que mostre os oito
primeiros termos da sequência de Fibonacci.
0-1-1-2-3-5-8-13-21-34-55-...*/

/*var seq = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55];
var posicao = 0;
var seqN = [];

while (posicao <= 7) {
	seqN.push(seq[posicao]);
	posicao++;
}

console.log("Estes são os 8 primeiros números da sequência Fibonacci: "+seqN+".");*/



/*12) Desenvolva um algoritmo que receba um
número N e informe se N é um número primo, ou não. A saber: um número primo é
um inteiro positivo que só pode ser dividido por ele mesmo e por um, apenas.*/

/*var numero = 0;
var p = 1;
var qtdDiv = 0;

while (numero%1 != 0 || numero <= 0) {
	numero = parseFloat(prompt("Insira um número inteiro positivo."));
}

while (p <= numero) {
	if (numero%p == 0) {
		qtdDiv++;
	}
	p++;
}

if (qtdDiv > 2) {
	console.log("O número inserido não é primo.");
} else {
	console.log("O número inserido é primo.");
}*/



/*13) Desenvolva um algoritmo que mostre a tabuada de todos os números inteiros
compreendidos entre 1 e 10 (inclusive).*/

/*var n = 1;
var i = 1;
var produto = 0;

while (n <= 10) {
	console.log("Tabuada do "+n+":");
	while (produto < (n*10)) {
		produto = n * i;
		console.log(n+" x "+i+" = "+produto);
		i++;
	}
	n++;
	i = 1;
	produto = 0;
}*/



/*14) Faça um programa que leia um número N e
que indique quantos valores inteiros e positivos devem ser lidos a seguir. Para cada
número lido, mostre o fatorial desse valor.*/

/*var leituras = 0;
var calFat = 1;
var n = 0;
var produto = 1;

while (leituras <= 0 || leituras%1 != 0) {
	leituras = parseFloat(prompt("Indique quantos valores serão inseridos a seguir (informe um valor inteiro e positivo)."));
}

while (calFat <= leituras) {
	n = parseFloat(prompt("Insira um inteiro e positivo."));
	if (n <= 0 || n%1 != 0) {
		console.log("Número decimal ou negativo ignorado.");
	} else {
		var desc = n;
		while (n >= 1) {
			produto *= n;
			n--;
		}
		console.log("O fatorial de "+desc+" é "+produto+".");
	}
	calFat++;
	produto = 1;
}*/



/*15) Faça um programa que leia um valor N
inteiro e positivo, calcule e mostre o valor de E, conforme a fórmula a seguir:
E = 1 + 1/1! + 1/2! + 1/3! + ... + 1/N!*/

/*var e = 1;
var n = 0;
var produto = 1;

while(n <= 0 || n%1 != 0) {
	n = parseFloat(prompt("Insira um número inteiro positivo."));
}

var desc = n;

while (n >= 1) {
	var x = n;
	while (n >= 1) {
		produto *= n;
		n--;
	}
	e += 1/produto;
	produto = 1;
	n = x - 1;
}

console.log("O valor de E, considerando n = "+desc+", é "+e.toFixed(2)+".");*/



/*16) Desenvolva um algoritmo que peça ao
usuário que insira cinco conjuntos de dois números inteiros positivos (A, B), no qual A
deve ser menor que B (supõe-se que o usuário irá respeitar esse enunciado). Para cada
dupla (A, B), informada pelo usuário, o algoritmo deve mostrar, na tela, todos os
números pares compreendidos entre A e B (inclusive).*/

/*var a = 0;
var b = 0;
var conj = 1;

while (conj <= 5) {
	a = parseInt(prompt("Insira um número inteiro positivo."));
	b = parseInt(prompt("Insira mais um número inteiro positivo maior que o anterior."));
	console.log("Números pares de "+a+" a "+b+":");
	while (a <= b) {
		if (a%2 == 0)
		console.log(a);
		a++;
	}
	conj++;
}*/