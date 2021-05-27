import cv2


def draw_found_faces(detected, image, color: tuple):
    for (x, y, width, height) in detected:
        cv2.rectangle(
            image,
            (x, y),
            (x + width, y + height),
            color,
            thickness=2
        )


# Capturing the Video Stream
video_capture = cv2.VideoCapture(0)

# Creating the cascade objects
face_cascade = cv2.CascadeClassifier(cv2.data.haarcascades + "haarcascade_frontalface_default.xml")
eye_cascade = cv2.CascadeClassifier(cv2.data.haarcascades + "haarcascade_eye_tree_eyeglasses.xml")

while True:
    # Get individual frame
    _, frame = video_capture.read()
    # Covert the frame to grayscale
    grayscale_image = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)

    # Detect all the faces in that frame
    detected_faces = face_cascade.detectMultiScale(image=grayscale_image, scaleFactor=1.3, minNeighbors=4)
    detected_eyes = eye_cascade.detectMultiScale(image=grayscale_image, scaleFactor=1.3, minNeighbors=4)
    draw_found_faces(detected_faces, frame, (0, 0, 255))
    draw_found_faces(detected_eyes, frame, (0, 255, 0))

    # Display the updated frame as a video stream
    cv2.imshow('Webcam Face Detection', frame)

    # Press the ESC key to exit the loop
    # 27 is the code for the ESC key
    if cv2.waitKey(1) == 27:
        break

# Releasing the webcam resource
video_capture.release()

# Destroy the window that was showing the video stream
cv2.destroyAllWindows()
