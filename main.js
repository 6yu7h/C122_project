function preload() {

}

function setup()
{
   canvas = createCanvas(400, 400);
    canvas.position(110, 250);
    video = createCapture(VIDEO);
    video.hide();
} 

function take_snapshot()
{
    save('birthday_celebration.png');
}

function draw() {
	image(video, 0, 0, 400, 400);
    fill(255, 192, 203);
    stroke(255, 192, 203);
    rect(349, 55, 15, 335);
    rect(51, 55, 15, 335);
    rect(70, 40, 280, 15);
    rect(70, 370, 280, 15);
    circle(350, 50, 70);
    circle(51, 49, 70);
    circle(51, 358, 70);
    circle(351, 358, 70);
  }
 


