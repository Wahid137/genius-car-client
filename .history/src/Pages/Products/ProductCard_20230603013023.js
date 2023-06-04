import React from 'react';

const ProductCard = ({ product }) => {
    const { img, title, rating, price } = product;
    return (
        <div className="p-6 card card-compact bg-base-100 h-sm shadow-xl">
            <figure><img className="rounded-lg h-full" src={img} alt="product" /></figure>
            <div className="card-body text-center h-full">
                <h2>{rating}</h2>
                <h2 className="card-title inline">{title}</h2>
                <p className='text-orange-600 font-semibold'>Price: ${price}</p>
            </div>
        </div>
    );
};

export default ProductCard;