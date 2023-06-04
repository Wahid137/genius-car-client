import check from '../../assets/icons/check.svg';
import FeatureCard from './FeatureCard';

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
                <p className='text-2xl font-bold text-orange-600'>Core Features</p>
                <h2 className="text-5xl font-semibold mb-3">Why Choose Us</h2>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
            </div>
            <div className='grid gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-6'>
                {
                    featureList.map(feature => <FeatureCard
                        key={feature.feature_id}
                        feature={feature}
                    ></FeatureCard>)

                }
            </div>
        </div>
    );
};

export default Features;