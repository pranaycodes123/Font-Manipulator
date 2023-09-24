function setup(){
    video=createCapture(VIDEO);
    video.size(550);
    canvas=createCanvas(500,500);
    canvas.center();
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}
function modelLoaded(){
    console.log('posenet is intialized');
}
function gotPoses(results){
    
}

