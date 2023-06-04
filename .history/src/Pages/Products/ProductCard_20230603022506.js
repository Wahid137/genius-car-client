import React from 'react';

const ProductCard = ({ product }) => {
    const { img, title, rating, price } = product;
    return (
        <div className="p-6 relative card card-compact bg-base-100 shadow-xl">
            <figure className='h-50%'><img className="rounded-sm " src={img} alt="product" /></figure>
            <div className="card-body text-center absolute bottom-0 mt-5">
                <h2>{rating}</h2>
                <h2 className="card-title inline">{title}</h2>
                <p className='text-orange-600 font-semibold mb-0'>Price: ${price}</p>
            </div>
        </div>
    );
};

export default ProductCard;