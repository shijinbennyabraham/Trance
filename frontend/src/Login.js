import {React,useState} from 'react'
import './App.css';
import LoginForm from './Loginform';
import SignupForm from './SignupForm'
import Mainimage from './assets/main-image.svg'
import Music1 from './assets/music3.svg'
import Music2 from './assets/music2.svg'

function Login({loginFunc, setUser}) {
  const[login,setLogin]=useState(true);

  return (
    <div className="login-main" style={{zIndex:2,position:'relative'}}>
    <img src={Music1} className="music1" style={{zIndex:-1}}/>
    <img src={Music2} className="music2" style={{zIndex:-1}}/>
    <div className="login_page">
      <img src={Mainimage}  className="main-image"/>
      {
        login?
        <div>
        <LoginForm loginFunc={loginFunc}/>
        <p style={{fontSize:'15px',marginTop:'1em',cursor:'pointer'}} onClick={()=>setLogin(false)}>Don't have an account? <span style={{color:'#9b96f0',fontStyle:'italic',fontWeight:'bolder'}}>Sign up</span> now!</p>   
        </div>:
        <div>
        <SignupForm setUser={setUser}/>
        <p style={{fontSize:'15px',marginTop:'1em',cursor:'pointer'}} onClick={()=>setLogin(true)}>Already have an account? <span style={{color:'#9b96f0',fontStyle:'italic',fontWeight:'bolder'}}>Login</span> now!</p>     
        </div>
      }
      
      
    </div>
    
    
    </div>
  );
}

export default Login;