import React from 'react';
import person from '../../../assets/images/about_us/person.jpg';
import parts from '../../../assets/images/about_us/parts.jpg';

const About = () => {
    return (
        <div className="hero my-20">
            <div className="hero-content flex-col lg:flex-row">
                <img src={person} alt="person" className="max-w-sm rounded-lg shadow-2xl" />
                <img src={parts} alt="person" className="max-w-sm rounded-lg shadow-2xl" />
                <div className='w-1/2'>
                    <h1 className="text-5xl font-bold">Box Office News!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button className="btn bg-orange-600">Get More Info</button>
                </div>
            </div>
        </div>
    );
};

export default About;