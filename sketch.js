var canvas;
var backgroundIMG
var snake
var fruit
var fruit1
var fruitGroup
var parede1, parede2, parede3, parede4
var score = 0
var gameState = 1




function preload() {
  
}

function setup() {
  canvas = createCanvas(300,650);
  snake = createSprite(150,325,10,10)
  parede1 = createSprite(0,325,10,650)
  parede2 = createSprite(300,325,10,650)
  parede3 = createSprite(300,0,650,10)
  parede4 = createSprite(300,650,650,10)
  fruit = createSprite(250,325)
  fruitGroup = new Group()
  fruitGroup.add(fruit)
  paredeGroup = new Group()
  paredeGroup.add(parede1)
  paredeGroup.add(parede2)
  paredeGroup.add(parede3)
  paredeGroup.add(parede4)
}

function draw() {
  background("black");
  fruit.scale = 0.1
  textSize(16)
  text("Frutas:"+score,20,20)
  if(keyDown ("RIGHT_ARROW")) {
    snake.x = snake.x +10
  }
  if(keyDown ("LEFT_ARROW")) {
    snake.x = snake.x -10
  }
  if(keyDown ("UP_ARROW")) {
    snake.y = snake.y -10
  }
  if(keyDown ("DOWN_ARROW")) {
    snake.y = snake.y +10
    
  }
  if(paredeGroup.collide(snake)){
    snake.destroy()
    gameState = 2
  }
  if(gameState == 2){
    gameOver()
  }
   randomFruits()
   rotateSnk()
  drawSprites()
}
function randomFruits(){
  
  if(frameCount%60 == 0){
    if(!fruitGroup[0]){
      fruit1 = createSprite(random(10,290), random(10,640), 10,10)
      fruitGroup.add(fruit1)
    }
  }
  
}
function rotateSnk(){
  if(fruit.collide(snake)){
    fruit.destroy()
      snake.width = snake.width +10
    score++
  }
  if(fruitGroup.collide(snake)){
    fruitGroup.destroyEach()
      snake.width = snake.width +10
    
  }
  if(keyDown ("DOWN_ARROW") || keyDown("UP_ARROW")){
    snake.rotation = 90
     
  }
  if(keyDown ("RIGHT_ARROW") || keyDown("LEFT_ARROW")){
    snake.rotation = 180
     
  }
}
function gameOver(){
  textSize(20)
  text("Sinto muito, mas voce perdeu!", 20,325)
}