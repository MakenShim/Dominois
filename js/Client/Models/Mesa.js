// Require SpriteMesa
// Require Jogada
// Require MontarJogada/*

var Mesa = function() {
    this.sprite = new SpriteMesa();
    
    this.pedrasJogadas = [];
    this.valorEsquerda;
    this.valorDireita;
}

Mesa.prototype.VerificarMovimentosPossiveisParaPedra = function(pedra) {
    
    var movimentosPossiveis = [];
 
    if (this.pedrasJogadas.length == 0) {
        movimentosPossiveis.push(MoveType.FirstDomino);
        return movimentosPossiveis;
    }
    
    if ((pedra.valorSuperior == this.valorEsquerda) ||
        (pedra.valorInferior == this.valorEsquerda)) {
            movimentosPossiveis.push(MoveType.LeftSide);
    }
    
    if ((pedra.valorSuperior == this.valorDireita) ||
        (pedra.valorInferior == this.valorDireita)) {
            movimentosPossiveis.push(MoveType.RightSide);
    }

    return movimentosPossiveis;
}

Mesa.prototype.JogarPedra = function(pedra, moveType) {
    debugger;

    // variável temporária apenas para testar a animação.
    var posini = { x: pedra.sprite.phaserSprite.x, y: pedra.sprite.phaserSprite.y };

    var jogadaMesa;
	
	switch (moveType) {
		case MoveType.FirstDomino:
			jogadaMesa;
			this.valorPonta.esquerda = pedra.valorSuperior;
			this.valorPonta.direita = pedra.valorInferior;
			this.pedras.esquerda(pedra);
			this.pedras.direita(pedra);
			break;
		case MoveType.LeftSide:
			jogadaMesa = new TentarJogarNaEsquerdaMesa().Jogar();
			this.valorPonta.esquerda = jogadaMesa.valorPonta;
			this.pedras.esquerda(pedra);
			break;
		case MoveType.RightSide:
			jogadaMesa = new TentarJogarNaDeireitaMesa().Jogar();
			this.valorPonta.direita = jogadaMesa.valorPonta;
			this.pedras.direita(pedra);
			break;
	}

    this.sprite.Jogar(moveType, jogadaMesa.ladoPedra, jogadaMesa.pedraAnterior, this);

//estou chamando depois do EfetuarJogada pois, assim, o sprite fica com a posição final e passo a posição inicial guardado na variável posini
    jogada.AniMove(pedra,posini,null,1);
}