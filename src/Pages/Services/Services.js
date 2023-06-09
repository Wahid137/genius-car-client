import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';
import UseTitle from '../../hooks/UseTitle';

const Services = () => {
    const [services, setServices] = useState([])
    UseTitle("Services")

    useEffect(() => {
        fetch('https://genius-car-server-jet-nine.vercel.app/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div className='p-0 my-5'>
            <div className='mx-auto mb-4 text-center w-1/2'>
                <p className='text-2xl font-bold text-orange-600'>Services</p>
                <h2 className="text-5xl font-semibold mb-3">Our Services Area</h2>
                <p>The majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
            </div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    services.map(service => <ServiceCard
                        key={service._id}
                        service={service}
                    ></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;