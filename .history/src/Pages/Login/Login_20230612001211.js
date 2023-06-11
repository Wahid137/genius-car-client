import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import img from '../../assets/images/login/login.svg'
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import { setAuthToken } from '../../api/auth';
import SocialLogin from '../Shared/SocialLogin/SocialLogin';

const Login = () => {
    const [success, setSuccess] = useState(false)
    const { signIn } = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || "/";


    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                setAuthToken(user)
                setSuccess(true)
                form.reset();
                navigate(from, { replace: true })

            })
            .catch(error => {
                console.log(error)
            })


    }
    return (
        <div className="hero w-full">
            <div className="hero-content grid gap-20 md:grid-cols-2 flex-col lg:flex-row">
                <div className="text-center lg:text-left">
                    <img className="w-3/4" src={img} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 my-20 py-20">
                    <h1 className="text-5xl text-center font-bold">Login</h1>
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input name="email" type="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input name="password" type="password" placeholder="password" className="input input-bordered" required />
                            <button className="btn btn-link">Forget Password?</button>

                        </div>
                        <div className="form-control mt-2 mb-0 pb-0">
                            <input className="btn btn-primary" type="submit" value="Login" />
                        </div>
                    </form>
                    <SocialLogin></SocialLogin>
                    <p className='text-center'>New to Genius Car <Link className="text-orange-600 font-bold" to="/signup">Sign Up</Link></p>
                    {success && <p className='text-center text-green-600 '>Successfully login to the account</p>}

                </div>
            </div>
        </div>
    );
};

export default Login;