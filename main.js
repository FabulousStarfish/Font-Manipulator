var modal = document.getElementById("myModal");
var btn = document.getElementById("help");
btn.onclick = function(){
    modal.style.display="block";
}
var myclose=document.getElementById("close");
myclose.onclick = function(){
    modal.style.display="none";
}

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
    }
}
