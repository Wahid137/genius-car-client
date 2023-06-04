import React from 'react';

const ProductCard = ({ product }) => {
    const { title, rating, price } = product;
    return (
        <div className="p-6 card card-compact bg-base-100 shadow-xl">
            <figure><img className="rounded-lg" src={ } alt="Shoes" /></figure>
            <div className="card-body">
                <h2>{rating}</h2>
                <h2 className="card-title">{title}</h2>
                <p className='text-orange-600 font-semibold'>Price: ${price}</p>
            </div>
        </div>
    );
};

export default ProductCard;