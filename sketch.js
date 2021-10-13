const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var caixa1, caixa2;
var solo1;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    caixa1 = new Box(200,300,50,50);
    caixa2 = new Box(240,100,50,100);

    solo1 = new Solo(200,390,400,20);

}

function draw(){
    background(0);
    Engine.update(engine);

    caixa1.display();
    caixa2.display();

    solo1.display();

}