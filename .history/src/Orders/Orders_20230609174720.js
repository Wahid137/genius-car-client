import React, { useContext } from 'react';
import { AuthContext } from '../Context/AuthProvider/AuthProvider';

const Orders = () => {
    const { user, logOut } = useContext(AuthContext)
    return (
        <div>
            <h2>This is Order</h2>
        </div>
    );
};

export default Orders;