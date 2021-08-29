class NegociacaoController {
	constructor() {
		const $ = document.querySelector.bind(document);
		
		this.inputData = $("#data");
		this.inputQuantidade = $("#quantidade");
		this.inputValor = $("#valor");
	}
	


	adiciona(evento) {
		event.preventDefault();

		
		console.log(inputData.value);
		console.log(inputValor.value);
		console.log(inputQuantidade.value);
	}
}

const negociacaoController = new NegociacaoController();

document.querySelector("#formulario").onsubmit = negociacaoController.adiciona;