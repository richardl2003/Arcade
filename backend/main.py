from flask import Flask, render_template, Response
from camera import VideoCamera
import subprocess

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('App.js')
    
def gen():
    while True:
        script_path = './play.py' # Using the relative path

        try:
            subprocess.run(['python', script_path, "-f 1 -l 1 -m supermario.csv"], check=True)
        except subprocess.CalledProcessError as e:
            print(f"An error occurred: {e}")
               
@app.route('/video_feed')
def video_feed():
    return Response(gen(),
                    mimetype='multipart/x-mixed-replace; boundary=frame')

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5050, threaded=True, use_reloader=False)