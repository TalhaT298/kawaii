/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
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