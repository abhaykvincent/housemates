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
<<<<<<< HEAD
                        /** @type {firebase.auth.OAuthCredential} */
                        var credential = result.credential;
                    
                        /* // This gives you a Google Access Token. You can use it to access the Google API.
                        var token = credential.accessToken;
                        // The signed-in user info.
                        var user = result.user; */
                        console.log(result.user.toJSON())
                        // ...
                      }).catch((error) => {
                        // Handle Errors here.
                        var errorCode = error.code;
                        var errorMessage = error.message;
                        // The email of the user's account used.
                        var email = error.email;
                        // The firebase.auth.AuthCredential type that was used.
                        var credential = error.credential;
                        console.log(error)
                        // ...
=======
                        console.log(result.user.toJSON())
                      }).catch((error) => {
                        console.log(error)
>>>>>>> parent of 890bbeb... Login -Clean up
                      });
                    
                    }}>Google</button>
    
            </div>
                    <div className="login__applenpm i firebase
                    ">Apple</div>
                    <button onClick={() =>{
                      auth.signInWithEmailAndPassword('abhaykvincent@gmail.com', '.Abhay.98')
                      .then((result) => {
                        debugger
                        /** @type {firebase.auth.OAuthCredential} */
                        var credential = result.credential;
                    
                        /* // This gives you a Google Access Token. You can use it to access the Google API.
                        var token = credential.accessToken;
                        // The signed-in user info.
                        var user = result.user; */
                        console.log(result)
                        // ...
                      }).catch((error) => {
                        // Handle Errors here.
                        var errorCode = error.code;
                        var errorMessage = error.message;
                        // The email of the user's account used.
                        var email = error.email;
                        // The firebase.auth.AuthCredential type that was used.
                        var credential = error.credential;
                        console.log(error)
                        // ...
                      });
                    }}>Click</button>
    
            </div>
            <div className="login__email-password"></div>
        </div>
    )
}

export default Login
