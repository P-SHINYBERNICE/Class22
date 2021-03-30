const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
var myEngine,myWorld,myBody;
var mybody1;
function setup() { 
createCanvas(400,400);
myEngine=Engine.create(); 
myWorld=myEngine.world; 
var options={ isStatic:true }
myBody=Bodies.rectangle(200,380,400,20,options); 
World.add(myWorld,myBody); 
console.log(myBody);
var options1={
restitution:1.0

 }
 mybody1=Bodies.circle(200,200,20,options1);
 World.add(myWorld,mybody1); 
}
function draw() { 
background("black");
Engine.update(myEngine); 
rectMode(CENTER);
rect(myBody.position.x,myBody.position.y,400,20);
ellipseMode(RADIUS);
ellipse(mybody1.position.x,mybody1.position.y,20,20);
 }