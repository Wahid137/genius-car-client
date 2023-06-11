import React, { useEffect, useState } from 'react';

const Services = () => {
    const [services, setServices] = useState([])

    useEffect(() => {
        fetch('https://genius-car-server-jet-nine.vercel.app/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className=''>
            <div className='mx-auto mb-4 text-center w-1/2'>
                <p className='text-2xl font-bold text-orange-600'>Services</p>
                <h2 className="text-5xl font-semibold mb-3">Our Services Area</h2>
                <p>The majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
            </div>
        </div>
    );
};

export default Services;