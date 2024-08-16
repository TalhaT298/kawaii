/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div>
            <Link to="/register"></Link>
            <div className='border'> 
            <div className='mx-auto md:w-1/2'>
            <h2 className='text-3xl mb-4'>Please Register</h2>
            <form action="">
                <input className='mb-4 w-3/4 py-2 px-4' placeholder='Your email address is here' type="email" name='email' id='' />
                <br />
                <input className='mb-4 w-3/4 py-2 px-4' placeholder='password' type="password" name='password' id='' />
                <br />
                <input className='btn btn-secondary mb-4 w-3/4' type="submit" value="Register" />
            </form>
            </div>
            </div>
        </div>
    );
};

export default Register;