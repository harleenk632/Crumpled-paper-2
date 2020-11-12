const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
//const Render = Matter.Render;
var dustbinObj, paperObject,groundObject;
var world;
var paperimage,dustbinimage;

function preload() {
	paperimage = loadImage("sprites/paper.png");
	dustbinimage = loadImage("sprites/dustbingreen.png");
}

function setup() {
	createCanvas(1600, 700);
	engine = Engine.create();
	world = engine.world;
	dustbinObj	= new dustbin(1200,650);
	paperObject	= new paper(200,450,140);
	groundObject= new ground(width/2,670,width,20);
	Engine.run(engine);
}

function draw() {
	rectMode(CENTER);
	background(0);

	dustbinObj.display();
	paperObject.display();
	groundObject.display();
}

function keyPressed() {
  	if(keyCode === UP_ARROW) {
    	Matter.Body.applyForce(paperObject.body, paperObject.body.position, {x:1085,y:-1085});
  	}
}