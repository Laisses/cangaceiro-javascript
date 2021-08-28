class NegociacaoController {

	adiciona(evento) {
		event.preventDefault();

		const $ = document.querySelector.bind(document);
		
		const inputData = $("#data");
		const inputQuantidade = $("#quantidade");
		const inputValor = $("#valor");

		console.log(inputData.value);
		console.log(inputValor.value);
		console.log(inputQuantidade.value);
	}
}

const negociacaoController = new NegociacaoController();

document.querySelector("#formulario").onsubmit = negociacaoController.adiciona;