import React from 'react';
import { FcGoogle } from 'react-icons/fc';


const SocialLogin = () => {
    return (
        <div className='text-center'>
            <button className='btn btn-outline w-full'><FcGoogle className='me-2 w-6 h-6' />Sign In With Google</button>
        </div>
    );
};

export default SocialLogin;