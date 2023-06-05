import React from 'react';
import quotation from '../../assets/icons/quote.svg'
import Star from '../Shared/Star/Star';

const TestimonialCard = ({ customerInformation }) => {
    const { img, name, job, quote, rating } = customerInformation;
    return (
        <div className="p-6 card card-compact bg-base-100 shadow-xl">
            <div>
                <div className='flex'>
                    <figure><img className="rounded-full w-14 h-14" src={img} alt="Shoes" /></figure>
                    <div>
                        <h2 className='text-xl font-bold mr-2'>{name}</h2>
                        <p className='font-semibold'>{job}</p>
                    </div>
                </div>
                <img src={quotation} alt="" />
            </div>
            <div className="card-body">
                <p>{quote}</p>
                <Star stars={rating}></Star>
            </div>
        </div>
    );
};

export default TestimonialCard;