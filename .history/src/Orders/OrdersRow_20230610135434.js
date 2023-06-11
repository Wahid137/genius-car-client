import React, { useEffect, useState } from 'react';

const OrdersRow = ({ order, handleDelete, handleStatusUpdate, active }) => {
    const { _id, serviceName, customer, phone, price, serviceId, status } = order;

    const [orderServices, setOrderServices] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/services/${serviceId}`)
            .then(res => res.json())
            .then(data => setOrderServices(data))
    }, [])
    return (
        <tr>
            <td>
                <label>
                    <button onClick={() => handleDelete(_id)} className="btn btn-ghost">X</button>
                </label>
            </td>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-24 h-12">
                            <img src={orderServices?.img} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{customer}</div>
                        <div className="text-sm opacity-50">{phone}</div>
                    </div>
                </div>
            </td>
            <td>
                {serviceName}
            </td>

            <td>
                <span className="badge badge-ghost badge-xl">${price}</span>
            </td>

            <td>
                <button
                    onClick={() => handleStatusUpdate(_id)}
                    className="btn btn-ghost btn-xs"
                    style={{ backgroundColor: active ? "green" : "white" }}
                >
                    {status ? status : "pending"}
                </button>
            </td>
        </tr>
    );
};

export default OrdersRow;