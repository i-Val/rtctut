const constraints = {
    'video': true,
    'audio':{ 'echoCancellation': true}
}
const constraints2 = {
    'video': {
        cursor: 'always',
        displaySurface: 'browser'
    }
}

navigator.mediaDevices.getUserMedia(constraints)
    .then(stream => {
        const videoElement = document.querySelector('video#local')
        videoElement.srcObject = stream
    })
    .catch(error => {
        console.error('Error accessing media devices.', error)
    })
function activate(){
    navigator.mediaDevices.getDisplayMedia(constraints2)
        .then(stream2 => {
            const videoElement2 = document.querySelector('video#local2')
            videoElement2.srcObject = stream2
        })
        .catch(error2 => {
            console.error('Error accessingdisplay media.', error2)
        })
    }