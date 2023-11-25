from flask import Flask, render_template, Response
from camera import VideoCamera
import subprocess
from play import process_poses, map_keys
from contextlib import ExitStack
import mediapipe as mp
import cv2
import argparse
import datetime

DEFAULT_LANDMARKS_STYLE = mp.solutions.drawing_styles.get_default_pose_landmarks_style()

# Optionally record the video feed to a timestamped AVI in the current directory
RECORDING_FILENAME = str(datetime.now()).replace('.','').replace(':','') + '.avi'
FPS = 10

VISIBILITY_THRESHOLD = .8 # amount of certainty that a body landmark is visible
STRAIGHT_LIMB_MARGIN = 20 # degrees from 180
EXTENDED_LIMB_MARGIN = .8 # lower limb length as fraction of upper limb

ARM_CROSSED_RATIO = 2 # max distance from wrist to opposite elbow, relative to mouth width

MOUTH_COVER_THRESHOLD = .03 # hands over mouth max distance error out of 1

LEG_LIFT_MIN = -10 # degrees from horizontal

SQUAT_THRESHOLD = .1

JUMP_THRESHOLD = .0001

# R side: 90 top to 0 right to -90 bottom
# L side: 90 top to 180 left to 269... -> -90 bottom
semaphores = {}

LEG_EXTEND_ANGLE = 18 # degrees from vertical standing; should be divisor of 90
leg_extension_angles = {
    (-90, -90 + LEG_EXTEND_ANGLE): (True, 0), # right leg, low
    (-90, -90 + 2*LEG_EXTEND_ANGLE): (True, 1), # right leg, high
    (270 - LEG_EXTEND_ANGLE, -90): (False, 0), # left leg, low
    (270 - 2*LEG_EXTEND_ANGLE, -90): (False, 1), #left leg high
}

FRAME_HISTORY = 8 # pose history is compared against FRAME_HISTORY recent frames
HALF_HISTORY = int(FRAME_HISTORY/2)

empty_frame = {
'hipL_y': 0,
'hipR_y': 0,
'hips_dy': 0,
}
last_frames = FRAME_HISTORY*[empty_frame.copy()]

frame_midpoint = (0,0)

last_keys = [[]]


app = Flask(__name__)

@app.route('/')
def index():
    return render_template('App.js')

def gen():
    global last_frames, last_keys, frame_midpoint

    """
    parser = argparse.ArgumentParser()
    parser.add_argument('--map', '-m', help='File to import for mapped keys')
    parser.add_argument('--input', '-i', help='Input video device or file (number or path), defaults to 0', default='0')
    parser.add_argument('--flip', '-f', help='Set to any value to flip resulting output (selfie view)')
    parser.add_argument('--landmarks', '-l', help='Set to any value to draw body landmarks')
    parser.add_argument('--record', '-r', help='Set to any value to save a timestamped AVI in current directory')
    parser.add_argument('--display', '-d', help='Set to any value to only visually display output rather than type')
    parser.add_argument('--split', '-s', help='Split the screen into a positive integer of separate regions, defaults to 1', default='1')
    args = parser.parse_args()

    INPUT = int(args.input) if args.input.isdigit() else args.input
    FLIP = args.flip is not None
    DRAW_LANDMARKS = args.landmarks is not None
    RECORDING = args.record is not None
    DISPLAY_ONLY = args.display is not None
    SPLIT = int(args.split)
    """
    INPUT = 0
    FLIP = True
    DRAW_LANDMARKS = True
    RECORDING = False
    DISPLAY_ONLY = False
    SPLIT = 1

    last_frames = SPLIT * [last_frames.copy()]
    last_keys = SPLIT * [[]]

    cap = cv2.VideoCapture(INPUT)

    frame_size = (int(cap.get(3)), int(cap.get(4)))
    frame_midpoint = (int(frame_size[0]/2), int(frame_size[1]/2))

    recording = cv2.VideoWriter(RECORDING_FILENAME,
        cv2.VideoWriter_fourcc(*'MJPG'), FPS, frame_size) if RECORDING else None

    MAP_FILE = args.map
    map_keys(MAP_FILE, SPLIT)

    with ExitStack() as stack:
        pose_models = stack.enter_context(mp.solutions.pose.Pose())

        while True:
            success, image = cap.read()
            if not success:
                break

            image = process_poses(image, pose_models, DRAW_LANDMARKS, FLIP, DISPLAY_ONLY)

            ret, buffer = cv2.imencode('.jpg', image)
            frame = buffer.tobytes()
            yield (b'--frame\r\n'
                   b'Content-Type: image/jpeg\r\n\r\n' + frame + b'\r\n')
               
@app.route('/video_feed')
def video_feed():
    return Response(gen(),
                    mimetype='multipart/x-mixed-replace; boundary=frame')

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5050, threaded=True, use_reloader=False)