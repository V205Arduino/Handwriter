// welcome to blot!
//Botwriter WIP

const width = 125;
const height = 125;
var text = "b";// better var or const????? abcdefghijklmnopqrstuvwxyz

var textLength = text.length;


setDocDimensions(width, height);

const testTurtle = createTurtle();

  
   
for (let i = 0; i < textLength; i++) {
  //drawB();
  //drawC();
  //drawA()
  //drawD()
  drawE()
    testTurtle.setAngle(0) 
    /*
    for (let i = 0; i < 100; i++) {
      
      testTurtle.setAngle(-90) 
      testTurtle.forward(1)
      testTurtle.setAngle(180)
      testTurtle.forward(1)
      testTurtle.setAngle(90)
      testTurtle.forward(1)
      testTurtle.setAngle(0)
  
  
  
    }  
    for (let i = 0; i < 100; i++) {
      
      testTurtle.setAngle(0) 
      testTurtle.forward(1)
      testTurtle.setAngle(180)
      testTurtle.forward(1)
      testTurtle.setAngle(90)
      testTurtle.forward(1)
      testTurtle.setAngle(0)
  
  
  
    } 
    */
 // testTurtle.forward(6)
  //testTurtle.goto(987, 20)
  //drawA()
   
    
  
  
}

testTurtle.translate(
  [width/2, height/2], 
  testTurtle.cc
);

drawTurtles(
    testTurtle
);
function drawA(){
 testTurtle.setAngle(80)
 testTurtle.forward(8)
 testTurtle.setAngle(280)
 testTurtle.forward(8)
 testTurtle.up()
 testTurtle.setAngle(100)
 testTurtle.forward(4)
 testTurtle.down()
 testTurtle.setAngle(180)
 testTurtle.forward(1.5)

  
  
}
function drawB(){
 testTurtle.setAngle(90)
 testTurtle.forward(6)
 testTurtle.setAngle(90)
 //testTurtle.setAngle(90)
 
  
 testTurtle.arc(90, 1.1)
 testTurtle.forward(1)
 testTurtle.arc(193, 1.5)
 testTurtle.setAngle(0) 
 testTurtle.forward(-2)
 testTurtle.forward(2.2)
 testTurtle.arc(193,1.6)
 testTurtle.setAngle(0)
 testTurtle.forward(-2)
 

  
  
}
function drawC(){
 testTurtle.setAngle(200)
 
  
 testTurtle.arc(228, 3)
 

  
  
}
function drawD(){
 testTurtle.setAngle(90)
 
  
 testTurtle.forward(6)
 testTurtle.setAngle(0)
 testTurtle.forward(1)
 testTurtle.arc(180, 3) 
 testTurtle.forward(1)
 

  
  
}
function drawE(){
 testTurtle.setAngle(90)
 
  
 testTurtle.forward(6)
 testTurtle.setAngle(0)
 testTurtle.forward(2)
 testTurtle.forward(-2)
 testTurtle.setAngle(-90)
 testTurtle.forward(2)
 testTurtle.setAngle(0)
 testTurtle.forward(2)
 testTurtle.forward(-2)
  
 testTurtle.setAngle(-90)
 //testTurtle.forward(2)
 //testTurtle.setAngle(0)
   testTurtle.forward(2)
 //testTurtle.forward(-2)

 
  
 
 
 

  
  
}
function drawF(){
 testTurtle.setAngle(90)
 
  
 testTurtle.forward(6)
 testTurtle.setAngle(0)
 testTurtle.forward(2)
 testTurtle.forward(-2)
 testTurtle.setAngle(-90)
 testTurtle.forward(2)
  testTurtle.setAngle(0)
 testTurtle.forward(2)
 testTurtle.forward(-2)
 
  
  
 
 testTurtle.forward(1)
 

  
  
}


function drawP(){
 testTurtle.setAngle(90)
 testTurtle.forward(6)
 testTurtle.setAngle(90)
 //testTurtle.setAngle(90)
 
  
 testTurtle.arc(90, 1.1)
 testTurtle.forward(1)
 testTurtle.arc(193, 1.5)
 testTurtle.setAngle(0) 
 testTurtle.forward(-2)
 

  
  
}
