const modelParams = {
  flipHorizontal: true,   // flip e.g for video
  imageScaleFactor: 0.7,  // reduce input image size for gains in speed.
  maxNumBoxes: 20,        // maximum number of boxes to detect
  iouThreshold: 0.5,      // ioU threshold for non-max suppression
  scoreThreshold: 0.79,    // confidence threshold for predictions.
}




navigator.getUserMedia=navigator.GetUserMedia||navigator.webkitGetUserMedia||navigator.mozGetUserMedia;

const audio=document.querySelector('#audio_tag');
const video=document.querySelector('#video_tag'); //Parameters are ID
const canvas=document.querySelector('#canvas_tag');
const context=canvas.getContext('2d');
let model;
 //Load the Model and Track

handTrack.startVideo(video)
          .then(status=>{
            if(status)
            {
              navigator.getUserMedia( { video:{} },stream =>{
                video.srcObject=stream;
                setInterval(runDetection,1000);
              },
              err=>console.log(err));

            }
          });
function runDetection()
{ // Arrow functions are a short syntax, introduced by ECMAscript 6,
  // that can be used similarly to the way you would use function expressions.
  model.detect(video).then(predictions=>{
    console.log(predictions);
    model.renderPredictions(predictions,canvas,context,video);
  });
}

 handTrack.load(modelParams)
          .then(lmodel=>{
            model=lmodel;
          });
