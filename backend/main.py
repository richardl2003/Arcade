from flask import Flask, render_template
import subprocess

app = Flask(__name__)

@app.route('/')
def index():
    try:
        print("entered")
        subprocess.run('python play.py -m navigation.csv -f 1 -l 1', check=True)
        print("success")
    except subprocess.CalledProcessError as e:
        print(f"An error occurred: {e}")
    return render_template('App.js')
               
@app.route('/templerun')
def templerun():
    try:
        subprocess.run('python play.py -m templerun.csv -f 1 -l 1', check=True)
    except subprocess.CalledProcessError as e:
        print(f"An error occurred: {e}")
    return render_template('templerun.js')

@app.route('/mario')
def mario():
    try:
        subprocess.run('python play.py -m supermario.csv -f 1 -l 1', check=True)
    except subprocess.CalledProcessError as e:
        print(f"An error occurred: {e}")
    return render_template('mario.js')

@app.route('/flappybird')
def flappybird():
    try:
        subprocess.run('python play.py -m flappybird.csv -f 1 -l 1', check=True)
    except subprocess.CalledProcessError as e:
        print(f"An error occurred: {e}")
    return render_template('mario.js')

@app.route('/2048')
def game2048():
    try:
        subprocess.run('python play.py -m 2048.csv -f 1 -l 1', check=True)
    except subprocess.CalledProcessError as e:
        print(f"An error occurred: {e}")
    return render_template('mario.js')

@app.route('/pacman')
def pacman():
    try:
        subprocess.run('python play.py -m pacman.csv -f 1 -l 1', check=True)
    except subprocess.CalledProcessError as e:
        print(f"An error occurred: {e}")
    return render_template('mario.js')

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5050, threaded=True, use_reloader=False)