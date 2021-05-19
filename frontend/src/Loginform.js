import React, { useState } from 'react'
import {Button,TextField} from '@material-ui/core'
function Loginform({loginFunc}) {
    const [email, setEmail] = useState('')
    const [password, setPass] = useState('')
    return (
      <div>
        <form noValidate autoComplete="off" className="form">
        <p style={{color:'white',fontWeight:'bolder',fontSize:'18px',marginBottom:'20px'}}>Welcome Back!</p>
        <div>
        <label style={{paddingRight:'70%'}}>Username</label>
        <br/>
        <input type="text" className="form-input" onChange={e=>{setEmail(e.target.value)}}/>
        </div>
        <div>
        <label style={{paddingRight:'70%'}}>Password</label><br/>
        <input type="password" className="form-input" onChange={e=>{setPass(e.target.value)}}/>
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
            console.log("hii")
            loginFunc(email, password)
          }}
        >
        Log In
        </Button>
        <br/>
           
      </form>
    </div>
  )
}

export default Loginform