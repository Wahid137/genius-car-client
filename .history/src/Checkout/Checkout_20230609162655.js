import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider/AuthProvider';
import { toast } from 'react-hot-toast';

const Checkout = () => {
    const { _id, title, price } = useLoaderData()
    const { user } = useContext(AuthContext)

    const handlePlaceOrder = event => {
        console.log("ok")
        event.preventDefault();
        const form = event.target;
        const name = `${form.firstName.value} ${form.lastName.value}`
        const email = user?.email || "unregistered";
        const phone = form.phone.value;
        const message = form.message.value;

        const order = {
            serviceId: _id,
            serviceName: title,
            price,
            customer: name,
            email,
            phone,
            message
        }
        fetch("http://localhost:5000/orders", {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success("Order placed Successfully");
                    form.reset()
                }
            })
            .catch(error => console.error(error))

    }
    return (
        <div className='card border my-16 p-5 shadow-lg'>
            <form onSubmit={handlePlaceOrder}>
                <h2 className='text-4xl my-2'>You are about to order: {title}</h2>
                <h4 className='text-2xl my-2'>Price: {price}</h4>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                    <input name='firstName' type="text" placeholder='First Name' className='input input-ghost w-full input-bordered' />
                    <input name='lastName' type="text" placeholder='Last Name' className='input input-ghost w-full input-bordered' />
                    <input name='phone' type="text" placeholder='Phone Number' className='input input-ghost w-full input-bordered' />
                    <input name='email' type="email" placeholder='Your Email' defaultValue={user?.email} className='input input-ghost w-full input-bordered' readOnly />
                </div>
                <textarea name="message" className='textarea textarea-bordered my-4 h-24 w-full' placeholder='Your Message'></textarea>
                <input className="btn bg-orange-600" type="submit" value="Place your Order" />
            </form>
        </div>
    );
};

export default Checkout;