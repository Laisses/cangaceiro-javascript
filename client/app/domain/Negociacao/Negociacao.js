class Negociacao {
	constructor(data, quantidade, valor) {
		this.__data = data;
		this.__quantidade = quantidade;
		this.__valor = valor;
	}

	obtemVolume() {
		return this.__quantidade * this.__valor
	}
}