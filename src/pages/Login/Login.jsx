/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import app from '../../firebase/firebase.init';



const Login = () => {
    const [user,setUser]=useState(null);
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();

    const handleGoogleSignIn = () =>{
       signInWithPopup(auth,provider)
       .then(result =>{
        const loggedInUser= result.user;
        console.log(loggedInUser);
        setUser(loggedInUser);
       })
       .cath(error =>{
        console.log('error',error.message)
       })
    }
    return (
        <>
           <Link to="/login"></Link>
           <div>
            <button onClick={handleGoogleSignIn}>Gt Login</button>
            </div> 
        </>
    );
};

export default Login;