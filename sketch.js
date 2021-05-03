var canvas;
var music;
var block1;
var block2;
var block3;
var block4;
var ball;
function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
block1 = createSprite(70,580,200,30);
block1.shapeColor = "green";

block2 = createSprite(270,580,200,30);
block2.shapeColor = "orange";

block3 = createSprite(480,580,200,30);
block3.shapeColor = "pink";

block4 = createSprite(690,580,200,30);
block4.shapeColor = "blue";



    //create box sprite and give velocity
ball = createSprite(random(20,750),100,40,40);
ball.velocityX = 4;
ball.velocityY = 8;
ball.shapecolor = "white";

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    edges = createEdgeSprites();
    ball.bounceOff(edges);

    if(ball.isTouching(block1) && ball.bounceOff(block1)){
        ball.shapeColor = "green"
        music.play();
    }
    if(ball.isTouching(block2)){
        ball.shapeColor = "orange";
        music.stop();
        ball.velocityX = 0;
        ball.velocityY = 0;
    }
    if(ball.isTouching(block3) && ball.bounceOff(block3)){
        ball.shapeColor = "pink"
        music.play();
    }
    if(ball.isTouching(block4) && ball.bounceOff(block4)){
        ball.shapeColor = "blue"
        music.play();
    }


drawSprites();

    //add condition to check if box touching surface and make it box
}
