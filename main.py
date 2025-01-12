import cv2
import dlib
from imutils import face_utils

# Load the face detector and facial landmark predictor
detector = dlib.get_frontal_face_detector()
predictor = dlib.shape_predictor("shape_predictor_68_face_landmarks.dat")

# Start video capture
cap = cv2.VideoCapture(0)

# Variable for tracking previous nose position
prev_nose = None

while True:
    ret, frame = cap.read()
    if not ret:
        break

    # Convert the frame to grayscale
    gray = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)

    # Detect faces in the frame
    faces = detector(gray)

    for face in faces:
        # Get facial landmarks
        landmarks = predictor(gray, face)
        landmarks = face_utils.shape_to_np(landmarks)

        # Get the nose tip (landmark 30)
        nose = landmarks[30]

        if prev_nose is not None:
            # Calculate the difference in nose position
            dx = nose[0] - prev_nose[0]
            dy = nose[1] - prev_nose[1]

            # Determine movement direction
            if abs(dx) > 10:  # Horizontal movement threshold
                direction = "Left" if dx < 0 else "Right"
                print(f"Head Moved {direction}")

            if abs(dy) > 10:  # Vertical movement threshold
                direction = "Up" if dy < 0 else "Down"
                print(f"Head Moved {direction}")

        # Update previous nose position
        prev_nose = nose

    # Display the frame (optional, can be removed if not needed)
    cv2.imshow("Frame", frame)

    # Break loop on 'q' key press
    if cv2.waitKey(1) & 0xFF == ord('q'):
        break

# Release resources
cap.release()
cv2.destroyAllWindows()
