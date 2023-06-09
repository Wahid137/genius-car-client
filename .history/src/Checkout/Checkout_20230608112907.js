import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider/AuthProvider';

const Checkout = () => {
    const { _id, title, price } = useLoaderData()
    const { user } = useContext(AuthContext)
    return (
        <div>
            <h2>This is checkout: {title}</h2>
        </div>
    );
};

export default Checkout;