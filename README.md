Project Report: Spy Cam Detection

Contributors - Tanishq Shah, Mahima Sharma, Aditya Inamdar

Table of Contents -

![image](https://github.com/tanishq396/Spy_Cam_Detection/assets/65888542/8f32f81b-c61d-4c80-88cf-c6490962adeb)

1. Introduction -

The Spy Cam Detection project is designed to address the growing concern of unauthorized surveillance through hidden spy cameras. These devices can compromise privacy and security in various settings, including homes, offices, and public spaces. This report provides an overview of the project, its technical details, implementation, results, and future enhancements.

2. Project Overview -

The Spy Cam Detection project utilizes computer vision and machine learning techniques to detect hidden spy cameras within a given environment. The core components of the project include:

- Video Stream: The project accesses the device's camera feed using web technologies.
- Object Detection: It employs the COCO-SSD (Common Objects in Context - Single Shot MultiBox Detector) model to detect objects in the video stream. Specifically, it focuses on identifying objects resembling cell phones or mobile phones.
- Real-time Monitoring: The system continuously monitors the video feed and alerts the user when it detects a potential spy camera.
- User Interface: The user interacts with the system through a web interface that displays the live camera feed and detection results.

3. Technical Details

3.1. Hardware and Software Requirements

- Hardware:
  - A computer or mobile device with a camera.
 
- Software:
  - A modern web browser that supports the `navigator.mediaDevices.getUserMedia` API.
  - TensorFlow.js library (version 3.9.0).
  - COCO-SSD model from TensorFlow.js (version 3.9.0).

3.2. System Architecture
The project's system architecture can be summarized as follows:

- Web Interface: The user interacts with the system through a web interface that displays the camera feed and detection results. HTML, CSS, and JavaScript are used to create and manage this interface.
- Video Stream: The system captures the live camera feed using the `navigator.mediaDevices.getUserMedia` API and displays it in an HTML `video` element.
- Object Detection: The COCO-SSD model, loaded using TensorFlow.js, is used to perform object detection on the video frames. It identifies objects resembling cell phones or mobile phones in real-time.
- Monitoring: Real-time monitoring of the video stream is achieved through JavaScript functions that repeatedly call the object detection and rendering functions.

4. Implementation -

The implementation of the Spy Cam Detection project is divided into several key components:

- Video Stream: The project accesses the user's camera using the `getUserMedia` API and displays the live stream on the web page.
- Object Detection: COCO-SSD is used to identify objects in the video stream. Detected objects are drawn with bounding boxes and labels on a canvas overlay.
- Monitoring: The system continuously monitors the video feed for objects resembling spy cameras. When a potential spy camera is detected, an alert is triggered, and monitoring is halted.


5. Results -

The Spy Cam Detection project has been successfully implemented and tested. It effectively detects objects resembling cell phones or mobile phones in real-time video streams. When a potential spy camera is detected, the system promptly alerts the user, indicating a potential security threat.

6. Conclusion -

The Spy Cam Detection project offers a valuable solution to address the growing concern of unauthorized surveillance through hidden cameras. By utilizing computer vision and machine learning techniques, it provides real-time monitoring and alerts users when potential spy cameras are detected. This project can be a useful tool for safeguarding privacy and security in various settings.

7. Future Enhancements -

While the project is functional, there is room for improvement and future enhancements:

- Enhanced Object Recognition: Improving the accuracy and range of recognized objects to cover a broader spectrum of spy cameras.
- Integration with Security Systems: Integrating the system with home or office security systems to provide real-time alerts and actions.
- Mobile Application: Developing a mobile application for easy access and monitoring from smartphones.

8. References -

- TensorFlow.js Documentation: https://www.tensorflow.org/js
- COCO-SSD Model: https://github.com/tensorflow/tfjs-models/tree/main/coco-ssd

![image](https://github.com/tanishq396/Spy_Cam_Detection/assets/65888542/25b429eb-6a4b-4286-81f1-3d1895eb03e8)

![image](https://github.com/tanishq396/Spy_Cam_Detection/assets/65888542/3e573e72-e9d3-46a5-a7de-0ed522885484)

This concludes the report on the Spy Cam Detection project. The system's successful implementation and potential for future enhancements make it a valuable tool in addressing privacy and security concerns related to hidden spy cameras.


