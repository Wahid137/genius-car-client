import React from 'react';

const FeatureCard = ({ feature }) => {
    const { img, title } = feature;
    return (
        <div className=" card card-compact bg-base-100 shadow-xl">
            <figure><img className="rounded-lg" src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p className='text-orange-600 font-semibold'>Price: ${price}</p>
                <div className="card-actions justify-end">
                </div>
            </div>
            );
};

            export default FeatureCard;