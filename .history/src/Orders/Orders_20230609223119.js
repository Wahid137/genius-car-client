import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Context/AuthProvider/AuthProvider';

const Orders = () => {
    const { user, logOut } = useContext(AuthContext)
    const [orders, setOrders] = useState([])

    useEffect(() => {
        fetch(`https://genius-car-server-jet-nine.vercel.app/orders?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [user?.email, logOut])

    return (
        <div>
            <h2 className='text-5xl'>You have {orders.length} orders</h2>
            <div className='overflow '>

            </div>
        </div>
    );
};

export default Orders;