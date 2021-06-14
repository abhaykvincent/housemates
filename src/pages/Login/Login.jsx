import React from 'react'
import './Login.scss'

function Login() {
    return (
        <div className="login">
            <div className="login__google-apple-android">
                    <div className="login__google">Google</div>
                    <div className="login__apple">Apple</div>
            </div>
            <div className="login__email-password"></div>
        </div>
    )
}

export default Login
