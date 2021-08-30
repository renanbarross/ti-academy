/*var nome = "Marcelo";
console.log(nome.length);
console.log(nome[0]); // M*/

//match()

//var palavras = "Maçã doce";

//console.log(palavras.match(/D/gi));

//search()

//console.log(palavras.search(/d/gi));

//replace()

/*var str = "Lorem ipsum dolor sit amet consectetur adipisicing elit.";

var mudarStr = str.replace(/amet/gi, 'Xxxx');

console.log(mudarStr);*/

//localeCompare()

/*var comp1 = "Comparar";
var comp2 = "comparar";

var c1 = comp1.toLowerCase();
var c2 = comp2.toLowerCase();*/

// console.log(`Este é o c1: ${c1} Este é o c2: ${c2}`);

/*var comparacao = c1.localeCompare(c2);
console.log(comparacao);*/

//trim()

var p = ' fpalavra+ ';

var r = p.trim();
console.log(r);
var s = r.replace(/f/gi, '');
console.log(s);
var sub_a = s.replace('+', ''); //remover e substituir o sinal de +
console.log(`Removido: ${sub_a}`);

// toLocaleString
// formatação de moedas
var valor = 1.357 // 1,35;
var formatarMoeda = valor.toLocaleString('pt-BR', {
	style: 'currency',
	currency: 'BRL'
})

console.log(formatarMoeda);
