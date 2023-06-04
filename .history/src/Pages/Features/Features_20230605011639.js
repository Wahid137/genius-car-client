import React, { useEffect, useState } from 'react';

const Features = () => {
    const [feature, setFeature] = useState([])
    useEffect(() => {
        fetch('features.json')
            .then(res => res.json())
            .then(data => setFeature(data))
    }, [])
    return (
        <div>
            <h2>This is Features: {feature.length}</h2>

        </div>
    );
};

export default Features;