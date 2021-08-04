class Negociacao {
	constructor(data, quantidade, valor) {
		this.__data = data;
		this.__quantidade = quantidade;
		this.__valor = valor;
	}

	getData() {
		return this.__data;
	}

	getQuantidade() {
		return this.__quantidade;
	}

	getValor() {
		return this.__valor;
	}

	getVolume() {
		return this.__quantidade * this.__valor;
	}
}