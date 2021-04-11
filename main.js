var modal = document.getElementById("myModal");
var btn = document.getElementById("help");
btn.onclick = function(){
    modal.style.display="block";
}
var myclose=document.getElementById("close");
myclose.onclick = function(){
    modal.style.display="none";
}
var difference=0;

function setup(){
    video = createCapture(VIDEO);
    video.size(600,400);
    video.position(150,200);
    video.attribute("id","video");
    canvas = createCanvas(600,400);
    canvas.position(825,200);
    poseNet = ml5.poseNet(video,modalLoaded);
    poseNet.on('pose',gotResult);
}
function modalLoaded(){
    console.log("THE MODAL HAS BEEN LOADED !");
}
function gotResult(result){
    if(result.length>0){
        console.log(result);
        rightWrist=result[0].pose.rightWrist.x;
        leftWrist=result[0].pose.leftWrist.x;
        difference=floor(leftWrist-rightWrist);
        console.log("DIFFERENCE = "+difference);
    }
}

function draw(){
    background("#555b5e93");
    fill("#4dd8d7");
    textSize(difference);
    text("Notice Board", 50,250);
}
    
    