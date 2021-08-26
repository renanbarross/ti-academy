// objetos

function pessoa(nome, sobrenome, idade) {
	this.nome = nome;
	this.sobrenome = sobrenome;
	this.idade = idade;
}

var ps1 = new pessoa("Raphael", "da Silva", 7); //construtor
console.log("Pessoa 1 - Nome "+ps1.nome+" "+ps1.sobrenome+" idade: "+ps1.idade);

var ps2 = new pessoa("Maria");
console.log("Pessoa 2 - Nome "+ps2.nome+" "+ps2.sobrenome);


var objPessoa = { rg: '7767', cpf :'8989' };

// console.log(typeof(objPessoa));
console.log("RG:"+ objPessoa.rg);


function pessoa2(nome, sobrenome, idade) {
	this.nome = nome;
	this.sobrenome = sobrenome;
	this.idade = idade;
	this.doc = {
		rg: '777',
		cpf:'8989'
	}
}

var pessoa2 = new pessoa2("Raphael");
//console.log("Nome: "+pessoa2.nome+" "+pessoa2.doc.rg);

console.log(`Nome ${pessoa2.nome} RG: ${pessoa2.doc.rg}`);