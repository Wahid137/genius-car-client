import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Checkout = () => {
    const { _id, title, price } = useLoaderData()
    return (
        <div>
            <h2>This is checkout</h2>
        </div>
    );
};

export default Checkout;