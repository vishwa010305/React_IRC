import React,{useState} from 'react'
import '../assets/css/LoginSignup.css'

import user_icon from '../assets/images/person.png'
import email_icon from '../assets/images/email.png'
import password_icon from '../assets/images/password.png'


const Login_SignUp = () => {    


    const [action,setAction]=useState("Sign Up");
  return (
    <div className='container'>
        <div className='header'>
            <div className="text">{action}</div>
        </div>
        <div className="inputs">
            {action==="Login"?<div></div>:<div className="input">
                <img src={user_icon} alt="" />
                <input typ  e="text" placeholder="Name"/>
            </div>}
            
            <div className="input">
                <img src={email_icon} alt="" />
                <input type="email" placeholder="Email Id"/>
            </div>
            <div className="input">
                <img src={password_icon} alt="" />
                <input type="password" placeholder="Password"/>
            </div>
        </div>
        {action==="Sign Up"?<div></div>:<div className="forgot-password">Lost Password?  <span>Click Here!</span></div>}
        
        <div className="submit-container">
            <div className={action==="Login"?"submit gray":"submit"} onClick={() =>{setAction("Sign Up")}}>Sign Up</div>
            <div className={action==="Sign Up"?"submit gray":"submit"} onClick={() =>{setAction("Login")}}>Login</div>
        </div>
    </div>
  )
}

export default Login_SignUp