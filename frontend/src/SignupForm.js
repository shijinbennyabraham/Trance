import React, { useState } from 'react'
import {Button,TextField} from '@material-ui/core'
import firebase, { auth, provider } from './firebase_config';
import axios from 'axios' 

function SignupForm({setUser}) {

  const [email, setEmail] = useState('')
  const [password, setPass] = useState('')
  const [repass, setRepass] = useState('')
  const [passMatch, setPassMatch] = useState(false)

  // const signUp=()=>{
  //   auth.createUserWithEmailAndPassword(email, password)
  //   .then((userCredential) => {
  //     // Signed in 
  //     var user = userCredential.user;
  //     setUser(user)
  //     // ...
  //   })
  //   .catch((error) => {
  //     var errorCode = error.code;
  //     var errorMessage = error.message;
  //     // ..
  //   });
  // }
  const signUp=()=>{
    const formData = new FormData();

    formData.append("email", email);
    formData.append("password", password)
    axios({
      method: 'post',
      url: 'http://ec2-18-220-72-7.us-east-2.compute.amazonaws.com/signUp',
      data: formData,
      config: { headers: { 'Content-Type': 'multipart/form-data' } }
    })
    .then(response => {
      console.log(response)
      setUser(response.data)
    })
    .catch(errors => console.log(errors))
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
          backgroundColor:'#6C63FF',
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
