var VirarParaCimaEmPedraZeroValorSuperior = function() {}

VirarParaCimaEmPedraZeroValorSuperior.prototype.Jogar = function(pedra) {
	console.log(this);
	return new JogadaSprite
	(
		pedra.sprite.phaserSprite.position.x,
		pedra.sprite.phaserSprite.position.y,
		RotacaoSprite.NaoRotacionar
	);
}