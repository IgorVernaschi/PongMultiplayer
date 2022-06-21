//Variaveis Bola
let xBol = 300;
let yBol = 200;
let Diam = 20;
let Raio = Diam / 2 ;

//Velocidade Bola

let VelXBol = 6;
let VelYBol = 6;

//Variaveis Raquete
let xRaq = 5;
let yRaq = 150;
let CompRaq = 10;
let AltuRaq = 90;

//Variaveis Oponente
let xRaqOp = 585;
let yRaqOp = 150;
let yOpVel;
let ChanceErro = 0;

//Colisao Biblioteca
let Colidiu = false;

//Placar do Jogo
let MeusPontos = 0;
let PontosOponente = 0;

//Sons do Jogo
let Raquetada;
let Ponto;
let Trilha;

function preload (){
  Trilha = loadSound ("trilha.mp3");
  Ponto = loadSound ("ponto.mp3");
  Raquetada = loadSound ("raquetada.mp3");
}


function setup() {
  createCanvas(600, 400);
  Trilha.loop();
}

function draw() {
  background(0);
  MostraBola();
  MovimentoBola();
  ColisaoBola();
  MostraRaquete(xRaq, yRaq);
  MovimentoRaquete();
  //ColisaoRaquete();
  ColisaoRaqBiblio(xRaq,yRaq);
  MostraRaquete(xRaqOp, yRaqOp);
  MovimentoOp();
  ColisaoRaqBiblio(xRaqOp, yRaqOp);
  IncluiPlacar ();
  MarcaPonto ();
  
  
}

function MostraBola(){
  circle (xBol, yBol, Diam);}

function MovimentoBola(){
  xBol += VelXBol;
  yBol += VelYBol;
}

function ColisaoBola(){
  if (xBol + Raio> width ||
   xBol - Raio< 0){
  VelXBol *= -1;
}
if (yBol + Raio> height || 
   yBol - Raio<0){
  VelYBol *= -1;
}
}

function MostraRaquete (x, y){
rect (x, y, CompRaq, AltuRaq)}

function MovimentoRaquete() {
    if (keyIsDown(UP_ARROW)) {
        yRaq -= 10;
    }
    if (keyIsDown(DOWN_ARROW)) {
        yRaq += 10;
    }
}

//function ColisaoRaquete (){
  if (xBol - Raio< xRaq + CompRaq && yBol - Raio < yRaq + AltuRaq && yBol + Raio > yRaq){
    VelXBol*= -1;
  }
    
function ColisaoRaqBiblio(x, y) {
    Colidiu = collideRectCircle(x, y, CompRaq, AltuRaq, xBol, yBol, Raio);
    if (Colidiu) {
        VelXBol *= -1;
      Raquetada.play();
    }
}

function MovimentoOp() {
  if (keyIsDown(87)) {
        yRaqOp -= 10;
    }
    if (keyIsDown(83)) {
        yRaqOp += 10;
    }
}

function IncluiPlacar() {
  //ContornoPlacar  
  stroke(255);
  //Alinhamento Texto
    textAlign(CENTER);
  //Tamanho Texto
    textSize(16);
  //Preencher cor Retangulo Placar
    fill(color(255, 140, 0));
  //Retangulo Placar
    rect(150, 10, 40, 20);
  //Preencher cor Retangulo Placar
    fill(255);
  //Meus Pontos
    text(MeusPontos, 170, 26);
  //Preencher cor meus pontos
    fill(color(255, 140, 0));
  //Retangulo Oponente
    rect(450, 10, 40, 20);
  //Preencher cor retangulo oponente
    fill(255);
  //Pontos Oponente
    text(PontosOponente, 470, 26);
  
}
function MarcaPonto() {
    if (xBol > 590) {
        MeusPontos += 1;
      Ponto.play();
    }
    if (xBol < 10) {
        PontosOponente += 1;
      Ponto.play();
    }
  function AntiBugBolinha(){
    if (XBol - Raio < 0){
    XBol = 23
    }
}

}