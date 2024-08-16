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
import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
    const handleRegister = e =>{
        e.preventDefault();
        const email = e.target.email.value;
        const password=e.target.password.value;
        console.log(email,password);
        console.log('from submit')
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
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  name="password"
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

export default Register;
