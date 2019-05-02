function setup() {
  createCanvas(windowWidth, windowHeight);
  background(200);
}

function draw() {
  var x = 0;

  while(x < width){
   line(x,0,x,height);
   line(0,x,width,x);
   x += 10;
  }

  line(x,0,x,height);
  line(0,x,width,x);
}
