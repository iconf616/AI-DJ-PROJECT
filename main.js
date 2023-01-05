
song_1 = "";
song_2="";
leftwristx=0;
rightwristx=0;
leftwristy=0;
rightwristy=0;
score_leftwrist=0;
score_rightwrist=0;


function preload()
{
    song_1=loadSound("Cheap Thrills_64(PagalWorld.com.se).mp3");
    song_2=loadSound("Waka Waka - Shakira.mp3");
}


function setup()
{
    canvas = createCanvas(600, 500);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();

    poseNet=ml5.poseNet(video , modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded()
{
    console.log("Posenet is initialised");
}
function draw()
{
    image(video , 0,0,600,500);
}

function gotPoses(results)
{
    if(results.length>0)
    {
        console.log(results);
        leftwristx=results[0].pose.leftWrist.x;
        leftwristy=results[0].pose.leftWrist.y;
        console.log("leftwristx = " + leftwristx + " leftwristy = " + leftwristy);
        rightwristx=results[0].pose.rightWrist.x;
        rightwristy=results[0].pose.rightWrist.y;
        console.log("rightwristx = " + rightwristx + " rightwristy = " + rightwristy);
        score_leftwrist=results[0].pose.keypoints[9].score;
        console.log("score left wrist = " + score_leftwrist);
        score_rightwrist=results[0].pose.keypoints[10].score;
        console.log("score right wrist = " + score_rightwrist);
    }
}
function isPlaying()
{
    song_1.isPlaying();
}
if(song_1=leftWrist)
{
    song_1="true";
}
else if(song_1!=leftWrist)
{
    song_1="false";
}
else if(song_2=rightWrist)
{
    song_2="true";
}
else if(song_2!=rightWrist)
{
    song_2="false";
}
function draw()
{
    image(video , 0,0,600,500);
    fill("#FF0000");
    stroke("#FF0000");
    if(score_rightwrist>0.2)
    {
    circle(rightwristx,rightwristy,20);
    }
}

