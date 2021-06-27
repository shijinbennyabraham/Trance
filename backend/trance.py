from flask import Flask, render_template, request
#from werkzeug import secure_filename
import musicViz
import firebaseFunctions
import subprocess
import json
from flask_cors import CORS
import os
#import sentry_sdk
#from flask import Flask
#from sentry_sdk.integrations.flask import FlaskIntegration

#sentry_sdk.init(
#    dsn="https://47e94d527c0a478dba056f17b73ac43d@o702024.ingest.sentry.io/5777394",
#    integrations=[FlaskIntegration()],

    # Set traces_sample_rate to 1.0 to capture 100%
    # of transactions for performance monitoring.
    # We recommend adjusting this value in production.
#    traces_sample_rate=1.0
#)

app = Flask(__name__)
CORS(app, support_credentials=True)

#@app.route('/debug-sentry')
#def trigger_error():
#    division_by_zero = 1 / 0

@app.route('/', methods = ['GET', 'POST'])
def hello():
    return "Hello World"


@app.route('/uploader', methods = ['GET', 'POST'])
def upload_file():
   # if request.method == 'POST':
   f = request.files['file']
   localId=request.form['localId']
   idToken=request.form['idToken']

   f.save(f.filename)
   # myuserTxt=json.dumps(user)
   # myuser=json.loads(user)
   # print("uid = ",uid)
   newFname=f.filename
   if(newFname.split('.')[1]=="mp3"):
       newFname=f.filename.split('.')[0]+'.wav'
       cmd="/usr/bin/ffmpeg -i "+f.filename+" -acodec pcm_u8 -ar 22050 "+newFname
       os.system(cmd)

   musicViz.main(newFname)
   fileData=firebaseFunctions.pushData(localId, idToken, newFname, 'out.mp4')

   cmd = '/usr/bin/rm out.mp4'
   os.system(cmd)

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
   app.run(debug = True, host = "0.0.0.0")
