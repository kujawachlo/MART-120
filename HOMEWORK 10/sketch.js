
var headX = 150;
var headY = 180;
var headDirection = 6;

var bodyX = 200;
var bodyY = 185;
var bodyDirection = 3;

var size = 22;
var count = 0;
var sizeDirection = 2;

function setup()
{
    createCanvas(500, 600);
}

function draw()
{
    background(120,45,78);
    textSize(22)
    text("Portrait by:", 10,80);

    // head
    strokeWeight(1);
    fill("yellow");
    circle(headX,headY,250);
    headX+=headDirection;
    if(headX >= 418 || headX <= 82)
    {
        headDirection *= -1;
    }

    // eyes
    square(150,150,55,10);
    square(50,150,50,10);
    line(150, 180, 100, 180);
    strokeWeight(1);
    fill("white")
    ellipse(80,180,35,15);
    ellipse(175,180,45,15);
    strokeWeight(10);
    fill(0);
    point(80,180);
    point(170,180);

    // nose
    fill("red")
    strokeWeight(1);
    triangle(100, 235, 150, 220, 125, 175);
    
    // eyebrows
    line(bodyX, bodyY, 50, 130);
    line(150, bodyY, 200, 130);
    bodyY += bodyDirection;
    if(bodyY <= 50 || bodyY >= 450 )
    {
        bodyDirection *= -1;
    }

    // mouth
    rect(headX,bodyY,50,5);
    
    // hair
    line(20, 190, 85, 75);
    line(250, 190, 195, 65);
    line(300, 350, 255, 250);
      line(255, 350, 235, 270);
    line(20, 350, 45, 250);
      line(50, 350, 65, 270);
  
    // decoration
    fill("black");
    textSize(size);
    size+= sizeDirection;
    count++;
    if(count > 10)
    {
        sizeDirection *=-1;
        count = 0;
    }
    text("Chloe Kujawa",270,500 );


}
