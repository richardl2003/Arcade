from flask import Flask, render_template, Response
from camera import VideoCamera
import subprocess

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('App.js')
    
def gen(camera):
    while True:
        frame = camera.get_frame()
        yield (b'--frame\r\n'
               b'Content-Type: image/jpeg\r\n\r\n' + frame + b'\r\n\r\n')
        
        # Run test.py script
       
        script_path = './test.py' # Using the relative path

        try:
            subprocess.run(['python', script_path], check=True)
        except subprocess.CalledProcessError as e:
            print(f"An error occurred: {e}")
               
@app.route('/video_feed')
def video_feed():
    return Response(gen(VideoCamera()),
                    mimetype='multipart/x-mixed-replace; boundary=frame')

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5050, threaded=True, use_reloader=False)