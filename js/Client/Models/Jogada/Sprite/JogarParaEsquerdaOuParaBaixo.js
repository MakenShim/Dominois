var JogarParaEsquerdaOuParaBaixo = function() {}

JogarParaEsquerdaOuParaBaixo.prototype.Jogar = function(jogarSpritePedra, ladoPedra, pedra, mesa) {
	try {
		debugger;
		return new TentarJogarParaEsquerda().Jogar(ladoPedra, pedra, mesa);
	} catch (ex) {
		console.log(ex);
		jogarSpritePedra.proximaJogada = new JogarParaBaixoOuParaDireita();
		return new VirarParaBaixo().Jogar(ladoPedra, pedra);
	}
}
