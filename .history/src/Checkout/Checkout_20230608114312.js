import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider/AuthProvider';

const Checkout = () => {
    const { _id, title, price } = useLoaderData()
    const { user } = useContext(AuthContext)

    const handlePlaceOrder = () => {

    }
    return (
        <div>
            <form onSubmit={handlePlaceOrder}>
                <h2 className='text-4xl'>You are about to order: {title}</h2>
                <h4 className='text-2xl'>Price: {price}</h4>
                <div>
                    <input name='firstName' type="text" placeholder='First Name' className='input input-ghost w-full input-bordered' />
                    <input name='lastName' type="text" placeholder='First Name' className='input input-ghost w-full input-bordered' />
                    <input name='phone' type="text" placeholder='First Name' className='input input-ghost w-full input-bordered' />
                    <input name='email' type="email" placeholder='First Name' className='input input-ghost w-full input-bordered' />
                </div>

            </form>
        </div>
    );
};

export default Checkout;