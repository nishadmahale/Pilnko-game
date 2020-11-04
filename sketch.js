const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var world,engine;

function setup() {
  createCanvas(1200,400);
  createSprite(400, 200, 50, 50);


// create your bodies here
ground1 = new Ground(200,200,100,20);




}

var particles= [];
var plinkos= [];
var divisions= [];
var divisionHeight=300;

for(var k=0;k<=Width;k=k+80){
  divisions.push(new divisions(k,height-divisionHeight/2,10,divisionHeight));




}



function draw() {
  background(255,255,255); 
  
  








plinkos.display();
division.display();
particles.display();






  drawSprites();
}