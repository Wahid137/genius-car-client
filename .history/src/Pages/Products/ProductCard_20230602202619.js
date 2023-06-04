import React from 'react';

const ProductCard = () => {
    return (
        <div className="p-6 card card-compact bg-base-100 shadow-xl">
            <figure><img className="rounded-lg" src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p className='text-orange-600 font-semibold'>Price: ${price}</p>
                <div className="card-actions justify-end">
                    <Link to={`/services/${_id}`}>
                        <button className="btn btn-primary">Checkout</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;