/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import app from '../../firebase/firebase.init';



const Login = () => {
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();

    const handleGoogleSignIn = () =>{
       signInWithPopup(auth,provider)
       .then(result =>{
        const user= result.user;
        console.log(user);
       })
       .cath(error =>{
        console.log('error',error.message)
       })
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