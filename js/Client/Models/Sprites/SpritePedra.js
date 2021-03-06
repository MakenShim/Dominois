var SpritePedra = function(nome) {
    this.nome = nome;	
    this.altura = 130;
    this.largura = 68;
    this.phaserSprite;
    this.rotacaoSprite;
}

SpritePedra.prototype.CarregarSpritePhaser = function(posicao) {
   this.phaserSprite = game.add.sprite(posicao.x, posicao.y, this.nome);
}

//A pedra é obrigatória e pelo menos uma posição
// - se apenas a posição inicial for passada, significa q a pedra ja está com a posição final configurada;
// - se apenas a posição final for passada e a inicial for nula, a pedra está com a posição inicial configurada;
// - se as duas posições forem passadas, serão usadas ambas;
// - se nenhuma posição for passada, o método não executa nada;
//Há 4 tipos de movimentos (0-4) que são escolhidos através do parâmetro tipomove
SpritePedra.prototype.AnimarMovimento = function(posini, posfim, tipomove) {

    var stone = this.phaserSprite;
    var inicial;
    var final;         
    if(posini!=null && posfim!=null){
        inicial = {x:posini.x,y:posini.y};
        final =  {x:posfim.x,y:posfim.y};
        stone.x=inicial.x;
        stone.y=inicial.y;
    }
    else if(posini!=null && posfim==null){
        inicial = {x:posini.x,y:posini.y};
        final =  {x:stone.x,y:stone.y};
        stone.x=inicial.x;
        stone.y=inicial.y;
    }
    else if(posini==null && posfim!=null){
        inicial = {x:stone.x,y:stone.y};
        final =  {x:posfim.x,y:posfim.y};
    }
    else {
        return;
    }

    /*var distance = Phaser.Math.distance(inicial.x,inicial.y,final.x,final.y);
    var duration= distance*5;//quanto maior o fator de multiplicação mais lento é o deslocamento
    var tween = game.add.tween(stone);
    tween.to({x:final.x,y:final.y}, duration);*///Esse é o padrão do tutorial caso seja escolhido. Na minha opinião o código Sinusoidal é melhor como padrão!
   
    var tween = game.add.tween(stone);
    if(tipomove==null || tipomove==0){
        tween.to( { x: final.x, y: final.y }, 2000, Phaser.Easing.Sinusoidal.InOut, true);
    }
    else if(tipomove==1){
        tween.to( { x: final.x, y: final.y }, 2000, Phaser.Easing.Bounce.Out, true);
    }
    else if(tipomove==2){
        tween.to( { x: final.x, y: final.y }, 2000, Phaser.Easing.Circular.Out, true);
    }
    else if(tipomove==3){
        tween.to( { x: final.x, y: final.y }, 2000, Phaser.Easing.Elastic.Out, true);
    }
    else{
        return;
    }

    tween.start();
}
