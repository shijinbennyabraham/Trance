from flask import Flask, render_template, request
#from werkzeug import secure_filename
import main
import firebaseFunctions
import subprocess
import json

app = Flask(__name__)

	
# @app.route('/uploader', methods = ['GET', 'POST'])
# def upload_file():
#    if request.method == 'POST':
#       f = request.files['file']
#       print(f)
#       f.save(f.filename)
#       main.main(f.filename)
#       return f

@app.route('/uploader', methods = ['GET', 'POST'])
def upload_file():
   if request.method == 'POST':
      f = request.files['file']
      user=request.form['user']

      myuser=json.loads(user)
      f.save(f.filename)

      main.main(f.filename)
      firebaseFunctions.pushData(myuser, f.filename, 'out.mp4')

      cmd = 'rm out.mp4'
      subprocess.call(cmd,shell=True)
      return "Success"

@app.route('/login', methods = ['GET', 'POST'])
def signIn():
   if request.method == 'POST':
      email = request.form['email']
      password = request.form['password']
      
      user=firebaseFunctions.signIn(email,password)

      if(type(user)==str):
         return {'error':user} #error mssg is returned to user variable
      return user #if no error return user

@app.route('/signUp', methods = ['GET', 'POST'])
def signUp():
   if request.method == 'POST':
      email = request.form['email']
      password = request.form['password']
      
      mssg=firebaseFunctions.signIn(email,password)

      return {'meassage':mssg}

		
if __name__ == '__main__':
   app.run(debug = True)
