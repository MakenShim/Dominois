var TentarJogarSuperiorNaEsquerdaMesa = function() {}

TentarJogarSuperiorNaEsquerdaMesa.prototype.Jogar(pedra, valorEsquerda) {
  if (pedra.valorSuperior != valorEsquerda) throw new Exception("Jogada inválida");
  return new JogadaMesa(MoveType.LeftSide, LadoPedra.Superior);
}
