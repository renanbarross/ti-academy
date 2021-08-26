
var n = 50;

var nome = prompt("Digite seu nome:");

var numero = prompt(nome + ", digite um número para comparar com 'n':");

if(parseInt(numero) % 1 === 0) {
    console.log("É inteiro");
} else {
    console.log("É float");
}

alert("Uma string foi enviada.");

alert("A string será convertida para número.");

document.write("1. Seja bem vindo(a)..: " + nome + "<br>");

document.write("2. Você digitou o número..: (" + numero + ")<br>");

var comp = (parseInt(numero) === n);

document.write("3. O retorno da comparação booleana é..: " + comp + "<br>");

var soma = (parseInt(numero) + n);

document.write("4. A soma dos valores é..: " + soma + "<br>");

var sub = (parseInt(numero) - n);

document.write("5. A subtração dos valores é..: " + sub + "<br>");

var rest = (parseInt(numero) % n);

document.write("6. O resto da divisão é de..: " + rest + "<br>");

var quad = (parseInt(numero) * parseInt(numero));

document.write("7. O quadrado do número digitado é..: " + quad);

var fruta = prompt("Escolha uma das três frutas: laranja, uva ou pera.");

if (fruta == "laranja" || fruta == "uva" || fruta == "pera") {
} else {
	alert(nome+", a fruta informada não está na lista.");
}