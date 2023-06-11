import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';

const Products = () => {
    const products = [
        {
            "product_id": "04",
            "title": "Car Engine Plug",
            "img": "https://i.ibb.co/R0d8kW8/1.png",
            "price": "20.00",
            "rating": 4
        },
        {
            "product_id": "05",
            "title": "Cools Led Light",
            "img": "https://i.ibb.co/cDj1dx8/2.png",
            "price": "20.00",
            "rating": 5
        },
        {
            "product_id": "01",
            "title": "Cools Led Light",
            "img": "https://i.ibb.co/LvdY2yB/3.png",
            "price": "20.00",
            "rating": 3
        },
        {
            "product_id": "02",
            "title": "Cools Led Light",
            "img": "https://i.ibb.co/txXt5M3/4.png",
            "price": "20.00",
            "rating": 5
        },
        {
            "product_id": "03",
            "title": "Car Air Filter",
            "img": "https://i.ibb.co/CBFnhqn/5.png",
            "price": "30.00",
            "rating": 3.5
        },
        {
            "product_id": "06",
            "title": "Cols Led Light",
            "img": "https://i.ibb.co/sC7RWGG/6.png",
            "price": "20.00",
            "rating": 5
        }
    ]
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div className='my-24'>
            <div className='mx-auto mb-5 text-center w-1/2'>
                <p className='text-2xl font-bold text-orange-600'>Popular Products</p>
                <h2 className="text-5xl font-semibold mb-3">Browser Our Products</h2>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
            </div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    products.map(product => <ProductCard
                        key={product.product_id}
                        product={product}
                    ></ProductCard>)
                }
            </div>
        </div>
    );
};

export default Products;