var canvas;
var music;
var rec1, rec2, rec3, rec4, box1;
var edges;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces 
      rec1=createSprite(110, 540, 200, 20)
      rec1.shapeColor="blue"
      
      rec2=createSprite(320, 540, 200, 20)
      rec2.shapeColor="red"
  
      rec3=createSprite(530, 540, 200, 20) 
      rec3.shapeColor="black"
  
      rec4=createSprite(740, 540, 200, 20)
      rec4.shapeColor="purple"
      
      
  
    //create box sprite and give velocity
      box1=createSprite(random(20,750),20, 20,20)
      box1.shapeColor="white"
      box1.velocityY = 5;
      box1.velocityX = 5;
      
}

function draw() {
    background(rgb(169,169,169));
   
  edges=createEdgeSprites()
  box1.bounceOff(edges[2])
  box1.bounceOff(edges[3])
  box1.bounceOff(edges[1])
  box1.bounceOff(edges[0])
  
    //add condition to check if box touching surface and make it box
      if(box1.isTouching(rec1)){
        box1.shapeColor="blue"
        box1.bounceOff(rec1)
        
        music.play()
      }  
        if(box1.isTouching(rec2)){
        box1.shapeColor="red"
        box1.bounceOff(rec2)
        
        music.play()
      }       
       if(box1.isTouching(rec3)){
          box1.shapeColor="black"
          box1.velocityY=0 
          box1.velocityX=0
          music.stop()
      }       
       if(box1.isTouching(rec4)){
          box1.shapeColor="purple"
          box1.bounceOff(rec4)
          
          music.play()
      }  
  
  drawSprites()
}
