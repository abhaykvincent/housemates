import React from 'react'
import Firebase, {auth} from '../../firebase'


import './Login.scss'

function Login() {
    return (
        <div className="login">
            <div className="login__google-apple-android">
                    <div className="login__google" >
                      <button onClick={() =>{
                      auth.signInWithEmailAndPassword('abhaykvincent@gmail.com', '.Abhay.98')
                      .then((result) => {
                        console.log(result.user.toJSON())
                      }).catch((error) => {
                        console.log(error)
                      });
                    
                    }}>Google</button>
    
            </div>
                    <div className="login__applenpm i firebase
                    ">Apple</div>
                    <button onClick={() =>{
                      auth.signInWithEmailAndPassword('abhaykvincent@gmail.com', '.Abhay.98')
                      .then((result) => {
                        console.log(result)
                      }).catch((error) => {
                        console.log(error)
                      });
                    }}>Click</button>
    
            </div>
            <div className="login__email-password"></div>
        </div>
    )
}

export default Login
