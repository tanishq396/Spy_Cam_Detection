// Get access to video stream
const videoElement = document.getElementById('cameraFeed');
const overlayCanvas = document.getElementById('overlay');
const overlayContext = overlayCanvas.getContext('2d');

function startCamera() {
    navigator.mediaDevices.getUserMedia({ video: true })
        .then(stream => {
            videoElement.srcObject = stream;
        })
        .catch(error => {
            console.error('Error accessing camera:', error);
        });
}

// Function to detect spy cams
async function detectSpyCams() {
    const model = await cocoSsd.load();

    // Detect objects in the video stream
    const predictions = await model.detect(videoElement);

    // Check if any of the detected objects is a phone camera
    const isPhoneCameraDetected = predictions.some(prediction => {
        return prediction.class === 'cell phone' || prediction.class === 'mobile phone';
    });

    return isPhoneCameraDetected;
}

// Start monitoring
const startButton = document.getElementById('startButton');
startButton.addEventListener('click', () => {
    startCamera();
    let isMonitoring = true;

    async function monitorSpyCams() {
        if (!isMonitoring) {
            return;
        }

        const isSpyCamDetected = await detectSpyCams();
        if (isSpyCamDetected) {
            alert('Spy cam detected! Network security compromised.');
            isMonitoring = false; // Stop monitoring after detection
        } else {
            requestAnimationFrame(monitorSpyCams); // Continue monitoring
        }
    }

    monitorSpyCams();

    // Draw bounding boxes for detected objects on the overlay canvas
    function renderOverlay(predictions) {
        overlayContext.clearRect(0, 0, overlayCanvas.width, overlayCanvas.height);
        predictions.forEach(prediction => {
            overlayContext.beginPath();
            overlayContext.rect(
                prediction.bbox[0],
                prediction.bbox[1],
                prediction.bbox[2],
                prediction.bbox[3]
            );
            overlayContext.lineWidth = 2;
            overlayContext.strokeStyle = 'red';
            overlayContext.fillStyle = 'red';
            overlayContext.stroke();
            overlayContext.fillText(
                `${prediction.class} (${Math.round(prediction.score * 100)}%)`,
                prediction.bbox[0],
                prediction.bbox[1] > 10 ? prediction.bbox[1] - 5 : 10
            );
        });
    }

    //Continuously update the overlay with object detection results
    async function updateOverlay() {
        if (!isMonitoring) {
            return;
        }
        const predictions = await detectSpyCams();
        renderOverlay(predictions);

        requestAnimationFrame(updateOverlay);
    }

    updateOverlay();
});
