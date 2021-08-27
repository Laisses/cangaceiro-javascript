class NegociacaoController {

	adiciona(evento) {
		event.preventDefault();
		alert("chamei ação no controller")
	}
}

const negociacaoController = new NegociacaoController();

document.querySelector("#formulario").onsubmit = negociacaoController.adiciona;