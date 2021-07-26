import React, { useState } from 'react'
//import Firebase, {auth} from '../../firebase'


import './Login.scss'

function Login() {
  const [inputEmail, setInputEmail] = useState("")
  const [inputPassword, setInputPassword] = useState("")
    return (
        <div className="login">
            <div className="login__google-apple-android">
              <div className="login__google" >
                <button >Google</button>
              </div>
              <div className="login__apple" >
                <button >Apple</button>
              </div>
            </div>
            <div className="login__email-password">
              <p className="label">Email</p>
              <input type="text" className="login-input" 
                value={inputEmail} onChange={(e)=>{setInputEmail(e.target.value)}}/>
              <p className="label">Password</p>
              <input type="text" className="login-input" 
                value={inputPassword} onChange={(e)=>{setInputPassword(e.target.value)}}/>
              <input className="button login-button" type="button" value="Login" />
              <input className="button login-button" type="button" value="Signup" />
            </div>
        </div>
    )
}

export default Login
