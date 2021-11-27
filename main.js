nosex=0;
nosey=0;
function preload(){
Img=loadImage(" https://i.postimg.cc/3x3QzSGq/m.png");
}
function setup(){
canvas=createCanvas(300,300);
canvas.center();
video=createCapture(VIDEO);
video.size(300,300);
video.hide();
poseNet=ml5.poseNet(video,modelLoaded);
poseNet.on('pose',gotposes);
}
function modelLoaded(){
    console.log("pose is loaded")
}
function gotposes(result){
    nosex=result[0].pose.nose.x-40;
    nosey=result[0].pose.nose.y;
    console.log("nose x="+result[0].pose.nose.x);
    console.log("nose y="+result[0].pose.nose.y);
}
function draw(){
image(video,0,0,300,300);
image(Img,nosex,nosey,80,35);
}
function take_snapshot(){
    save("selfi.png");
}