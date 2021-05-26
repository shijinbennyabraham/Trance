import random
import cv2
import subprocess
import librosa
import numpy as np
import time
import math
import os

lengths=[]
r1=80
for i in range(0,360):
    length=random.randint(r1+80,200)
    lengths.append(length)

def draw(amp):
    img=np.zeros((500,500,3))

    r=random.randint(10,255)
    g=random.randint(10,255)
    b=random.randint(10,255)

    for theta in range(0,360,6):
        r2=lengths[theta]+amp*10000*random.randint(1,5)

        r2=abs(r2)
        if(r2<r1):
            r2=r1+5+random.randint(3,20)

        x1=int(r1*math.cos(theta))+250
        y1=int(r1*math.sin(theta))+250
        x2=int(r2*math.cos(theta))+250
        y2=int(r2*math.sin(theta))+250
        
        cv2.line(img, (x1,y1), (x2,y2), (r,g,b), 4)
    cv2.imwrite("image.jpg",img)

def main(filename):
    # filename="sample.wav"


    # analyzer = AudioAnalyzer()
    # analyzer.load(filename)

    audioData, sfreq=librosa.load(filename)
    duration=len(audioData)/sfreq
    print(duration)
    print(audioData[:10])

    screen_w=500
    screen_h=500

    running = True

    fpsSum=0
    fnum=0
    frames=[]
    print("here")
    startTIme=time.time()
    myfps=1/30

    fpsPerSec=0
    print(len(audioData))

    while running:
        currentTime=time.time()

        effectTime=currentTime-startTIme
        amp=audioData[int(effectTime)]
        if(effectTime>=fpsPerSec*myfps):

            draw(amp)
            frames.append(cv2.imread('image.jpg'))
            fpsPerSec+=1
            fnum+=1
        if(effectTime>=duration):
            running=False
            break
        print(effectTime)


    fps=int(fnum/duration)
    videoResult = cv2.VideoWriter('videoFile.avi', 0, fps, (500,500))
    
    for frame in frames:
        videoResult.write(frame)
    videoResult.release()

    cmd = '/usr/bin/ffmpeg -y -i '+filename+' -i videoFile.avi -shortest out.mp4'
#    subprocess.call(cmd,shell=True)
    os.system(cmd)

    cmd = '/usr/bin/rm -f videoFile.avi'
#    subprocess.call(cmd,shell=True)
    os.system(cmd)

    cmd = '/usr/bin/rm -f image.jpg'
#    subprocess.call(cmd,shell=True)
    os.system(cmd)

    cmd = '/usr/bin/rm -f '+filename+''
#    subprocess.call(cmd,shell=True)
    os.system(cmd)

    # pygame.quit()
#main('PinkPanther30.wav')
