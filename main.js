img="";
status="";


function preload(){
    img=loadImage('dog_cat.jpg');
    }


function setup(){
    canvas= createCanvas(640,420) ;
    canvas.center();
    objectDetector=ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML="Status: Detecting Objects";
}

function modelLoaded(){
    console.log("Model Is Loaded!");
    status=true;
    objectDetector.detect(img, gotResult);
}

function draw(){
    image(img,0,0,640,420);
    fill("#FF0000");
    text("Dog",90,90);
    stroke("#FF0000");
    noFill();
    rect(80,80,300,300);

    fill("#FF0000");
    text("Cat",310,85);
    stroke("#FF0000");
    noFill();
    rect(300,69,300,300);
    
}

function gotResult(error, results){
if(error){
    console.log(error);
}
console.log(results);
}


