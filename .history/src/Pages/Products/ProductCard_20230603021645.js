import React from 'react';

const ProductCard = ({ product }) => {
    const { img, title, rating, price } = product;
    return (
        <div className="p-6 relative card card-compact bg-base-100 shadow-xl">
            <figure><img className="p-20rounded-lg h-full" src={img} alt="product" /></figure>
            <div className="card-body text-center absolute bottom-0">
                <h2>{rating}</h2>
                <h2 className="card-title inline">{title}</h2>
                <p className='text-orange-600 font-semibold mb-0'>Price: ${price}</p>
            </div>
        </div>
    );
};

export default ProductCard;