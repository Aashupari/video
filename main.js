video="";
status="";

function setup()
{
    canvas=createCanvas(500, 400);
    canvas.center();
}

function preload()
{
    video= createVideo('video.mp4');
    video.hide();
}

function draw()
{
    image(video, 0, 0, 500, 400);
}

function start()
{
    objectDetector= ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML="Status: detecting object";
}

function modelLoaded()
{
    console.log("Model is loaded")
    video.loop();
    video.speed(1);
    video.volume(1);
    status=true;
}