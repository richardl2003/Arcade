import cv2
from flask import Flask, render_template, Response

app = Flask(__name__)

def webcam():
    camera = cv2.VideoCapture(0)

    while True:
        success, frame = camera.read()
        if success:
    
            ret, buffer = cv2.imencode('.jpg', frame)
            frame = buffer.tobytes()
            yield (b'--frame\r\n'
                   b'Content-Type: image/jpeg\r\n\r\n' + frame + b'\r\n')
        else:
            camera.release()

@app.route('/webcam')
def webcam_display():
    return Response(webcam(), mimetype='multipart/x-mixed-replace; boundary=frame')

if __name__ == '__main__':
    app.run(debug=True)