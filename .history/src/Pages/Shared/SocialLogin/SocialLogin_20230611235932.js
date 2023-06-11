import React from 'react';
import { FcGoogle } from 'react-icons/fc';


const SocialLogin = () => {
    return (
        <div className='text-center'>
            <button className='btn btn-outline btn-xl mt-3'><FcGoogle className='me-2 w-6 h-10' />Sign In With Google</button>
        </div>
    );
};

export default SocialLogin;