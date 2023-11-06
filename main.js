function setup (){
    video = createCapture(VIDEO)
    video.size(600,500);
    video.position(150,150)

    canvas= createCanvas(600,500)
    canvas.position(800,150)
    poseNet = ml5.poseNet(video, modelLoaded) ;
    poseNet.on("pose",gotPoses);

}

function draw  (){

}

function modelLoaded(){
    console.log("PoseNet is initialized!");

}

function gotPoses(results)
{
    if(results.length > 0 )
    {
        console.log(results);
    }
}