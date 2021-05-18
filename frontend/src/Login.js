import './App.css';
import { Button,TextField } from '@material-ui/core';

function Login() {
  return (
    <div className="login">
      <div>
      <form noValidate autoComplete="off" className="form">
        <div>
        <label style={{paddingRight:'70%'}}>Username</label>
        <br/>
        <input type="text" className="form-input"/>
        </div>
        <div>
        <label style={{paddingRight:'70%'}}>Password</label><br/>
        <input type="password" className="form-input"/>
        </div>
        <Button variant="contained" color="secondary" type="submit" style={{marginTop:'20px',backgroundColor:'#4c4db0',color:'white'}}>
        Log In
        </Button>
        <br/>
        <p style={{fontSize:'12px',cursor:'pointer'}}>Don't have an account? Sign up now!</p>      
      </form>
      </div>
    </div>
  );
}

export default Login;