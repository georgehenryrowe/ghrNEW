function setup(){createCanvas(windowWidth,windowHeight,WEBGL).parent("sketch-holder"),colorMode(HSB,360,100,100,100),sizeOfThing=height/10}function draw(){background(30);var e=200*cos(TWO_PI*frameCount/2e3);e<0&&(e=0);var t=sizeOfThing*multiplier;sqrt(5);noStroke(),rotate(.01*e),translate(-width/2,-height/2);for(var o=sizeOfThing+.01*scrollMove,r=0;r<2e3;r+=t)for(var i=0;i<2e3;i+=t){var a=dist(.5*width,.5*height,r,i);dist(0,0,.5*width,.5*height);push(),translate(r,i,e*(.01*a)),rotateX(e*(1e-4*a)),rotateY(e*(2e-4*a)),rotateZ(e*(1e-4*a)),1==pattern?(fill(a/2*map(mouseX,0,width,.1,2),100,100),box(o)):2==pattern?(fill(.25*r*map(mouseX,0,width,.1,2),100,100),box(o)):3==pattern?(noFill(),stroke(200,.25*i,map(mouseX,0,width,10,100),100,100),box(o)):4==pattern?(fill(a/2*map(mouseX,0,width,.1,2),100,100),rect(0,0,o,o),rect(-100,-100,o,o),rect(100,100,o,o)):5==pattern?(stroke(.25*r*map(mouseX,0,width,.1,2),100,100),line(0,0,width+o,height+o)):6==pattern&&(noFill(),stroke(a/2*map(mouseX,0,width,.1,2),100,100),strokeWeight(.5),sphere(o/2,6,6)),pop()}}function mouseWheel(e){scrollMove-=e.delta}function keyReleased(){83==keyCode&&(save("myCanvas.png"),console.log("Save")),75==keyCode&&noLoop(),76==keyCode&&loop(),187==keyCode&&(multiplier-=.1),189==keyCode&&(multiplier+=.1),189==keyCode&&(multiplier+=.1),67==keyCode&&++pattern>numberOfPatterns&&(pattern=1)}var changingValue,sizeOfThing,scrollMove=1,multiplier=1,pattern=1,numberOfPatterns=6;