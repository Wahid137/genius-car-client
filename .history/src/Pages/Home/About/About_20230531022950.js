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
                    <h1 className="text-2xl font-bold text-orange-600">About Us</h1>
                    <h1 className="my-5 text-5xl">
                        We are qualified<br />
                        & of experience<br />
                        in this field</h1>
                    <button className="btn bg-orange-600">Get More Info</button>
                </div>
            </div>
        </div>
    );
};

export default About;