let videoElement = document.getElementsByTagName("video")[0];

let startButton = document.getElementsByTagName("button")[0];

async function startCamera() {
    console.log('start cammera from function')

    const allawed = {audio : false , video:true}

   try{
     const outPut = await navigator.mediaDevices.getUserMedia(allawed) 
     videoElement.srcObject = outPut
   }catch(error){
    console.log('error')
    console.log("user not allawed")
   }

    
}

startButton.addEventListener("click", () => {
  console.log("start cammera from button");
  startCamera();
});

startButton.backgroundColor = "red";
