import cv2
from screeninfo import get_monitors
import time

# Add a 10-second delay
#time.sleep(10)

# Read an image or capture video
# For example, capturing from the default camera (camera index 0)
cap = cv2.VideoCapture(0)

# Check if the camera opened successfully
if not cap.isOpened():
    print("Error: Could not open camera.")
    exit()

# Get the width and height of the camera feed
width = int(cap.get(cv2.CAP_PROP_FRAME_WIDTH))
height = int(cap.get(cv2.CAP_PROP_FRAME_HEIGHT))

# Set a specific aspect ratio (e.g., 16:9)
target_aspect_ratio = 16 / 9
new_width = int(height * target_aspect_ratio)

# Get the screen resolution
screen_width, screen_height = 0, 0  # Default values if unable to get the resolution
for monitor in get_monitors():
    screen_width = max(screen_width, monitor.width)
    screen_height = max(screen_height, monitor.height)

# Position the window right up against the upper right corner
offset_x = 10  # Adjust this value to control the gap from the right edge
offset_y= 60
center_x = screen_width - new_width - offset_x
center_y = 0 - offset_y # Place it at the top

# Create a window with the specified aspect ratio, move it, and set as topmost
cv2.namedWindow("Webcam Feed", cv2.WINDOW_NORMAL)
cv2.resizeWindow("Webcam Feed", new_width, height)
cv2.moveWindow("Webcam Feed", center_x, center_y)
cv2.setWindowProperty("Webcam Feed", cv2.WND_PROP_TOPMOST, 1)  # Set as topmost

# Capture and display frames
while True:
    ret, frame = cap.read()

    if not ret:
        print("Error: Failed to capture frame.")
        break

    cv2.imshow("Webcam Feed", frame)

    # Break the loop if 'q' key is pressed
    if cv2.waitKey(1) & 0xFF == ord('q'):
        break

# Release the camera and close the window
cap.release()
cv2.destroyAllWindows()
