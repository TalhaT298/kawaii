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

import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    console.log(email, password);
  };

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
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
