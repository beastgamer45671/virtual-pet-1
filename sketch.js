const Bodies = Bodies;
const World = World;
const Engine = Engine;

var dogi, dog, happyDog, happyDogi;
var database;
var foodS, foodStock;

function preload()
{
  dogi = loadImage("dogImg.png");
  happyDogi = loadImage("dogImg1.png");
  happyDog = addImage(happyDogi);
  
}

function setup() {
  createCanvas(500, 500);
  foodStock = database.ref("Food");
  foodStock.on("value", readStock);

  dog = Bodies.rectangle(250,250,10,10);
  dog = addImage(dogi);

}


function draw() { 
  background(46,139,87);

  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(dogHappy);
  }

foodStock.display();
foodS.display();
dog.display();
happyDog.display();

  textSize(20);
  fill("white");
  text("Food Stock:",)

  textSize(20);

  //add styles here

}

function readStock(data){
  foodS=data.val();
} 

function writeStock(x){
if(x<=0){
  x = 0;
}
else{
   x=x-1;
}
database.red("/").update({
  Food:x
})
}


 


