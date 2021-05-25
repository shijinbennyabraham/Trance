from flask import Flask, render_template, request
#from werkzeug import secure_filename
from app import musicViz
from app import firebaseFunctions
import subprocess
import json
from flask_cors import CORS

app = Flask(__name__)
CORS(app, support_credentials=True)
#nothing
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
   # if request.method == 'POST':
   f = request.files['file']
   localId=request.form['localId']
   idToken=request.form['idToken']

   # myuserTxt=json.dumps(user)
   # myuser=json.loads(user)
   # print("uid = ",uid)
   f.save(f.filename)

   musicViz.main(f.filename)
   fileData=firebaseFunctions.pushData(localId, idToken, f.filename, 'out.mp4')

   cmd = 'rm out.mp4'
   subprocess.call(cmd,shell=True)
   # print(request)
   return json.dumps({'data':fileData}), 200, {'ContentType':'application/json'} 

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
      
      user=firebaseFunctions.createUser(email,password)

      if(type(user)==str):
         return {'error':user} #error mssg is returned to user variable
      return user #if no error return user

		
if __name__ == '__main__':
   app.run(debug = True)
