import React, { useState } from 'react'
import {Button,TextField} from '@material-ui/core'
import firebase, { auth, provider } from './firebase_config';

function SignupForm({setUser}) {

  const [email, setEmail] = useState('')
  const [password, setPass] = useState('')
  const [repass, setRepass] = useState('')
  const [passMatch, setPassMatch] = useState(false)

  const signUp=()=>{
    auth.createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in 
      var user = userCredential.user;
      setUser(user)
      // ...
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      // ..
    });
  }

  const passwordMatch=(e)=>{
    var pass=e.target.value
    setRepass(pass)
    if(pass==password)
      setPassMatch(true)
    else
      setPassMatch(false)
  }

  return (
      <div>
      <form noValidate autoComplete="off" className="form">
      <p style={{color:'white',fontWeight:'bolder',fontSize:'18px',marginBottom:'20px'}}>Create an account!</p>
      
  
      
      <div>
      <label style={{paddingRight:'70%'}} >Email</label>
      <br/>
      <input type="text" name="email" value={email} onChange={e=>{setEmail(e.target.value)}} className="form-input" required/>
      </div>
      
      <div>
      <label style={{paddingRight:'70%'}} >Password</label><br/>
      <input type="password" name="password" value={password} onChange={e=>{setPass(e.target.value)}} className="form-input" required/>
      </div>

      <div>
      <label style={{paddingRight:'20%'}}>Confirm Password</label><br/>
      <input type="password" value={repass} className="form-input" onChange={passwordMatch} required/>
      </div>

      <Button 
        variant="contained" 
        color="secondary" 
        type="submit" 
        style={{
          marginTop:'20px',
          backgroundColor:'#86359E',
          color:'white'
        }}
        onClick={(e)=>{
          e.preventDefault();
          passMatch?signUp():console.log("Password mismatch")
        }}
      >
      Sign Up
      </Button>
      <br/>
    
    </form>
      </div>
  )
}

export default SignupForm
