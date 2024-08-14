/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';
import { getAuth } from "firebase/auth";
import app from '../../firebase/firebase.init';
import { GoogleAuthProvider } from 'firebase/auth/web-extension';


const Login = () => {
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();

    const handleGoogleSignIn = () =>{
        console.log('Google is coming')
    }
    return (
        <>
           <Link to="/login"></Link>
           <div>
            <button onClick={handleGoogleSignIn}>Gto Login</button>
            </div> 
        </>
    );
};

export default Login;