/*1) Faça um programa que receba dois números
e mostre o maior deles. Caso eles sejam iguais, deve-se mostrar a mensagem "Os
números são iguais".*/

/*var n1 = parseFloat(prompt("Insira um número qualquer."));
var n2 = parseFloat(prompt("Insira mais um número."));

if (n1 > n2) {
	console.log(n1+" é o maior número.");
} else if (n2 > n1) {
	console.log(n2+" é o maior número.");
} else {
	console.log("Os números são iguais.")
}*/



/*2) Desenvolva um algoritmo que receba três números. O algoritmo deve imprimir
"Condição satisfeita", na tela, caso o primeiro dado inserido seja maior do que os outros
dois (o primeiro não pode ser igual a nenhum). Caso contrário, deve ser impressa a
mensagem: "Erro".*/

/*var n1 = parseFloat(prompt("Insira um número qualquer."));
var n2 = parseFloat(prompt("Insira outro número diferente do primeiro."));
var n3 = parseFloat(prompt("Insira mais um número diferente do primeiro."));

if (n1 == n2) {
	console.log("Você inseriu o segundo número igual ao primeiro.");
} else if (n1 == n3) {
	console.log("Você inseriu o terceiro número igual ao primeiro.");
} else {
	if (n1 > n2 && n1 > n3) {
		console.log("Condição satisfeita.");
	} else {
		console.log("Erro.")
	}
}*/



/*3) Faça um programa que receba um número
inteiro e verifique se esse número é par ou ímpar*/

/*var numero = parseFloat(prompt("Insira um número qualquer."));

if (numero%2 == 0) {
	console.log("O número é par.");
} else {
	console.log("O número é ímpar.");
}*/



/*4) Desenvolva um algoritmo que receba dois números, calcule e mostre a multiplicação
entre eles, se ambos forem iguais. Caso o primeiro seja maior que o segundo, mostre a
subtração do primeiro pelo segundo. Caso contrário, mostre a soma entre os dois.*/

/*var n1 = parseFloat(prompt("Insira um número qualquer."));
var n2 = parseFloat(prompt("Insira mais um número."));

if (n1 == n2) {
	console.log("A multiplicação dos números é "+(n1*n2)+".");
} else if (n1 > n2) {
	console.log("A subtração do primeiro número pelo segundo é "+(n1-n2)+".");
} else {
	console.log("A soma dos números é "+(n1+n2)+".");
}*/



/*5) Desenvolva um algoritmo que simule uma calculadora. Você deve dar a opção de o
usuário escolher entre: 1 - Somar; 2 - Subtrair; 3 - Multiplicar; 4 - Dividir. O usuário só
conseguirá processar dois números inteiros por vez.*/

/*var n1 = parseFloat(prompt("Insira um número qualquer."));
var n2 = parseFloat(prompt("Insira mais um número."));
var op = parseFloat(prompt("Insira a operação desejada, sendo 1 para somar, 2 para subtrair, 3 para multiplicar e 4 para dividir."));

if (op != 1 && op != 2 && op != 3 && op != 4) {
	console.log("Você inseriu um número de operação não válido.");
} else {
	switch(op) {

	case 1:
		console.log("A soma dos números é "+(n1+n2)+".");
	break;

	case 2:
		console.log("A subtração do primeiro número pelo segundo é "+(n1-n2)+".");
	break;

	case 3:
		console.log("A multiplicação dos números é "+(n1*n2)+".");
	break;

	case 4:
		console.log("A divisão do primeiro número pelo segundo é "+(n1/n2)+".");
	break;
	}
}*/



/*6) Desenvolva um algoritmo que peça para que o usuário informe a base e a altura de um
retângulo, e um terceiro número inteiro "op". Caso o usuário escolha "op" igual a 0,
calcule e mostre o perímetro do retângulo. Caso o usuário insira um valor 1 para "op",
calcule e mostre a área do retângulo. Se o usuário inserir um valor diferente de 0 e 1
para "op", mostrar a mensagem "Opção inválida.".*/

/*var n1 = parseFloat(prompt("Insira a medida da base do retângulo."));
var n2 = parseFloat(prompt("Insira a medida da altura do retângulo."));
var op = parseFloat(prompt("Insira o cálculo desejado, sendo 0 para calcular o perímetro e 1 para calcular a área do retângulo."));

if (op != 0 && op != 1) {
	console.log("Você inseriu um número de cálculo não válido.");
} else {
	switch(op) {

	case 0:
		console.log("O perímetro do retângulo informado é "+(n1+n1+n2+n2)+".");
	break;

	case 1:
		console.log("A área do retângulo informado é "+(n1*n2)+".");
	break;
	}
}*/



/*7) A nota final de um estudante é calculada a
partir de três notas atribuídas respectivamente a um trabalho de laboratório, a uma
avaliação semestral e a um exame final. A média das três notas mencionadas
anteriormente obedece aos pesos a seguir:

Tabela 1 - ver no PDF

Faça um programa que receba as três notas, calcule e mostre a média ponderada e o
conceito que segue a tabela abaixo:

Tabela 2 - ver no PDF*/

/*var peso1 = 2;
var peso2 = 3;
var peso3 = 5;

var nt = parseFloat(prompt("Insira a nota do trabalho de laboratório (entre 0 e 10)."));
var na = parseFloat(prompt("Insira a nota da avaliação semestral (entre 0 e 10)."));
var ne = parseFloat(prompt("Insira a nota do exame final (entre 0 e 10)."));

if (nt < 0 || nt > 10 || na < 0 || na > 10 || ne < 0 || ne >10) {
	console.log("Você inseriu um ou mais valores não permitidos.");
} else {
	var mp = ((nt*peso1)+(na*peso2)+(ne*peso3))/(peso1+peso2+peso3);

		if (mp <= 10 && mp >= 8) {
			var conc = "A";
		} else if (mp < 8 && mp >= 7) {
			var conc = "B";
		} else if (mp < 7 && mp >= 6) {
			var conc = "C";
		} else if (mp < 6 && mp >= 5) {
			var conc = "D";
		} else if (mp < 5 && mp >= 0) {
			var conc = "E";
		}

		console.log("A média aritmética ponderada das notas é: "+mp.toFixed(1));
		console.log("O conceito alcançado foi "+conc+".");
}*/



/*8) Faça um programa que receba três notas de
um aluno, calcule e mostre a média aritmética e a mensagem que segue a tabela abaixo.
Para alunos de exame, calcule e mostre a nota que deverá ser tirada no exame para
aprovação, considerando que a média no exame é 6,0.

Tabela 1 - ver no PDF*/

/*var n1 = parseFloat(prompt("Insira a primeira nota (entre 0 e 10)."));
var n2 = parseFloat(prompt("Insira a segunda nota (entre 0 e 10)."));
var n3 = parseFloat(prompt("Insira a terceira nota (entre 0 e 10)."));

if (n1 < 0 || n1 > 10 || n2 < 0 || n2 > 10 || n3 < 0 || n3 > 10) {
	console.log("Você inseriu um ou mais valores não permitidos.");
} else {
	var med = (n1+n2+n3)/3;

	if (med <= 10 && med >= 7) {
		var mens = "Aprovado";
	} else if (med < 7 && med >= 3) {
		var mens = "Exame";
	} else if (med < 3 && med >= 0) {
			var mens = "Reprovado";
	}

	console.log("A média aritmética das notas é: "+med.toFixed(1));
	console.log("A situação do aluno é: "+mens+".");

	if (mens == "Exame") {
		console.log("É preciso tirar: "+(12-med).toFixed(1)+".");
	}
}*/



/*9) Faça um programa que receba três números
distintos e mostre-os em ordem crescente.*/

/*var n1 = parseFloat(prompt("Insira um número qualquer."));
var n2 = parseFloat(prompt("Insira outro número diferente do primeiro."));
var n3 = parseFloat(prompt("Insira mais um número diferente dos outros dois."));

if (n1 == n2 || n2 == n3 || n1 == n3) {
	console.log("Você inseriu um ou mais números iguais.");
} else {
	if (n1 < n2 && n2 < n3) {
		var pri = n1;
		var seg = n2;
		var ter = n3;
	} else if (n1 < n3 && n3 < n2) {
		var pri = n1;
		var seg = n3;
		var ter = n2;
	} else if (n2 < n1 && n1 < n3) {
		var pri = n2;
		var seg = n1;
		var ter = n3;
	} else if (n2 < n3 && n3 < n1){
		var pri = n2;
		var seg = n3;
		var ter = n1;
	} else if (n3 < n1 && n1 < n2) {
		var pri = n3;
		var seg = n1;
		var ter = n2;
	} else if (n3 < n2 && n2 < n1) {
		var pri = n3;
		var seg = n2;
		var ter = n1;
	}

	console.log("Números em ordem crescente: "+pri+", "+seg+", "+ter+".");
}*/



/*10) Faça um programa que receba três números
obrigatoriamente em ordem crescente e um quarto número que não siga esta regra.
Mostre, em seguida, os quatro números em ordem não-crescente.*/

/*var n1 = parseFloat(prompt("Insira um número qualquer."));
var n2 = parseFloat(prompt("Insira um número maior que o primeiro."));
var n3 = parseFloat(prompt("Insira um número maior que o segundo."));
var n4 = parseFloat(prompt("Agora insira qualquer número que seja menor que "+n3+", mas diferente de "+n1+" e de "+n2+"."));

if (n1 < n2 && n2 < n3 && n4 < n3 && n4 != n1 && n4 != n2) {
	
	if (n4 < n1) {
		var pri = n4;
		var seg = n1;
		var ter = n2;
		var qua = n3;
	} else if (n4 > n1 && n4 < n2) {
		var pri = n1;
		var seg = n4;
		var ter = n2;
		var qua = n3;
	} else if (n4 > n2 && n4 < n3) {
		var pri = n1;
		var seg = n2;
		var ter = n4;
		var qua = n3;
	}
	
	console.log("Números em ordem decrescente: "+qua+", "+ter+", "+seg+", "+pri+".");

} else {
	console.log("Você inseriu um ou mais números fora das regras estabelecidas.");
}*/



/*11) Desenvolva um algoritmo que peça ao usuário que informe os coeficientes a, b e c de
uma equação de segundo grau: ax² + bx + c. Com base na Fórmula de Bhaskara, calcule
e mostre as raízes da respectiva equação de segundo grau.*/

/*var a = parseFloat(prompt("Insira o coeficiente 'a' para a equação ax² + bx + c."));
var b = parseFloat(prompt("Insira o coeficiente 'b' para a equação ax² + bx + c."));
var c = parseFloat(prompt("Insira o coeficiente 'c' para a equação ax² + bx + c."));

if ((b**2-4*a*c) < 0) {
	console.log("Os coeficientes apresentados não permitem encontrar raízes no campo dos números reais.");
} else {
	var x1 = (-b+((b**2-4*a*c)**(1/2)))/(2*a);
	var x2 = (-b-((b**2-4*a*c)**(1/2)))/(2*a);

	if (x1 == x2) {
		console.log("A equação possui uma única raiz e seu valor é "+x1+".");
	} else {
		console.log("As raízes da equação informada são "+x1+" e "+x2+".");
	}
}*/



/*12) Faça um programa que receba quatro
valores, I, A, B e C. I é um valor inteiro e positivo e A, B e C são valores reais e distintos.
Escreva os números A, B e C obedecendo à tabela a seguir. Supor que o valor digitado
para I seja sempre um valor válido, ou seja, 1, 2 ou 3.

Tabela 1 - ver no PDF*/

/*var i = parseFloat(prompt("Escolha entre os números 1, 2 ou 3."));
var a = parseFloat(prompt("Insira um número qualquer."));
var b = parseFloat(prompt("Insira um número diferente do anterior."));
var c = parseFloat(prompt("Insira mais um número diferente dos dois últimos."));

if (a != b && b != c && a != c) {
	
	if (a < b && b < c) {
		var pri = a;
		var seg = b;
		var ter = c;
	} else if (a < c && c < b) {
		var pri = a;
		var seg = c;
		var ter = b;
	} else if (b < a && a < c) {
		var pri = b;
		var seg = a;
		var ter = c;
	} else if (b < c && c < a){
		var pri = b;
		var seg = c;
		var ter = a;
	} else if (c < a && a < b) {
		var pri = c;
		var seg = a;
		var ter = b;
	} else if (c < b && b < a) {
		var pri = c;
		var seg = b;
		var ter = a;
	}

	switch(i) {
	case 1:
		console.log("Números em ordem crescente: "+pri+", "+seg+", "+ter+".");
	break;
	case 2:
		console.log("Números em ordem decrescente: "+ter+", "+seg+", "+pri+".");
	break;
	case 3:
		console.log("O maior número foi disposto entre os dois outros: "+pri+", "+ter+", "+seg+".");
	break;
	}

} else {
	console.log("Você inseriu um ou mais números fora das regras estabelecidas.");
}*/



/*13) Faça um programa que mostre o menu de
opções a seguir, receba a opção do usuário e dos dados necessários para executar cada
operação. Suponha que o usuário não irá inserir valores inválidos.
Menu de opções:
1. Somar dois números
2. Raiz quadrada de um número
Digite a opção desejada*/

/*var op = parseFloat(prompt("Escolha entre um operação, sendo 1 para somar dois números e 2 para encontrar a raiz quadrada de um número."));

switch(op) {
	case 1:
		var n1 = parseFloat(prompt("Insira o primeiro número da soma."));
		var n2 = parseFloat(prompt("Insira o segundo número da soma."));
		console.log("A soma dos números informados é "+(n1+n2)+".");
	break;

	case 2:
		var n = parseFloat(prompt("Insira o número cuja raiz deve ser encontrada."));
		console.log("A raiz quadrada do número informado é "+(n**(1/2))+".");
	break;
}*/



/*14) Faça um programa que receba a hora de
início de um jogo e a hora final do jogo (cada hora é composta por duas variáveis inteiras:
hora e minuto). Calcule e mostre a duração do jogo (horas e minutos) sabendo-se que o
tempo máximo de duração do jogo é de 24 horas e que o jogo pode iniciar em um dia e
terminar no dia seguinte. Observação: utilizar o formato de hora que vai das 00hr00min
até as 23hr29min.*/

/*var hIn = parseFloat(prompt("Insira a hora inicial. Somente números inteiros."));
var mIn = parseFloat(prompt("Insira o minuto inicial. Somente números inteiros."));
var hFin = parseFloat(prompt("Insira a hora final. Somente números inteiros."));
var mFin = parseFloat(prompt("Insira o minuto final. Somente números inteiros."));

if (hIn%1 != 0 || mIn%1 != 0 || hFin%1 != 0 || mFin%1 != 0) {
	console.log("Você inseriu um ou mais números valores fora da regra estabelecida.");
} else {

	if (hIn > hFin && mIn == mFin) {
		var dH = 24 + hFin - hIn;
		var dM = mFin - mIn;

	} else if (hIn > hFin && mIn < mFin) {
		var dH = 24 + hFin - hIn;
		var dM = mFin - mIn;

	} else if (hIn > hFin && mIn > mFin) {
		var dH = 24 + hFin - hIn - 1;
		var dM = 60 + mFin - mIn;

	} else if (hIn < hFin && mIn == mFin) {
		var dH = hFin - hIn;
		var dM = mFin - mIn;

	} else if (hIn < hFin && mIn < mFin) {
		var dH = hFin - hIn;
		var dM = mFin - mIn;

	} else if (hIn < hFin && mIn > mFin) {
		var dH = hFin - hIn - 1;
		var dM = 60 + mFin - mIn;

	} else if (hIn == hFin && mIn == mFin) {
		var dH = 24;
		var dM = 0;

	} else if (hIn == hFin && mIn < mFin) {
		var dH = hFin - hIn;
		var dM = mFin - mIn;

	} else if (hIn == hFin && mIn > mFin) {
		var dH = 23;
		var dM = 60 + mFin - mIn;
	}
	
		console.log("A duração do jogo foi de "+dH+"h"+dM+"min.");
}*/



/*15) Faça um programa que receba o salário de
um funcionário, calcule e mostre o novo salário desse funcionário, acrescido de
bonificação e de auxílio-escola.

Tabela 1 - ver no PDF
Tabela 2 - ver no PDF*/

/*var salario = parseFloat(prompt("Insira o valor do salário."));
var bonif = 0;
var aux = 0;

if (salario <= 500) {
	bonif = salario*0.05;
} else if (salario > 500 && salario <= 1200) {
	bonif = salario*0.12;
} else {
	bonif = 0;
}

if (salario <= 600) {
	aux = 150;
} else {
	aux = 600;
}

console.log("O valor do salário mais benefícios é de "+(salario+bonif+aux).toFixed(2)+".");*/