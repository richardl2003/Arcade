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
        current_process = subprocess.Popen(['python', '-m', 'navigation.csv', '-f', '1', '-l', '1'])
    except subprocess.CalledProcessError as e:
        print(f"An error occurred: {e}")
    return render_template('App.js')
               
@app.route('/templerun')
def templerun():
    stop_current_process()
    try:
        global current_process
        current_process = subprocess.Popen(['python', '-m', 'templerun.csv', '-f', '1', '-l', '1'])
    except subprocess.CalledProcessError as e:
        print(f"An error occurred: {e}")
    return render_template('templerun.js')

@app.route('/mario')
def mario():
    stop_current_process()
    try:
        global current_process
        current_process = subprocess.Popen(['python', '-m', 'supermario.csv', '-f', '1', '-l', '1'])
    except subprocess.CalledProcessError as e:
        print(f"An error occurred: {e}")
    return render_template('mario.js')

@app.route('/flappybird')
def flappybird():
    stop_current_process()
    try:
        global current_process
        current_process = subprocess.Popen(['python', '-m', 'flappybird.csv', '-f', '1', '-l', '1'])
    except subprocess.CalledProcessError as e:
        print(f"An error occurred: {e}")
    return render_template('flappybird.js')

@app.route('/2048')
def game2048():
    stop_current_process()
    try:
        global current_process
        current_process = subprocess.Popen(['python', '-m', '2048.csv', '-f', '1', '-l', '1'])
    except subprocess.CalledProcessError as e:
        print(f"An error occurred: {e}")
    return render_template('2048.js')

@app.route('/pacman')
def pacman():
    stop_current_process()
    try:
        global current_process
        current_process = subprocess.Popen(['python', '-m', 'pacman.csv', '-f', '1', '-l', '1'])
    except subprocess.CalledProcessError as e:
        print(f"An error occurred: {e}")
    return render_template('pacman.js')

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5050, threaded=True, use_reloader=False)