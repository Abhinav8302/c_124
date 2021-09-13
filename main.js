noseX=0;
noseY=0;
rightwristX=0;
leftwristX=0;
diffrence=0;

function setup(){
canvas=createCanvas(550,550);
canvas.center();
video=createCapture(VIDEO);
video.size(500,500);


poseNet=ml5.poseNet(video,modelLoaded);
poseNet.on('pose',gotPoses);
}

function gotPoses(results){
   if(results.length > 0)
   {
    console.log(results);
    noseX=results[0].pose.nose.x;
    noseY=results[0].pose.nose.y;
    rightwristX=results[0].pose.rightWrist.x;
    leftwristX=results[0].pose.leftWrist.x;
    diffrence=(leftwristX-rightwristX).toFixed(0);
    console.log('diffrence is : '+diffrence);
   } 
}

function modelLoaded(){
    console.log('PoseNet Is Initialized !');
}

function draw()
{ background('#808080');
 fill('#fffdd0');
  stroke('#964B00'); 
  textSize(diffrence); 
  text("Abhinav" , noseX,noseY);
 }

