// Get access to video stream
const videoElement = document.getElementById('cameraFeed');

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
function detectSpyCams() {
  const canvas = document.createElement('canvas');
  const context = canvas.getContext('2d');

  // Set the canvas dimensions to match the video stream
  canvas.width = videoElement.videoWidth;
  canvas.height = videoElement.videoHeight;

  // Draw the video frame onto the canvas
  context.drawImage(videoElement, 0, 0, canvas.width, canvas.height);

  // Get the pixel data from the canvas
  const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
  const pixels = imageData.data;

  const spyCamColor = [255, 0, 0]; // Color values for spy cam detection (red)

  // Iterate through each pixel and compare with spy cam color
  for (let i = 0; i < pixels.length; i += 4) {
    const red = pixels[i];
    const green = pixels[i + 1];
    const blue = pixels[i + 2];

    // Compare the pixel color with the spy cam color
    const colorDifference = Math.sqrt(
      Math.pow(red - spyCamColor[0], 2) +
      Math.pow(green - spyCamColor[1], 2) +
      Math.pow(blue - spyCamColor[2], 2)
    );

    // If the color difference is below a certain threshold, consider it a spy cam
    if (colorDifference < 100) {
      return true; // Spy cam detected
    }
  }

  return false; // No spy cams detected
}

// Start monitoring
const startButton = document.getElementById('startButton');
startButton.addEventListener('click', () => {
  startCamera();
  let isMonitoring = true;

  function monitorSpyCams() {
    if (!isMonitoring) {
      return;
    }

    const isSpyCamDetected = detectSpyCams();
    if (isSpyCamDetected) {
      alert('Spy cam detected! Network security compromised.');
      isMonitoring = false; // Stop monitoring after detection
    } else {
      setTimeout(monitorSpyCams, 1000); // Continue monitoring after a delay
    }
  }

  monitorSpyCams();
});
