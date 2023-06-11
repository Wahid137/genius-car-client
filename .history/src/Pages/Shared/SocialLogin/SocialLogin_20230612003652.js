import React, { useContext } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import { setAuthToken } from '../../../api/auth';


const SocialLogin = () => {
    const { googleSignIn } = useContext(AuthContext)

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const user = result.user;
                setAuthToken(user)
            })
    }
    return (
        <div className='text-center'>
            <button className='btn btn-outline mb-2 w-80'><FcGoogle className='me-2 w-6 h-6' />Sign In With Google</button>
        </div>
    );
};

export default SocialLogin;