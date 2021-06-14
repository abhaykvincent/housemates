import React from 'react'
import { Firebase } from '../../firebase/firebase'
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase";
import './Login.scss'
var provider = new Firebase.auth.GoogleAuthProvider();
function Login() {
    return (
        <div className="login">
            <div className="login__google-apple-android">
                    <div className="login__google" onClick={()=>{
                        const auth = getAuth();
                        signInWithPopup(auth, provider)
                        .then((result) => {
                          // This gives you a Google Access Token. You can use it to access the Google API.
                          const credential = GoogleAuthProvider.credentialFromResult(result);
                          const token = credential.accessToken;
                          // The signed-in user info.
                          const user = result.user;
                          // ...
                        }).catch((error) => {
                          // Handle Errors here.
                          const errorCode = error.code;
                          const errorMessage = error.message;
                          // The email of the user's account used.
                          const email = error.email;
                          // The AuthCredential type that was used.
                          const credential = GoogleAuthProvider.credentialFromError(error);
                          // ...
                        });
                      
                    }}>Google</div>
                    <div className="login__applenpm i firebase
                    ">Apple</div>
            </div>
            <div className="login__email-password"></div>
        </div>
    )
}

export default Login
