const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var caixa1;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    caixa1 = new Box(200,100,50,50);
    
}

function draw(){
    background(0);
    Engine.update(engine);

    caixa1.display();
    
}