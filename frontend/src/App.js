import './App.css';
import Login from './Login'
import Home from './Home'
import Header from './Header'
import firebase, { auth, provider } from './firebase_config';
import { useEffect, useState } from 'react';

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
    console.log("here")

    auth.signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in
      var user = userCredential.user;
      setUser(user)
      // ...
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log("email or password incorrect")
    });

  }

  const logout=()=>{
    auth.signOut()
      .then(() => {
        setUser(null)
      });
  }

  return (
    <div className="App">
      <Header/>
      {user?<Home logout={logout}/>:<Login loginFunc={loginFunc} setUser={setUser}/>}
    </div>
  );
}

export default App;
