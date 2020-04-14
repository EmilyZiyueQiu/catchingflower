var coins;
var player;
var score = 0;
var spr;
var anim;
var anim2;
function preload() {
  anim = loadAnimation("assets/asterisk_normal0001.png",
    "assets/asterisk_normal0002.png",
    "assets/asterisk_normal0003.png");
  anim2 = loadAnimation("assets/ghost_standing0001.png",
  "assets/ghost_standing0002.png","assets/ghost_standing0003.png")
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  coins = new Group();
  coins2 = new Group();
  for (var i = 0; i < 10; i++) {
    var c = createSprite(random(100, width-100),random(100, height-100),10, 10);
    //c.shapeColor = color(255, 255, 0);
    c.addAnimation("default",anim);
    coins.add(c);
  }  
  for (var i = 0; i < 10; i++) {
    var d = createSprite(random(100, width-100),random(100, height-100),10, 10);
    //c.shapeColor = color(255, 255, 0);
    d.addAnimation("default",anim2);
    coins2.add(d);
  }
  //user's block
  player = createSprite(50, 50, 60, 60);
  player.shapeColor = color("white");
}


function draw() {
  background(50);
  player.velocity.x = (mouseX-player.position.x)*0.1;
  player.velocity.y = (mouseY-player.position.y)*0.1;
  player.overlap(coins, getCoin);
  player.overlap(coins2,gameOver);
  drawSprites();
  fill(255);
  noStroke();
  textSize(72);
  textAlign(CENTER, CENTER);
  if (coins.length > 0) {
    text(score, width/2, height/2);
  }
  else {
    text("you win!", width/2, height/2);
  }
}
function getCoin(player, coin) {
  coin.remove();
  score += 1;
}

function gameOver(){
  noStroke();
  textSize(72);
  textAlign(CENTER, CENTER);
  fill("red");
  text("GAME OVER",width/2, height/2);
  noLoop();
}