var TentarJogarInferiorNaDireitaMesa = function() {}

TentarJogarDeitadaNaDireitaMesa.prototype.Tentar(pedra, valorDireita) {
  if (!pedra.valorInferior == valorDireita) throw new Exception("Jogada inválida");
  return new JogadaMesa(MoveType.RightSide, LadoPedra.Inferior);
}
