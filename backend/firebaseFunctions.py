# import firebase_admin
# from firebase_admin import credentials
# from firebase_admin.exceptions import FirebaseError
import json
import pyrebase

# cred = credentials.Certificate("trance-a6dab-firebase-adminsdk-swtyf-32f78582d6.json")
# firebase_admin.initialize_app(cred)

firebaseConfig = {
    "apiKey": "AIzaSyB8-A-Z9188H6PH8vzeDOF1ajk3ybe7Aao",
    "authDomain": "trance-a6dab.firebaseapp.com",
    "projectId": "trance-a6dab",
    "databaseURL":"https://trance-a6dab-default-rtdb.firebaseio.com/",
    "storageBucket": "trance-a6dab.appspot.com",
    "messagingSenderId": "205361687803",
    "appId": "1:205361687803:web:1b018393092c3f75f7545e",
    "measurementId": "G-EPZE2FJJWD"
}
firebase = pyrebase.initialize_app(firebaseConfig)

auth = firebase.auth()
storage = firebase.storage()
db=firebase.database()

def signIn(email, password):
    try:
        user = auth.sign_in_with_email_and_password(email, password)
        # myuser=json(user)
        print(user)
        print(type(user))
        return user
    except :
        return "Error occured while login"


def createUser(email, password):
    try:
        auth.create_user_with_email_and_password(email, password)
        return "Successfull"
    except :
        return "Unsuccessfull"

def upload(localId, idToken, filename, videoFile):
    videoUrl=storage.child('videos/'+localId+"/"+filename).put(videoFile, idToken)
    # print(videoUrl)
    return storage.child('videos/'+localId+"/"+filename).get_url(videoUrl['downloadTokens'])

def pushData(localId, idToken, filename, videoFile):

    url=upload(localId, idToken, filename, videoFile)
    data={
        'url':url,
        'filename':filename
    }
    db.child("users/"+localId).push(data)
    return data


# email=input("email : ")
# password=input("password : ")
# user=signIn(email,password)

# pushData(user, filename, 'out.mp4')