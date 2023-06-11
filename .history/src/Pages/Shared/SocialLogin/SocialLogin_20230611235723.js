import React from 'react';
import { FcGoogle } from 'react-icons/fc';


const SocialLogin = () => {
    return (
        <div className='text-center'>
            <button className='btn btn-outline btn-sm'><FcGoogle />Sign In With Google</button>
        </div>
    );
};

export default SocialLogin;