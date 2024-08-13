/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';
import { getAuth } from "firebase/auth";
import app from '../../firebase/firebase.init';


const Login = () => {
    const auth = getAuth(app)
    return (
        <>
           <Link to="/login"></Link>
           <div>
            <button>Go to Login</button>
            </div> 
        </>
    );
};

export default Login;