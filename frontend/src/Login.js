import './App.css';
import { Button,TextField } from '@material-ui/core';

function Login() {
  return (
    <div className="login">
      <div>
      <form noValidate autoComplete="off" className="form">
        <TextField id="outlined-basic" label="Username" variant="outlined" />
        <TextField id="outlined-basic" label="Password" type="password" variant="outlined" style={{marginTop:'20px'}}/>
        <Button variant="contained" color="secondary" type="submit" style={{marginTop:'20px',backgroundColor:'#4c4db0',color:'white'}}>
        Log In
        </Button>      
      </form>
      </div>
    </div>
  );
}

export default Login;