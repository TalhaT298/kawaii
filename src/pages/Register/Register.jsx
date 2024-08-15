/* eslint-disable no-unused-vars */
import React from 'react';

const Register = () => {
    return (
        <div>
            <h2 className='text-3xl'>Please Register</h2>
            <form action="">
                <input type="email" name='email' id='' />
                <br />
                <input type="password" name='password' id='' />
                <br />
                <input type="submit" value="Register" />
            </form>
        </div>
    );
};

export default Register;