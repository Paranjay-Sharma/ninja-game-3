var ninja,ninjaImg;
var bgImg;
var roof,roofImg,roofGroup;
var back;
var jump=0;
var roofCount=0;
var gameover,gameoverImg
var win,winImg;
function preload(){
ninjaImg=loadImage("ninja.png");
bgImg=loadImage("back.png");
roofImg=loadImage("chineseroof.png");
gameoverImg=loadImage("gameover.png")
winImg=loadImage("End.png");
}


function setup(){
canvas=createCanvas(1200,400);
roofGroup=new Group();
//back=createSprite(-200,150);
//back.addImage(bgImg);
//back.scale=6.0;
//back.velocity.x=-2

ninja=createSprite(400,200);
ninja.addImage(ninjaImg);
ninja.scale=0.5;



}

function draw(){
background(bgImg);
//back.depth=back.depth-10;
//if (back.x < 600){
  //  back.x = back.width/2;
  //}

  if (frameCount%60==0){      
roof=createSprite(1270,200);
roof.addImage(roofImg);
roof.velocityX=-(10+jump/8);
roof.scale=2.0;
roof.y=Math.round(random(90,350));
roofGroup.add(roof);
//roof.debug=true;
roof.lifetime=150;
roofCount=roofCount+1;
  }
 if(keyDown("space")){
     ninja.y=ninja.y-30;
 } 
 if(ninja.collide(roofGroup)){
     jump=jump+1;
 }
 ninja.velocityY=10;
 ninja.setCollider("rectangle",0,0,100,100);
 
if (roofCount===50){
  win=createSprite(600,200);
  win.addImage(winImg);
  win.scale=0.75
  ninja.velocityY=0
  ninja.destroy();
  roof.lifetime=0
  roof.destroy();
  win.depth=roof.depth
  win.depth=win.depth+1
  }
if (ninja.y>400|| ninja.x<0){
  roof.velocityX=0
  roof.lifetime=0
  gameover=createSprite(600,200);
  gameover.addImage(gameoverImg);
}
console.log(roofCount);

 fill("red")
 strokeWeight(10)
 textSize(20);
 text("Roof Leaped:"+jump,700,50);
 
 fill("green")
 strokeWeight(20)
 textSize(20);
 text("roof came= "+roofCount,500,50);
 text.depth=ninja.depth;
drawSprites();
}