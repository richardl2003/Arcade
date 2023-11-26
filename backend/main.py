from flask import Flask, render_template
import subprocess
import signal

app = Flask(__name__)
current_process = None

def stop_current_process():
    global current_process
    if current_process and current_process.poll() is None:
        current_process.terminate()
        current_process.wait()

@app.route('/')
def index():
    stop_current_process()
    try:
        global current_process
        current_process = subprocess.Popen('python play.py -m navigation.csv -f 1 -l 1')
    except subprocess.CalledProcessError as e:
        print(f"An error occurred: {e}")
    return "1"
               
@app.route('/templerun')
def templerun():
    stop_current_process()
    try:
        global current_process
        current_process = subprocess.Popen('python play.py -m templerun.csv -f 1 -l 1')
    except subprocess.CalledProcessError as e:
        print(f"An error occurred: {e}")
    return "1"

@app.route('/mario')
def mario():
    stop_current_process()
    try:
        global current_process
        current_process = subprocess.Popen('python play.py -m supermario.csv -f 1 -l 1')
    except subprocess.CalledProcessError as e:
        print(f"An error occurred: {e}")
    return "1"

@app.route('/flappybird')
def flappybird():
    stop_current_process()
    try:
        global current_process
        current_process = subprocess.Popen('python play.py -m flappybird.csv -f 1 -l 1')
    except subprocess.CalledProcessError as e:
        print(f"An error occurred: {e}")
    return "1"

@app.route('/2048')
def game2048():
    stop_current_process()
    try:
        global current_process
        current_process = subprocess.Popen('python play.py -m 2048.csv -f 1 -l 1')
    except subprocess.CalledProcessError as e:
        print(f"An error occurred: {e}")
    return "1"

@app.route('/pacman')
def pacman():
    stop_current_process()
    try:
        global current_process
        current_process = subprocess.Popen('python play.py -m pacman.csv -f 1 -l 1')
    except subprocess.CalledProcessError as e:
        print(f"An error occurred: {e}")
    return "1"

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5050, threaded=True, use_reloader=False)