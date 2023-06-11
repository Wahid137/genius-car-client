import React, { useEffect, useState } from 'react';

const Services = () => {
    const [services, setServices] = useState([])

    useEffect(() => {
        fetch('https://genius-car-server-jet-nine.vercel.app/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>

        </div>
    );
};

export default Services;