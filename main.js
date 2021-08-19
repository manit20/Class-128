song = "";
leftWristX = 0;
leftWristY = 0;
rightWristX = 0;
rightWristY = 0;

function preload(){
    song = loadSound("music.mp3");
}

function setup(){
    canvas = createCanvas(600, 500);
    canvas.position(420, 200);
    video = createCapture(VIDEO);
    video.hide()

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);
}

function draw(){
    image(video, 0, 0, 600, 500);
}

function play(){
    song.play();
    song.setVolume(1);
    song.rate(1);
}

function pause(){
    song.pause();
}

function stop(){
    song.stop();
}

function modelLoaded(){
    console.log("PoseNet Is Initialized");
}

function gotPoses(result){
    if(result.length > 0){
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        console.log("Left Wrist X = " + leftWristX + "  Left Wrist Y = " + leftWristY);

        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.righttWrist.y;
        console.log("Right Wrist X = " + rightWristX + "  Right Wrist Y = " + rightWristY);
    }
}