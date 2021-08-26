
/*
	var / let const
*/
/*
var nome = "marcelo"; // var global
let sobrenome = "weihmayr"

if(true) {
	console.log("Var nome = "+ nome);
	var nm = nome;
	console.log("Chamando o sobrenome "+sobrenome);
	let sn = "Da Silva"
	console.log(sobrenome);
}

console.log("Meu nome é "+nm+" "+sobrenome+" "+sn);
console.log("Var nome = "+ nm);
*/

var pessoa = {
	nome: "Marcelo",
	rua: "Rua Lá",
	ncasa: "777",
	dados: function(){
		document.write(
				"Nome...:"+this.nome+"<br>"+
				"Rua...:"+this.rua+"<br>"+
				"N. casa...:"+this.ncasa+"<br>")
	}
}

pessoa.dados();

/*
console.log("Nome "+pessoa.nome+
		   " Endereço "+pessoa.rua+" N. "+pessoa.ncasa);
*/