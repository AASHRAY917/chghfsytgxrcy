var boy,boyImg;
var path,pathImg;
var coin,coinImg;
var treasureCollection = 0;







function preload()
{
  pathImg = loadImage("path.png"); 
  coinImg = loadImage("coin.png");
  boyImg = loadAnimation("imgr1.png","imgr2.png","imgr3.png");
}

function setup() 
{
 createCanvas(600,600);

 path = createSprite(300,300);
 path.addImage(pathImg);
 path.velocityX = -3;
 
 
 boy = createSprite(200,300,70,150);
 boy.addAnimation("BoyRunning",boyImg);
 boy.scale = 0.08;  


}

function draw() 
{
  background(0);
  drawSprites();
  boy.y = World.mouseY;

  if (coin.isTouching(boy))
    {
      coin.destroyEach();
      treasureCollection=treasureCollection + 50;
    }
  if(path.x < 0)
  {
    path.x = width/2;
  }

  

  
  

  spawnCoins();
}

function spawnCoins ()
{
  if(frameCount % 530 == 0)
  {
    coin = createSprite(Math.round(random(50, width-50),1000, 10, 10));
    coin.addImage(coinImg);
    coin.scale = 0.3;
    //coin.velocityX = -3;
  }
}


