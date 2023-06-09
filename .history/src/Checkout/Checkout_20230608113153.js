import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider/AuthProvider';

const Checkout = () => {
    const { _id, title, price } = useLoaderData()
    const { user } = useContext(AuthContext)

    cost handlePlaceOrder = () => {

    }
    return (
        <div>
            <form onSubmit={handlePlaceOrder}>

            </form>
        </div>
    );
};

export default Checkout;