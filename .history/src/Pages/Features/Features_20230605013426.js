import check from '../../assets/icons/check.svg';

const Features = () => {
    const featureList = [
        {
            "feature_id": "01",
            "title": "Expert Team",
            "img": { check }

        },
        {
            "feature_id": "02",
            "title": "Timely Delivery"

        },
        {
            "feature_id": "03",
            "title": "24/7 Support"
        },
        {
            "feature_id": "04",
            "title": "Best Equipment"
        },
        {
            "feature_id": "05",
            "title": "100% Guarantee"
        },
        {
            "feature_id": "06",
            "title": "Timely Delivery"
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

export default Features;