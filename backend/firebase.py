import firebase_admin
from firebase_admin import credentials
from firebase_admin import auth
from firebase_admin.exceptions import FirebaseError
import json

cred = credentials.Certificate("trance-a6dab-firebase-adminsdk-swtyf-32f78582d6.json")
firebase_admin.initialize_app(cred)

def createUser(email, password):
    try:
        userCred=auth.create_user(email=email, password=password)  
        print(json(userCred))
    except FirebaseError as error:
        return print(error)


email=input("email : ")
password=input("password : ")
createUser(email,password)