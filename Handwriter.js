// Handwriter.js for Blot.

const width = 125;
const height = 125;
var text = "a23";// better var or const?????

var textLength = text.length;


setDocDimensions(width, height);

const testTurtle = createTurtle();
nsole.log
for (let i = 0; i < textLength; i++) {
    testTurtle.forward(i);
    testTurtle.left(91);
}

testTurtle.translate(
  [width/2, height/2], 
  testTurtle.cc
);

drawTurtles(
    testTurtle
);
//Placeholder.
