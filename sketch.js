function preload(){
a1=loadSound('sounds/Piano.mf.A3.mp3')
a2=loadSound('sounds/Piano.mf.A4.mp3')
a3=loadSound('sounds/Piano.mf.B3.mp3')
a4=loadSound('sounds/Piano.mf.B4.mp3')
a5=loadSound('sounds/Piano.mf.C3.mp3')
a6=loadSound('sounds/Piano.mf.C4.mp3')
a7=loadSound('sounds/Piano.mf.D3.mp3')
a8=loadSound('sounds/Piano.mf.D4.mp3')
a9=loadSound('sounds/Piano.mf.E3.mp3')
a10=loadSound('sounds/Piano.mf.E4.mp3')
a11=loadSound('sounds/Piano.mf.F3.mp3')
a12=loadSound('sounds/Piano.mf.F4.mp3')
a13=loadSound('sounds/Piano.mf.G3.mp3')
a14=loadSound('sounds/Piano.mf.G4.mp3')
a15=loadSound('sounds/Piano.mf.Ab3.mp3')
a16=loadSound('sounds/Piano.mf.Ab4.mp3')
a17=loadSound('sounds/Piano.mf.Bb3.mp3')
a18=loadSound('sounds/Piano.mf.Bb4.mp3')
a19=loadSound('sounds/Piano.mf.Db3.mp3')
a20=loadSound('sounds/Piano.mf.Db4.mp3')
a21=loadSound('sounds/Piano.mf.Eb3.mp3')
a22=loadSound('sounds/Piano.mf.Eb4.mp3')
a23=loadSound('sounds/Piano.mf.Gb3.mp3')
a24=loadSound('sounds/Piano.mf.Gb4.mp3')

}

function setup() {
  createCanvas(1500,500);
  wkey1 = createSprite(75,250,100,400)
  wkey1.shapeColor = "white"
  wkey2 = createSprite(180,250,100,400)
  wkey2.shapeColor = "white"
  wkey3 = createSprite(285,250,100,400)
  wkey3.shapeColor = "white"
  wkey4 = createSprite(390,250,100,400)
  wkey4.shapeColor = "white"
  wkey5 = createSprite(495,250,100,400)
  wkey5.shapeColor = "white"
  wkey6 = createSprite(600,250,100,400)
  wkey6.shapeColor = "white"
  wkey7 = createSprite(705,250,100,400)
  wkey7.shapeColor = "white"
  wkey8 = createSprite(810,250,100,400)
  wkey8.shapeColor = "white"
  wkey9 = createSprite(915,250,100,400)
  wkey9.shapeColor = "white"

  wkey10 = createSprite(1020,250,100,400)
  wkey10.shapeColor = "white"
  wkey11 = createSprite(1125,250,100,400)
  wkey11.shapeColor = "white"
  wkey12 = createSprite(1230,250,100,400)
  wkey12.shapeColor = "white"
  wkey13 = createSprite(1335,250,100,400)
  wkey13.shapeColor = "white"
  wkey14 = createSprite(1440,250,100,400)
  wkey14.shapeColor = "white"

  bkey1 = createSprite(127,185,50,275)
  bkey1.shapeColor = "black"
  bkey2 = createSprite(232,185,50,275)
  bkey2.shapeColor = "black"
  bkey3 = createSprite(442,185,50,275)
  bkey3.shapeColor = "black"
  bkey4 = createSprite(547,185,50,275)
  bkey4.shapeColor = "black"
  bkey5 = createSprite(652,185,50,275)
  bkey5.shapeColor = "black"
  bkey6 = createSprite(862,185,50,275)
  bkey6.shapeColor = "black"
  bkey7 = createSprite(967,185,50,275)
  bkey7.shapeColor = "black"
  bkey8 = createSprite(1177,185,50,275)
  bkey8.shapeColor = "black"
  bkey9 = createSprite(1282,185,50,275)
  bkey9.shapeColor = "black"
  bkey10 = createSprite(1387,185,50,275)
  bkey10.shapeColor = "black"
  

}

function draw() {
  background('blue'); 
  if(mousePressedOver(wkey1)){
a1.play()
  } 
  if(mousePressedOver(wkey2)){
    a2.play()
  } 
  if(mousePressedOver(wkey3)){
    a3.play()
  } 
  if(mousePressedOver(wkey4)){
    a4.play()
  } 
  if(mousePressedOver(wkey5)){
    a5.play()
  } 
  if(mousePressedOver(wkey6)){
    a6.play()
  } 
  if(mousePressedOver(wkey7)){
    a7.play()
  } 
  if(mousePressedOver(wkey8)){
a8.play()
} 
if(mousePressedOver(wkey9)){
a9.play()
} 
if(mousePressedOver(wkey10)){
a10.play()
} 
if(mousePressedOver(wkey11)){
a11.play()
} 
if(mousePressedOver(wkey12)){
a12.play()
} 
if(mousePressedOver(wkey13)){
a13.play()
  } 
  if(mousePressedOver(wkey14)){
    a14.play()
  } 
  if(mousePressedOver(bkey1)){
    a15.play()
  } 
  if(mousePressedOver(bkey2)){
    a16.play()
  } 
  if(mousePressedOver(bkey3)){
    a17.play()
  } 
  if(mousePressedOver(bkey4)){
    a18.play()
  } 
  if(mousePressedOver(bkey5)){
    a19.play()
  } 
  if(mousePressedOver(bkey6)){
    a20.play()
  } 
  if(mousePressedOver(bkey7)){
    a21.play()
  } 
  if(mousePressedOver(bkey8)){
    a22.play()
  } 
  if(mousePressedOver(bkey9)){
    a23.play()
  } 
  if(mousePressedOver(bkey10)){
    a24.play()
  } 

  drawSprites()
}