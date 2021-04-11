import React, { useContext, useState } from 'react';
import firebase from "firebase/app"
import "firebase/auth";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons"
import firebaseConfig from './fireBaseConfig';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router';

firebase.initializeApp(firebaseConfig)
if (firebase.apps.length === 0) {
    firebase.initializeApp({});
}

const Login = () => {
    const [loggedInUser, setLoggedInUser] =  useContext(UserContext)

    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

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
                setLoggedInUser(signedInUser)
                history.replace(from);
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
    // const googleSignOutHandler = () => {
    //     firebase.auth().signOut()
    //         .then(() => {
    //             // Sign-out successful.
    //             const signedOutUser = {
    //                 isSignedIn: false,
    //                 name: '',
    //                 email: '',
    //                 photoURL: '',
    //             }
    //             setUser(signedOutUser)
    //             console.log("Sign-out successful.");
    //         }).catch((error) => {
    //             // An error happened.
    //             const errorCode = error.code;
    //             const errorMessage = error.message;
    //             const email = error.email;
    //             const credential = error.credential;
    //             console.log(errorCode, errorMessage, email, credential, error);
    //         });
    // }
    // *Sign Out Code End



    return (
        <div className="d-flex justify-content-center p-2 mt-3">
            <div>
                <h3 className="text-center">Login Page</h3>
                <div className="card d-flex justify-content-center p-2 mt-3 shadow" style={{width: "18rem"}}>
                    <form>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Email address :</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Enter email'/>
                            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Password :</label>
                            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Enter password"/>
                        </div>
                    
                        <button type="submit" className="btn btn-success form-control">Login</button>
                        <div className="text-center">
                            <p>Or</p>
                        </div>

                        <button type="submit" className="btn btn-outline-primary form-control"> <FontAwesomeIcon icon={faFacebook} style={{fontSize: '22px'}}/> Sign In With Facebook</button>
                        
                        
                        <button onClick={googleSignUpHandler} type="button" className="btn btn-outline-primary form-control mt-1"> <FontAwesomeIcon icon={faGoogle} style={{fontSize: '22px'}}/> Sign In With Google</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;