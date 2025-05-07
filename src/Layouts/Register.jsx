import React from 'react';
import { Link } from 'react-router';

const Register = () => {
    return (
        <div>
        <div>
<div className="flex justify-center min-h-screen items-center">

<div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
  <h2 className='text-center'>Register Your Account</h2>
  <div className="card-body">
    <fieldset className="fieldset">

          {/* Name */}
      <label className="label">Name</label>
      <input type="text" className="input" placeholder="Your Name" />

         {/* Photo Url */}
         <label className="label">Photo URL</label>
      <input type="text" className="input" placeholder="Photo URL" />

        {/* E-mail */}
      <label className="label">Email</label>
      <input type="email" className="input" placeholder="Email" />

      {/* password */}
      <label className="label">Password</label>
      <input type="password" className="input" placeholder="Password" />
      
      
      
      
      <button className="btn btn-neutral mt-4">Register</button>

      <p className='text-center font-bold pt-5'>Already Have an Account? Please <Link to={'/auth/login'} className='text-secondary'>LogIn</Link> </p>
      
    </fieldset>
  </div>
</div>
</div>
</div>
    </div>
    );
};

export default Register;
