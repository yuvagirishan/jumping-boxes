var canvas;
var sprite1,sprite2,sprite3,sprite4;
var sprite5;


function preload(){
    

}


function setup(){
    canvas = createCanvas(800,600);
   
    //create 4 different surfaces
sprite5=createSprite(100,100,20,20)
sprite5.shapeColor="white";
sprite5.velocityX=3;
sprite5.velocityY=3;

sprite1=createSprite(100,590,180,20);
sprite1.shapeColor="pink";

sprite2=createSprite(300,590,180,20);
sprite2.shapeColor="lightGreen";

sprite3=createSprite(500,590,180,20);
sprite3.shapeColor="lightBlue";

sprite4=createSprite(700,590,180,20);
sprite4.shapeColor="yellow";

 
    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    if(sprite5.x<0){
        music.stop()
        sprite5.velocityX=3
    }else if(sprite5>800){
        
        sprite5.velocityX=3
    }
   


    //add condition to check if box touching surface and make it box
    if (isTouching(sprite5,sprite4)){
        
        sprite5.shapeColor="yellow";
        bounceOff(sprite5,sprite4)
    }else if (isTouching(sprite5,sprite3)){
        
        sprite5.shapeColor="lightBlue";
        bounceOff(sprite5,sprite3)
    }else if (isTouching(sprite5,sprite2)){
        
        sprite5.shapeColor="lightGreen";
        bounceOff(sprite5,sprite2)
        sprite5.velocityX=0;
        sprite5.velocityY=0;
        
    }else if (isTouching(sprite5,sprite1)){
        music.play()
        sprite5.shapeColor="pink";
        bounceOff(sprite5,sprite1)
}
if (sprite5.y<0){
    
    sprite5.velocityY=3
}


drawSprites()
}
function isTouching(sprites5,sprite4){

}
function bounceOff(sprite1,sprite3){

}