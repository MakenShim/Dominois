var Jogada = function(jogada) {
    this.pedra = jogada.pedra;
    this.mesa = jogada.mesa;
    this.moveType = jogada.moveType;
    
    this.valorEsquerdaMesa = jogada.valorEsquerdaMesa;
    this.valorDireitaMesa = jogada.valorDireitaMesa;
    this.rotacaoSprite = jogada.rotacaoSprite;
	this.posicao = jogada.posicao;
	
	this.jogadaAnterior = jogada.jogadaAnterior;
    
    this.MetodoMesa = jogada.MetodoMesa;
    this.MetodoSpriteMesa = jogada.MetodoSpriteMesa;
}

Jogada.prototype.EfetuarJogada = function() {
	this.MetodoSpriteMesa(this);
    this.MetodoMesa(this);
}