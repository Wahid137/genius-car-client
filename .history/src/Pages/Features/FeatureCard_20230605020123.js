import React from 'react';

const FeatureCard = ({ feature }) => {
    const { img, title } = feature;
    return (
        <div className="my-10 card card-compact bg-base-100 shadow-xl">
            <figure><img className="rounded-lg" src={img} alt="Shoes" /></figure>
            <div className="card-body flex justify-center">
                <h2 className="card-title">{title}</h2>
            </div>
        </div>
    );
};

export default FeatureCard;