import React, { useEffect, useState } from 'react';
import check from '../../assets/icons/check.svg';

const Features = () => {
    const featureList = [
        {
            "feature_id": "01",
            "title": "Expert Team",
            "img": { check }

        },
        {
            "feature_id": "02",
            "title": "Timely Delivery"

        },
        {
            "feature_id": "03",
            "title": "24/7 Support"
        },
        {
            "feature_id": "03",
            "title": "Best Equipment"
        },
        {
            "feature_id": "03",
            "title": "100% Guarantee"
        },
        {
            "feature_id": "03",
            "title": "Timely Delivery"
        }

    ]

    return (
        <div>
            {
                featureList.map(feature => console.log(feature))
            }

        </div>
    );
};

export default Features;