from flask import Flask, render_template, request
#from werkzeug import secure_filename
import main
app = Flask(__name__)

	
@app.route('/uploader', methods = ['GET', 'POST'])
def upload_file():
   if request.method == 'POST':
      f = request.files['file']
      print(f)
      f.save(f.filename)
      main.main(f.filename)
      return f
		
if __name__ == '__main__':
   app.run(debug = True)
