/* eslint-disable no-unused-vars */
// import React from 'react';
// import { Link } from 'react-router-dom';

// const Register = () => {
    // const handleRegister = e =>{
    //     e.preventDefault();
    //     const email = e.target.email.value;
    //     const password=e.target.password.value;
    //     console.log(email,password);
    // }
//     return (
//         <div>
//             <Link to="/register"></Link>
//             <div className='border'>
//             <div className='mx-auto md:w-1/2'>
//             <h2 className='text-3xl mb-4'>Please Register</h2>
//             <form onSubmit={handleRegister} action="">
//                 <input className='mb-4 w-3/4 py-2 px-4' placeholder='Your email address is here' type="email" name='email' id='' />
//                 <br />
//                 <input className='mb-4 w-3/4 py-2 px-4' placeholder='password' type="password" name='password' id='' />
//                 <br />
//                 <input className='btn btn-secondary mb-4 w-3/4' type="submit" value="Register" />
//             </form>
//             </div>
//             </div>
//         </div>
//     );
// };

// export default Register;
import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import auth from "../../firebase/firebase.init";
import { IoIosEye } from "react-icons/io";
import { IoEyeOff } from "react-icons/io5";
const Register = () => {
    const [registerError, setRegisterError]=useState('');
    const [success,setSuccess]=useState('');
    const [showPassword,setShowPassword]=useState(false);

    const handleRegister = e =>{
        e.preventDefault();
        const email = e.target.email.value;
        const password=e.target.password.value;
        const accepted = e.target.terms.checked;
        console.log(email,password,accepted);
        //reset error
        setRegisterError('');
        setSuccess('');
        if(password.length<6){
            setRegisterError('Password should be at least 6 chatacter or long');
            return;
        }

        else if(!/[A-Z]/.test(password)){
          setRegisterError('Your password should have list one uppare case characteer');
          return;
        }
        
        //creeate user
        createUserWithEmailAndPassword(auth,email,password)
        .then(result =>{
            console.log(result.user);
            setSuccess('User created Suceesfully')
        })
        .catch(error=>{
            console.error(error);
            setRegisterError(error.message);
        });
        
    }
  return (
    <div>
      <Link to="/register"></Link>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Register now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleRegister} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  name="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <div className="relative">
                <input
                  type={showPassword? "text":"password"}
                  placeholder="password"
                  className="input input-bordered"
                  name="password"
                  required
                />
                <span className="absolute top-3 right-2" onClick={()=> setShowPassword(!showPassword)}>

                  {
                    showPassword? <IoIosEye /> : <IoEyeOff />
                  }
                </span>
                <br />
                <div className="mb-2">
                <input type="checkbox" name="terms" id="terms"/>
                <label className="ml-2" htmlFor="terms">Accept our Terms and Conditions</label>
                </div>
                </div>
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
            {
                registerError && <p className="text-red-900">{registerError}</p>
            }
            {
                success && <p className="text-green-800">{success}</p>
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
