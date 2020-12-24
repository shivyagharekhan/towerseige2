const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint=Matter.Constraint 
var engine, world;
var box1;
function preload(){
    polygon_image=loadImage("polygon.png")
}
function setup(){
    var canvas = createCanvas(900,400);
    engine = Engine.create();
    world = engine.world;
    platform1= new Platform(390,300,250,10)
    platform2= new Platform(700,200,200,10)
    box1 = new Box(300,275,30,40);
    box2 = new Box(330,275,30,40);
    box3 = new Box(360,275,30,40);
    box4 = new Box(390,275,30,40);
    box5 = new Box(420,275,30,40);
    box6 = new Box(450,275,30,40);
    box7 = new Box(480,275,30,40);
    box8 = new Box(330,235,30,40);
    box9 = new Box(360,235,30,40);
    box10 = new Box(390,235,30,40);
    box11= new Box(420,235,30,40);
    box12= new Box(450,235,30,40);
    box13 = new Box(360,195,30,40);
    box14= new Box(390,195,30,40);
    box15 = new Box(420,195,30,40);
    box16= new Box(390,155,30,40);
    ground = new Ground(450,height,900,20)
    box1s = new Box(640,175,30,40);
    box2s= new Box(670,175,30,40);
    box3s= new Box(700,175,30,40);
    box4s= new Box(730,175,30,40);
    box5s= new Box(760,175,30,40);
    box6s= new Box(670,135,30,40);
    box7s= new Box(700,135,30,40);
    box8s= new Box(730,135,30,40);
    box9s= new Box(700,95,30,40);
    ball=Bodies.circle(50,200,20)
    World.add(world,ball)
    slingshot= new Slingshot(ball,{x:100,y:200})

}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display(); 
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display(); 
    box15.display();
    box16.display();
    platform1.display();
    platform2.display();
    ground.display();
    box1s.display();
    box2s.display();
    box3s.display();
    box4s.display();
    box5s.display();
    box6s.display(); 
    box7s.display();
    box8s.display();
    box9s.display();
   slingshot.display();
   imageMode(CENTER)
   image(polygon_image,ball.position.x,ball.position.y,40,40)
}
function mouseDragged(){
    Matter.Body.setPosition(ball,{x:mouseX,y:mouseY})
}
function mouseReleased(){
    slingshot.fly()
}