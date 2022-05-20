var harry , harryImg , harryImg2 ;
var bg1 , h1 , h2 , donut1 , key1 , kid1 , aunt1Img , aunt2Img , uncle1Img , uncle2Img , letterImg1 , letterImg2 ;
var BG ;
var light ,color ;




var gameState = "start"  ;



function preload(){
// harry
h1 = loadImage("png/harry1.png");
h2 = loadImage("png/harry2.png");
//intro
bg1 = loadAnimation("png/intro.png");

// level1 

// power
donut1 = loadImage("png/donut.png"); 
key1 = loadImage("png/key.png");
// obstacles 
kid1 = loadImage("png/kid.png");
aunt1Img = loadImage("png/aunt.png");
//aunt2Img = loadImage("png/aunt2");
uncle1Img =loadImage("png/uncle1.png");
uncle2Img = loadImage("png/uncle2.png");
// letter 
letterImg1 = loadImage("png/letter1.png");
letterImg2 = loadImage("png/letter2.png");

}


function setup(){
  createCanvas (1300,500);


  BG = createSprite(750,250,10,10)
  BG.addAnimation("intro" , bg1);
  BG.scale = 0.7;
  
  color = createSprite(650,250,1300,500);
  color.shapeColor = "black";

  light = createSprite(30,30,100,100);
  light.shapeColor = "white";
  
  harry = createSprite(35,35,10,10);
  harry.addImage(h1);
  harry.scale= 0.2;

  wall1 = createSprite(750,500,1300,3);
  wall2 = createSprite(115,70,230,3);
  wall3 = createSprite(400,70,200,3);
  wall4 = createSprite(300,35,3,70);
  wall5 = createSprite(500,35,3,70);

  wall2.shapeColor = "black";
  wall1.shapeColor = "black";
  wall3.shapeColor = "black";
  wall4.shapeColor = "black";
  wall5.shapeColor = "black";

  
  



}

function draw (){
  background("white");

 if (gameState === "start"){

    color.visible = false;
      harry.visible = false;
  wall1.visible = false; 
  wall2.visible = false;
  wall3.visible = false; 
  wall4.visible = false;
  wall5.visible = false;


    BG.changeAnimation("intro" , bg1);
    if (keyDown("space")){
      BG.x = 3000
      
      gameState = "level1";
      
      
    }
  } 
   if ( gameState === "level1"){

       BG.x = 3000;

       harry.visible = true;

       if(keyDown("right")){
         harry.x = harry.x+3;
       }
       if(keyDown("left")){
        harry.x = harry.x-3;
      }
      if(keyDown("up")){
        harry.y = harry.y -3 ;
      }
      if(keyDown("down")){
        harry.y = harry.y+3 ;
      }

       wall1.visible = true; 
       wall2.visible = true;
       wall3.visible = true; 
       wall4.visible = true;
       wall5.visible = true;
       color.visible = true;
       light.x= harry.x ;
       light.y = harry.y;
      
  }
  console.log(gameState);
  drawSprites()
}