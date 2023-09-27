var ball, goal, lebron;
var ballIdle, ballRoll, ballRollFast, ballVomit, lebronImg;
var bgImg, goalImg;
var vx = 0, vy = 0, g = 0.05;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload() {
  //carregando imagens
  bgImg = loadImage("assets/misc/bg.jpeg");
  goalImg = loadImage("assets/misc/goal.png");

  //carregando animações
  ballIdle = loadAnimation("assets/ball/idle_1.png", "assets/ball/idle_2.png");
  ballRoll = loadAnimation("assets/ball/rolling_1.png", "assets/ball/rolling_2.png", "assets/ball/rolling_3.png", "assets/ball/rolling_4.png", "assets/ball/rolling_5.png", "assets/ball/rolling_6.png", "assets/ball/rolling_7.png");
  ballRollFast = loadAnimation("assets/ball/rollingFast_1.png", "assets/ball/rollingFast_2.png", "assets/ball/rollingFast_3.png");
  ballVomit = loadAnimation("assets/ball/vomit_1.png", "assets/ball/vomit_2.png", "assets/ball/vomit_3.png", "assets/ball/vomit_4.png", "assets/ball/vomit_5-10.png", "assets/ball/vomit_5-10.png", "assets/ball/vomit_5-10.png", "assets/ball/vomit_5-10.png", "assets/ball/vomit_5-10.png", "assets/ball/vomit_5-10.png", "assets/ball/vomit_11.png", "assets/ball/vomit_12.png", "assets/ball/vomit_13-15-17-19.png", "assets/ball/vomit_14-16-18-20.png", "assets/ball/vomit_13-15-17-19.png", "assets/ball/vomit_14-16-18-20.png", "assets/ball/vomit_13-15-17-19.png", "assets/ball/vomit_14-16-18-20.png", "assets/ball/vomit_13-15-17-19.png", "assets/ball/vomit_14-16-18-20.png", "assets/ball/vomit_21.png", "assets/ball/vomit_22.png", "assets/ball/vomit_23.png", "assets/ball/vomit_24.png", "assets/ball/vomit_25-31.png", "assets/ball/vomit_25-31.png", "assets/ball/vomit_25-31.png", "assets/ball/vomit_25-31.png", "assets/ball/vomit_25-31.png", "assets/ball/vomit_25-31.png", "assets/ball/vomit_25-31.png");

  ballIdle.playing = true;
  ballIdle.looping = true;
  ballRoll.looping = true;
  ballVomit.looping = false;
}


function setup() {
  createCanvas(400, 400);

  engine = Engine.create();
  world = engine.world;

  //criando a ball (bola)
  ball = createSprite(200, 200, 41, 41);
  ball.addAnimation("idle", ballIdle);
  ball.scale = 0.5
  ball.setCollider("rectangle", 0, 0, 40, 40);

  //adicionando animações para ball
  ball.addAnimation("roll", ballRoll);
  ball.addAnimation("rollFast", ballRollFast);
  ball.addAnimation("vomit", ballVomit);

  //criando o goal (objetivo)
  goal = createSprite(100, 200, 55, 64);
  goal.addImage("goal", goalImg);
  goal.setCollider("rectangle", 0, 0, 40, 40);

  //criando o chão
  ground = createSprite(500, 690, 400, 30);
}


function draw() {
  background(51);
  image(bgImg, 0, 0);
  Engine.update(engine);



  drawSprites();
}

