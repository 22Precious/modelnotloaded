status="";
img="";
objects= [];

function preload(){
    img=loadImage('Pillows.jpeg');
}

function setup(){
    canvas=createCanvas(640,420);
    canvas.center();
    objectDetector=ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById('status').innerHTML="Status: Detecting Objects";
}

function modelLoaded(){
    status=true;
    console.log("Model Loaded!");
    objectDetector.detect(img, gotResult);
}

function gotResult(error, results){
    if(error){
        console.log(error);
    }
    console.log(results);
    objects=results;
    }
    
    
function draw(){
        image(img,0,0,640,420);
    
        if(status!="")
        {
        for(i = 0; i < objects.length; i++)
        {
        document.getElementById("status").innerHTML="Status: Object Detected";
        document.getElementById("no_of_objects").innerHTML="The number of objects is " + objects.length;
    
        fill("#ff0000");
        percent=floor(object[i].confidence*100);
        text(objects[i].label+ " " +percent+ "%" ,objects[i].x + 15,objects[i].y + 15);
        noFill();
        stroke("#ff0000");
        rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
        }}}