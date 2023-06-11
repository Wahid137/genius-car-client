import ProductCard from './ProductCard';
import product1 from '../../assets/images/products/1.png'
import product2 from '../../assets/images/products/2.png'
import product3 from '../../assets/images/products/3.png'
import product4 from '../../assets/images/products/4.png'
import product5 from '../../assets/images/products/5.png'
import product6 from '../../assets/images/products/6.png'

const Products = () => {
    const products = [
        {
            "product_id": "04",
            "title": "Car Engine Plug",
            "img": product1,
            "price": "20.00",
            "rating": 4
        },
        {
            "product_id": "05",
            "title": "Cools Led Light",
            "img": product1,
            "price": "20.00",
            "rating": 5
        },
        {
            "product_id": "01",
            "title": "Cools Led Light",
            "img": product2,
            "price": "20.00",
            "rating": 3
        },
        {
            "product_id": "02",
            "title": "Cools Led Light",
            "img": product4,
            "price": "20.00",
            "rating": 5
        },
        {
            "product_id": "03",
            "title": "Car Air Filter",
            "img": product5,
            "price": "30.00",
            "rating": 3.5
        },
        {
            "product_id": "06",
            "title": "Cols Led Light",
            "img": product6,
            "price": "20.00",
            "rating": 5
        }
    ]

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