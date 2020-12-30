var b, inp, head, db, gs=0, pc=0, ep, c1, c2, cars=[], ra, jy=0, car1, car2, track;
function preload(){
  car1=loadImage("car1.png")
  car2=loadImage("car2.png")
  track=loadImage("track.jpg")
}

function setup() {
  createCanvas(displayWidth,displayHeight-170);
  b=createButton("submit")
  b.position(500,50)
  b.mousePressed(enterplayer)

inp=createInput()
inp.position(500,70)

head=createElement("h2")
head.html("CAR RACING GAME")
head.position(700,150)

db=firebase.database()
db.ref("Gamestate").on("value",function(data){
  gs=data.val()

  
})
db.ref("playerCount").on("value",function(data){
  pc=data.val()
})
rt=createButton("reset")
rt.position(200,300)
rt.mousePressed(reset)
c1=createSprite(200,300,20,10)
c1.addImage("car",car1)
c2=createSprite(400,300,20,10)
c2.addImage("cr",car2)
cars=[c1,c2]
}

function draw() {
  background(255,255,255);  
  if(pc===2){
    db.ref("/").update({
      Gamestate:1
    })
  }
  if(gs===1){
 
 var index=0
 var x=200
 image(track,0,-displayHeight*4,displayWidth,displayWidth*5)
 for(var i in ra){
   cars[index].x=x
   x=x+100
   cars[index].y=ra[i].y
   if(index===jy-1){
     camera.position.y=cars[index].y
   }
   index=index+1

 }
 if(keyDown("up")){
   cars[jy-1].y=cars[jy-1].y-5
   db.ref("players/player"+jy).update({
     y:cars[jy-1].y
   })
 }
 
  
  drawSprites();
  if(ra===undefined&&gs===1){
    db.ref("players").on("value",function(data){
      ra=data.val()
    })
  }
}
}