import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Context/AuthProvider/AuthProvider';

const Orders = () => {
    const { user, logOut } = useContext(AuthContext)
    const [orders, setOrders] = useState([])

    useEffect(() => {
        fetch()
    }, [user?.email, logOut])
    return (
        <div>
            <h2>This is Order</h2>
        </div>
    );
};

export default Orders;