import React, { useContext, useState } from 'react';
import img from "../../assets/images/login/login.svg";
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const SignUp = () => {
    const [passwordError, setPasswordError] = useState("")
    const [success, setSuccess] = useState(false)
    const { createUser } = useContext(AuthContext)

    const handleSignUp = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email, password)
            .then(result => {
                const user = result.user;
                setSuccess(true);
                form.reset()
            })
            .catch(error => {
                console.error("error", error)
                setPasswordError(error.message)
            })

    }
    return (
        <div className="hero w-full">
            <div className="hero-content grid gap-20 md:grid-cols-2 flex-col lg:flex-row">
                <div className="text-center lg:text-left">
                    <img className="w-3/4" src={img} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 my-20 py-20">
                    <h1 className="text-5xl text-center font-bold">Sign Up</h1>
                    <form onSubmit={handleSignUp} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input name="name" type="text" placeholder="Your Name" className="input input-bordered" required />
                        </div>
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
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" value="sign up" />
                        </div>
                    </form>
                    {/*  <p className='text-red-600 text-center'>{passwordError}</p>
                    {success && <p className="text-green-600 text-center">User Created Successfully</p>} */}
                    <p className='text-center'>Already have an account? <Link className="text-orange-600 font-bold" to="/login">Login</Link></p>
                </div>
            </div>
        </div>
    );
};

export default SignUp;