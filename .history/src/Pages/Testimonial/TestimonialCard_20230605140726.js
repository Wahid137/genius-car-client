import React from 'react';
import quotation from '../../assets/icons/quote.svg'
import Star from '../Shared/Star/Star';

const TestimonialCard = ({ customerInformation }) => {
    const { img, name, job, quote, rating } = customerInformation;
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
                <img src={quotation} alt="" />
            </div>
            <div className="card-body">
                <p>{quote}</p>
                <Star></Star>
            </div>
        </div>
    );
};

export default TestimonialCard;