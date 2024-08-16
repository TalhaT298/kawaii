/* eslint-disable no-unused-vars */
// /* eslint-disable no-unused-vars */
// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
// import app from '../../firebase/firebase.init';

// const Login = () => {
//     const [user,setUser]=useState(null);
//     const auth = getAuth(app);
//     const provider = new GoogleAuthProvider();

//     const handleGoogleSignIn = () =>{
//        signInWithPopup(auth,provider)
//        .then(result =>{
//         const loggedInUser= result.user;
//         console.log(loggedInUser);
//         setUser(loggedInUser);
//        })
//        .cath(error =>{
//         console.log('error',error.message)
//        })
//     }
//     return (
//         <>
//            <Link to="/login"></Link>
//            <div>
//             <button onClick={handleGoogleSignIn}>Gt Login</button>
//             </div>
//         </>
//     );
// };

// export default Login;

import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import auth from "../../firebase/firebase.init";

const Login = () => {
    const [registerError, setRegisterError]=useState('');
    const [success,setSuccess]=useState('');
    const emailRef=useRef(null);

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    console.log(email, password);

    //reset error
    setRegisterError('');
    setSuccess('');

    //add validaton
    signInWithEmailAndPassword(auth,email,password)
    .then(result=>{
        console.log(result.user);
        setSuccess('User Login Successfully');
    })
    .catch(error=>{
        console.error(error);
        setRegisterError(error.message);
    });
  };

  const handleForgetPassword = e =>{
    console.log('send rest mail',emailRef.current.value);
  }
  return (
    <div>
      <Link to="/login"></Link>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"  // Added name attribute
                  ref={emailRef}
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"  // Added name attribute
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a onClick={handleForgetPassword} href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
            {
                registerError && <p className="text-red-900">{registerError}</p>
            }
            {
                success && <p className="text-green-800">{success}</p>
            }
            <p>New to this website please <Link to="/register">Register</Link></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
