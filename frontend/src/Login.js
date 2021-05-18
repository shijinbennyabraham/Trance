import {React,useState} from 'react'
import './App.css';
import LoginForm from './Loginform';
import SignupForm from './SignupForm'
import Mainimage from './assets/main-image.svg'
import Music1 from './assets/music3.svg'
import Music2 from './assets/music2.svg'

function Login() {
  const[login,setLogin]=useState(true);
  return (
    <div>
    <img src={Music1} style={{width:"180px",position:"absolute",top:'10%',right:'34%'}}/>
    <img src={Music2} style={{width:'180px',position:'absolute',bottom:'8%',right:'31%'}}/>
    <div className="login_page">
      <img src={Mainimage} width="600px" style={{marginRight:'4em'}}/>
      {
        login?
        <div>
        <LoginForm/>
        <p style={{fontSize:'15px',cursor:'pointer'}} onClick={()=>setLogin(false)}>Don't have an account? Sign up now!</p>   
        </div>:
        <div>
        <SignupForm/>
        <p style={{fontSize:'15px',cursor:'pointer'}} onClick={()=>setLogin(true)}>Already have an account? Login now!</p>     
        </div>
      }
      
      
    </div>
    </div>
  );
}

export default Login;