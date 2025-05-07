import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';

const SocialLogin = () => {
    return (
        <div className='space-y-5'>
            <h2 className='font-bold mb-5'>Login With</h2>
            <div className='btn w-full btn-outline btn-primary'> <FcGoogle size={24}></FcGoogle>Login With Google</div>
            <div className='btn w-full btn-outline btn-secondary'> <FaGithub size={24}></FaGithub>Login With Github</div>
        </div>
    );
};

export default SocialLogin;