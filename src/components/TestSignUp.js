import React, { useState } from 'react';
import firebase from "firebase/app"
import "firebase/auth";
import firebaseConfig from './Login/fireBaseConfig';


firebase.initializeApp(firebaseConfig)
if (firebase.apps.length === 0) {
    firebase.initializeApp({});
}

const TestSignUp = () => {
    const [user, setUser] = useState({
        isSignedIn: false,
        name: '',
        email: '',
        photoURL: '',
    })

    const provider = new firebase.auth.GoogleAuthProvider();
    // *Sign In Code Start
    const googleSignUpHandler = () => {
        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {
                // Sign-In successful.
                const { displayName, email, photoURL } = result.user
                const signedInUser = {
                    isSignedIn: true,
                    name: displayName,
                    email: email,
                    photoURL: photoURL,
                }
                setUser(signedInUser)
                console.log("Sign-In successful.", displayName, email);
            })
            .catch((error) => {
                // An error happened.
                const errorCode = error.code;
                const errorMessage = error.message;
                const email = error.email;
                const credential = error.credential;
                console.log(errorCode, errorMessage, email, credential, error);
            });
    }
    // *Sign In Code End

    // *Sign Out Code Start
    const googleSignOutHandler = () => {
        firebase.auth().signOut()
            .then(() => {
                // Sign-out successful.
                const signedOutUser = {
                    isSignedIn: false,
                    name: '',
                    email: '',
                    photoURL: '',
                }
                setUser(signedOutUser)
                console.log("Sign-out successful.");
            }).catch((error) => {
                // An error happened.
                const errorCode = error.code;
                const errorMessage = error.message;
                const email = error.email;
                const credential = error.credential;
                console.log(errorCode, errorMessage, email, credential, error);
            });
    }
    // *Sign Out Code End


    return (
        <div>
            {
                user.isSignedIn ? <button type="button" onClick={googleSignOutHandler}>SIgn Out</button>
                    : <button type="button" onClick={googleSignUpHandler}>SIgn Up</button>
            }

            {
                user.isSignedIn &&
                <div>
                    <p>{user.name}</p>
                    <p>{user.email}</p>
                    <img src={user.photoURL} alt="" />
                </div>
            }
        </div>
    );
};
export default TestSignUp;