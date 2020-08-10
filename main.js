video="";
status="";
objects=[];

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
    if(status!=""){
        objectDetector.detect(video, gotResult);

        for(i=0; i<objects.length; i++)
        {
            document.getElementById("status").innerHTML="status: object detected";
            document.getElementById("no_of_objects").innerHTML="No of objects are"+objects.length;
            fill('#eb3434');
            stroke('#eb3434');
            noFill();
            percent=floor(objects[i].confidence*100);
            text(objects[i].label + " " + percent + "%",objects[i].x + 15, objects[i].y + 15);
            rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);
        }
    }
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

function gotResult(error, results)
{
    if(error)
    {
        console.log(error);
    }
    else{
        console.log(results);
        objects=results;
    }
}