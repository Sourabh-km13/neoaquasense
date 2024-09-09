const p=document.getElementById('result')
const resultbar=document.getElementById('resultbar')
const stopbtn=document.getElementById('stopbtn')
const video = document.getElementById('webcam');
const liveView = document.getElementById('liveView');
const demosSection = document.getElementById('demos');
const enableWebcamButton = document.getElementById('webcamButton');

const waterFootprint={person:'100L/day', keyboard:'500L',book:'depends on pages ask chatbot for more info',bottle:'pet plastic bottle 1L-900L',cellphone:'a modern phone 2000L',toothbrush:'plastic toothbrush 150L',laptop:' modern laptop 3000L',remote:'50L',chair:'',spoon:'plastic spoon 100L',tv:'a modern 4500L'}


function getUserMediaSupported() {
    return !!(navigator.mediaDevices &&
      navigator.mediaDevices.getUserMedia);
  }
  
  
  if (getUserMediaSupported()) {
    enableWebcamButton.addEventListener('click', enableCam);
  } else {
    console.warn('getUserMedia() is not supported by your browser');
  }

    function enableCam(event) {

        if (!model) {
        return;
        }
        
      
        event.target.classList.add('removed');  
        
        

        const constraints = {
        video: true
        };
        
       
     
        navigator.mediaDevices.getUserMedia(constraints).then(function(stream) {
        video.srcObject = stream;
        video.addEventListener('loadeddata', predictWebcam);
        });
  }




var model = undefined;

cocoSsd.load().then(function (loadedModel) {
  model = loadedModel;

  demosSection.classList.remove('invisible');
  
});



function predictWebcam() {
    resultbar.classList.remove('removed')
    resultbar.classList.add('flexing')
    stopbtn.classList.remove('removed')
    model.detect(video).then(function (predictions) {

    console.log(resultbar.childNodes);
    
    for (let n = 0; n < predictions.length; n++) {
     
      if (predictions[n].score > 0.66) {
      
        p.innerText = predictions[n].class  + ' - with ' 
            + Math.round(parseFloat(predictions[n].score) * 100) 
            + '% confidence. ' +' waterfootprint='+ 
            waterFootprint[predictions[n].class==='cell phone'?'cellphone':predictions[n].class];
        
        console.log(waterFootprint[predictions[n].class]);

        
        
        
      }
    }
    
     
    
        window.requestAnimationFrame(predictWebcam);
  });
};

