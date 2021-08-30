window.onload=function(){

	const pai = document.querySelectorAll("#pai");

	pai.forEach((pegarFilhas)=>{

		pegarFilhas.addEventListener('click', (filha)=>{

			alert(filha.target.textContent);
		})

	})
	
	const btn = document.querySelector("#btn");
	const outroPai = document.querySelector("#outroPai");
	var i=0;
	btn.addEventListener('click', ()=>{

		let lista = ["Banana", "Uva", "Pera", "Manga"];

		li = document.createElement("li");

		outroPai.appendChild(li).textContent = lista[i];
		li.setAttribute("class", "itemDaLista")

		i++;

	});

	const paiDalista = document.querySelectorAll("#outroPai");

	paiDalista.forEach(listaDeFilhas=>{
		listaDeFilhas.addEventListener('click', (filhas)=>{
			alert(filhas.target.textContent);
		})
	})

}