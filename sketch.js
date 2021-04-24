var canvas;
var block1,block2,block3,block4;
var ball, edges;
var music1;

function preload(){
    //Loading Music
    music1=loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);
    //Block 1
    block1 = createSprite(0,580,360,30);
    block1.shapeColor = "blue";
    //Block 2
    block2 = createSprite(295,580,200,30);
    block2.shapeColor = "orange";
    //Block 3
    block3 = createSprite(295+210,580,200,30);
    block3.shapeColor = "red";
    //Block 4
    block4 = createSprite(295+295+130,580,200,30);
    block4.shapeColor = "green";
    //Ball
    ball = createSprite(random(20,750),100, 40,40);
    ball.shapeColor = rgb(255,255,255);
    //write code to add velocityX and velocityY
    ball.velocityX=5;
    ball.velocityY=5;
}

function draw() {
    background(rgb(169,169,169));
    //Creating the edges
    edges=createEdgeSprites();
    ball.bounceOff(edges);    
    //Block 1 Bouncing
    if(block1.isTouching(ball)){
        ball.bounceOff(block1)
        ball.shapeColor = "blue";
        music1.play();
    }
    //Block 2 Bouncing
    if(block2.isTouching(ball)){
        ball.shapeColor = "orange";
       ball.velocityX=0;
       ball.velocityY=0;
        //write code to stop music
        music1.pause();
    }

    //write code to bounce off ball from the block3
    if(block3.isTouching(ball)){
        ball.bounceOff(block3)
        ball.shapeColor = "red";
        music1.play();
    }
    //write code to bounce off ball from the block4
    if(block4.isTouching(ball)){
        ball.bounceOff(block4)
        ball.shapeColor = "green";
        music1.play();
    }
    drawSprites();
}
