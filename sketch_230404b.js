let ball = { 

x: 300, 

y: 200, 

xspeed: 0, 

yspeed: 0 

} 

  

function setup() { 

createCanvas(400, 500); 

background(100) 

img=loadImage('Zuckerman.jpeg') 

} 

  

function draw() { 

image(img,ball.x,ball.y,100,100) 

display(); 

moving(); 

bounce(); 

} 

  

function display(){ 

fill(255,0,0);  

circle(ball.x, ball.y, 20); 

} 

  

function moving(){ 

ball.x+=ball.xspeed; 

ball.y+=ball.yspeed; 

} 

  

function bounce(){ 

if(ball.x>width || ball.x<0){ 

ball.xspeed=ball.xspeed*-1 

} 

if(ball.y>height || ball.y<0){ 

ball.yspeed=ball.yspeed*-1 

} 

} 

  

function mouseClicked() { 

if (mouseX<ball.x+10  && mouseX>ball.x-10 && mouseY<ball.y+10 && mouseY>ball.y-10){ 

ball.xspeed= 4; 

ball.yspeed= -3; 

} 

} 
