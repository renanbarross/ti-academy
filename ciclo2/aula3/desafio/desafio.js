window.onload = function() {

	const valor1 = document.querySelector("#v1");
	const valor2 = document.querySelector("#v2");
	const resultOp = document.querySelector("#soma");
	
	btn.addEventListener('click', ()=>{
		
		var cx1 = Number(valor1.value);
		var cx2 = Number(valor2.value);
		var rReal = cx1 + cx2;
		var rUser = Number(resultOp.value);
		
		if (rUser == rReal) {
			alert("Está certo!");
		} else {
			alert("Está errado.")
		}
	})
}