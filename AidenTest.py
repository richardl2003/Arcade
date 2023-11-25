import cv2
import mediapipe as mp
import time

# Initialize MediaPipe Hands
mp_hands = mp.solutions.hands
hands = mp_hands.Hands()

# Open webcam
cap = cv2.VideoCapture(0)

start_time = time.time()
while cap.isOpened():
    ret, frame = cap.read()
    if not ret:
        print("Failed to capture frame.")
        break

    # Flip the frame horizontally
    frame = cv2.flip(frame, 1)

    # Convert the BGR image to RGB
    rgb_frame = cv2.cvtColor(frame, cv2.COLOR_BGR2RGB)

    # Process the frame with MediaPipe Hands
    results_hands = hands.process(rgb_frame)

    # Draw a medium-sized black rectangle outline on the screen
    rect_size = 50
    rect_thickness = 2  # Thickness of the rectangle outline
    rect_color = (0, 0, 0)
    cv2.rectangle(frame, (10, 10), (10 + rect_size, 10 + rect_size), rect_color, rect_thickness)

    # Overlay the green circle on landmark 9
    if results_hands.multi_hand_landmarks:
        for landmarks in results_hands.multi_hand_landmarks:
            # Get the coordinates of landmark 9
            landmark_9 = landmarks.landmark[8]
            h, w, _ = frame.shape
            x, y = int(landmark_9.x * w), int(landmark_9.y * h)

            # Draw the green circle on landmark 9
            cv2.circle(frame, (x, y), 5, (0, 255, 0), -1)

            

            # Check if landmark 9 is inside the black rectangle
            if 10 < x < (10 + rect_size) and 10 < y < (10 + rect_size):
                print("YOURE IN")

    # Display the inverted frame
    cv2.imshow("Landmark 9 with Rectangle (Inverted)", frame)

    # Break the loop when 'q' is pressed
    if cv2.waitKey(1) & 0xFF == ord('q'):
        break

# Release the capture and destroy any OpenCV windows
cap.release()
cv2.destroyAllWindows()

# Release the MediaPipe hands model
hands.close()

