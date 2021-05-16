img="";
status="";
objects=[];
function setup(){
canvas=createCanvas(640,420);
canvas.center();
objectDetector=ml5.objectDetector("cocossd",modelLoaded);
document.getElementById("status").innerHTML="status:detecting objects";
}
function preload(){
img=loadImage("People.jpg");
}
function draw(){
image(img,0,0,640,420);
//fill("#0000FF");
//("Dog",45,75);
//noFill();
//stroke("#0000FF");
//rect(30,60,450,350);
//fill("#0000FF");
//text("cat",320,120);
//noFill();
//stroke("#FF0000");
//rect(300,90,300,300);
if(status !="")
{
    for(i=0;i<objects.length;i++){
        document.getElementById("status").innerHTML="Status:Object Detected"
    fill("#0000FF");
    percent=floor(objects[i].confidence*100);
    text(objects[i].label+" "+percent+"%",objects[i].x+15,objects[i].y+15);
    noFill();
    stroke("#0000FF");
    rect (objects[i].x,objects[i].y,objects[i].width,objects[i].height);
}

}
}
function modelLoaded(){
    console.log("Model is loaded");
    status=true;
    objectDetector.detect(img,gotresult);
}
function gotresult(error,results){
if(error){
    console.log(error);

}    
console.log(results);
objects=results;
}
function d(){
    window.location="index.html";
}
