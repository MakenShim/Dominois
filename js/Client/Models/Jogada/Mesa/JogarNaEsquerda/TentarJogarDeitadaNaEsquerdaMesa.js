var TentarJogarDeitadaNaEsquerdaMesa = function() {}

TentarJogarDeitadaNaEsquerdaMesa.prototype.Tentar(pedra, valorEsquerda) {
  if (!(pedra.valorSuperior == pedra.valorInferior && pedra.valorSuperior == valorEsquerda)) throw new Exception("Jogada inv�lida");
  return new JogadaMesa(MoveType.LeftSide, LadoPedra.Deitada);
}
