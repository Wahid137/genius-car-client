import React from 'react';

const TestimonialCard = ({ customerInformation }) => {
    const { img, name, job, quote, icon } = customerInformation;
    return (
        <div className="p-6 card card-compact bg-base-100 shadow-xl">
            <div>
                <div className='flex'>
                    <figure><img className="rounded-full" src={img} alt="Shoes" /></figure>
                    <div>
                        <h2>{name}</h2>
                        <p>{job}</p>
                    </div>
                </div>
                {icon}
            </div>
            <div className="card-body">

            </div>
        </div>
    );
};

export default TestimonialCard;