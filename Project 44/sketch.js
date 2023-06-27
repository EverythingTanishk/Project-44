var person,person_img;
var gun,gun_img;
var alien,alien_img;
var laser,laser_img;


function preload(){
  person_img = loadImage("Characters/people.png");
  gun_img = loadImage("Characters/Gun.png");
  alien_img = loadImage("Characters/UFO.png");
  laser_img = loadImage("Characters/laser.png")
}
function setup() {
  createCanvas(800,400);
  person = createSprite(200,180,20);
  person.addImage("standing",person_img);
  gun =  createSprite(180,20,50);
  gun.addImage("standing",gun_img);
  alien = createSprite(9,10,20,50);
  alien.addImage("standing",alien_img);
  laser = createSprite(90,400,500);
  laser.addImage("standing",laser_img);
}

function draw() {
  background(255,255,255);  
  drawSprites();
}