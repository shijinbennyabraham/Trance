import React from 'react'
import {Button,TextField} from '@material-ui/core'
function Loginform() {
    return (
        <div>
        <form noValidate autoComplete="off" className="form">
        <p style={{color:'white',fontWeight:'bolder',fontSize:'18px',marginBottom:'20px'}}>Welcome Back!</p>
        <div>
        <label style={{paddingRight:'70%'}}>Username</label>
        <br/>
        <input type="text" className="form-input"/>
        </div>
        <div>
        <label style={{paddingRight:'70%'}}>Password</label><br/>
        <input type="password" className="form-input"/>
        </div>
        <Button variant="contained" color="secondary" type="submit" style={{marginTop:'20px',backgroundColor:'#86359E',color:'white'}}>
        Log In
        </Button>
        <br/>
           
      </form>
        </div>
    )
}

export default Loginform
