import React from 'react';
import Star from '../Shared/Star/Star';

const ProductCard = ({ product }) => {
    const { img, title, rating, price } = product;
    return (
        <div className="w-[364px] h-[380px] card card-compact bg-base-100 shadow-xl">
            <figure className='bg-[#F3F3F3] m-5 h-80 rounded-lg'><img className="rounded-sm w-44 h-36 mt-5" src={img} alt="product" /></figure>
            <div className="card-body text-center mb-5">
                <div>
                    <Star stars={rating}></Star>
                </div>
                <h2 className="card-title inline">{title}</h2>
                <p className='text-orange-600 font-semibold mb-0'>Price: ${price}</p>

            </div>
        </div>
    );
};

export default ProductCard;