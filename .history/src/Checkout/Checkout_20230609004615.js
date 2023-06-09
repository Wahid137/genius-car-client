import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider/AuthProvider';

const Checkout = () => {
    const { _id, title, price } = useLoaderData()
    const { user } = useContext(AuthContext)

    const handlePlaceOrder = () => {

    }
    return (
        <div className='card border my-16 p-5 shadow-lg'>
            <form onSubmit={handlePlaceOrder}>
                <h2 className='text-4xl'>You are about to order: {title}</h2>
                <h4 className='text-2xl'>Price: {price}</h4>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                    <input name='firstName' type="text" placeholder='First Name' className='input input-ghost w-full input-bordered' />
                    <input name='lastName' type="text" placeholder='Last Name' className='input input-ghost w-full input-bordered' />
                    <input name='phone' type="text" placeholder='Phone Number' className='input input-ghost w-full input-bordered' />
                    <input name='email' type="email" placeholder='Enter Email' className='input input-ghost w-full input-bordered' />
                </div>
            </form>
        </div>
    );
};

export default Checkout;