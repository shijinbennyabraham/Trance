import './App.css';
import Login from './Login'
import Home from './Home'
import Header from './Header'
import Videopreview from './Videopreview'
import firebase, { auth, provider } from './firebase_config';
import { useEffect, useState } from 'react';
import axios from 'axios'

function App() {

  const [user, setUser] = useState(null)

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } 
    });
  }, [])

  const loginFunc=(email, password)=>{
    // console.log("here")

    const formData = new FormData();

    formData.append("email", email);
    formData.append("password", password)
    axios({
      method: 'post',
      url: 'http://ec2-18-117-66-244.us-east-2.compute.amazonaws.com/login',
      data: formData,
      config: { headers: { 'Content-Type': 'multipart/form-data' } }
    })
    .then(response => {
      console.log(response)
      setUser(response.data)
    })
    .catch(errors => console.log(errors))

    // auth.signInWithEmailAndPassword(email, password)
    // .then((userCredential) => {
    //   // Signed in
    //   var user = userCredential.user;
    //   setUser(user)
    //   // ...
    // })
    // .catch((error) => {
    //   var errorCode = error.code;
    //   var errorMessage = error.message;
    //   console.log("email or password incorrect")
    // });

  }

  const logout=()=>{
    auth.signOut()
      .then(() => {
        setUser(null)
      });
  }
  
  return (
    <div className="App">
      <Header logout={logout} user={user}/>
      {user?.email?<Home logout={logout} user={user}/>:<Login loginFunc={loginFunc} setUser={setUser}/>}
    </div>
  );
}

export default App;
