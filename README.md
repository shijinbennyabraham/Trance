![BFH Banner](https://trello-attachments.s3.amazonaws.com/542e9c6316504d5797afbfb9/542e9c6316504d5797afbfc1/39dee8d993841943b5723510ce663233/Frame_19.png)
## Trance


The project TRANCE is a music visualizer web app to generate animated visualizations according to the beats of an uploaded music or audio file.
## Team members
1. N Athul Kumar [https://github.com/athulatk]
2. Shuhaib Ibrahim [https://github.com/shuhaibibrahim]
3. Shijin Benny Abraham [https://github.com/shijinbennyabraham]
## Team Id
BFH/rect9uCvbefeS5Bqa/2021
## Link to product walkthrough
[https://www.loom.com/share/18f4d5869ede41e28c1f3046923a9fd5]
## How it Works ?
Step-1 Click the link to move into the Trance web application.[https://trance-music-visualizer.netlify.app/]

Step-2 Enter the user credentials to Login or Signup into the Home page.

Step-3 After successful Login or Signup, We can able to upload wav format(Music files) file into it.

Step-4 Then, there appear two new buttons re-upload and visualization.

Step-5 Using visualization we can able to preview the animated video generated with the beats of the input file.

Step-6 After that we can download the mp4 file and also preview the saved files too.

Step-7 finally there is an icon for logout to logout from this web application.

## Libraries used
Flask(2.0.0)

Flask is a popular Python web framework, meaning it is a third-party Python library used for developing web applications.
for more information check the documentation
[https://flask.palletsprojects.com/en/2.0.x/]


Flask cors(3.0.10)

A Flask extension for handling Cross Origin Resource Sharing (CORS), making cross-origin AJAX possible. This package has a 
simple philosophy: when you want to enable CORS, you wish to enable it for all use cases on a domain. This means no mucking 
around with different allowed headers, methods, etc.
for more information check the documentation
[https://flask-cors.readthedocs.io/en/latest/]


Open cv python(4.4.0.44)

OpenCV (Open Source Computer Vision Library) is an open-source computer vision and machine learning software library. OpenCV 
was built to provide a common infrastructure for computer vision applications and to accelerate the use of machine perception 
in commercial products.
for more information check the documentation
[https://docs.opencv.org/master/d6/d00/tutorial_py_root.html]


Librosa(0.8.0)

librosa is a python package for music and audio analysis. It provides the building blocks necessary to create music 
information retrieval systems.
for more information check the documentation
[https://librosa.org/doc/latest/index.html]


Numpy(1.18.5)

NumPy is a Python library used for working with arrays. It also has functions for working in domain of linear algebra, fourier 
transform, and matrices. NumPy was created in 2005 by Travis Oliphant. It is an open source project and you can use it freely.
for more information check the documentation
[https://numpy.org/doc/]


FFmpeg

ffmpeg is a command-line tool that converts audio or video formats. 
for more information check the documentation
[https://ffmpeg.org/ffmpeg.html]


System libraries

time-> The time() function returns the number of seconds passed since epoch. 
math-> The Python Math Library provides us access to some common math functions and constants in Python
sub process-> The subprocess module present in Python(both 2. ... x) is used to run new applications or programs through Python code by creating new processes.
random-> The Python standard library provides a module called random that offers a suite of functions for generating random numbers


Reactjs

React. js is an open-source JavaScript library that is used for building user interfaces specifically for single-page applications. It's used for handling the
view layer for web and mobile apps. React also allows us to create reusable UI components.
for more information check the documentation
[https://reactjs.org/docs/getting-started.html]

## How to configure
React setup
Now we are discussing about how to set up an environment for successful Reactjs,
We will need NodeJS, so if you don't have it installed then install Nodejs and Npm 
This is a documentation link for installing nodejs [https://www.tutorialspoint.com/nodejs/nodejs_environment_setup.htm](tutorialspoint)
After installing nodejs then we can install npm by using the command "npm install"

Now we completed the configuration setup for the Trance Music Visualizer web application.
### How to Run
Step-1 Open your terminal and then type
$ git clone {the url to the GitHub repo}
#This clones the repo

Step-2 $cd frontend into the new folder and type

Step-3 $ npm install
#This installs the required dependencies

Step-4 $ npm start
#To run the React project



To run the flask application 


Step-1 Move to backend folder.

Step-2 Run the command pip install -r requirements.txt
       (This will install most of the necessary pakages 
       The missing packages can be installed using the 
       command: pip install <package name>)
       
Step-3 Run the python file trance.py
 

You are done!
