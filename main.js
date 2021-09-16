nosex=0;
nosey=0;
function preload() {
    mustace=loadImage('https://i.postimg.cc/fynHN3r6/m-1.png')
}

function setup(){
    canvas=createCanvas(300 , 300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300 , 300);
    video.hide();
    poseNet= ml5.poseNet(video , ModelLoaded);
poseNet.on('pose' , gotPoses);
}
function draw(){
    image(video, 0 , 0 , 300 , 300);
    image(mustace, nosex , nosey , 35 , 35);
}

function take_snapshot()
{
    save('himnish.png');
}

function ModelLoaded() {
    console.log("PoseNet is Initialized");
}

function gotPoses(results) {
    if(results.length>0){
        console.log(results);
        nosex=results[0].pose.nose.x-20;
        nosey=results[0].pose.nose.y+10;
        console.log("nose x="+nosex);
        console.log("nose y=" +nosey);
    }
    }
    