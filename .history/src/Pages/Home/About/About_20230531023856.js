import React from 'react';
import person from '../../../assets/images/about_us/person.jpg';
import parts from '../../../assets/images/about_us/parts.jpg';

const About = () => {
    return (
        <div className="hero my-20">
            <div className="hero-content flex-col lg:flex-row">
                <div className='relative w-1/2'>
                    <img src={person} alt="person" className="max-w-sm rounded-lg shadow-2xl h-9 w-full" />
                    <img src={parts} alt="parts" className="absolute right-5 w-3/5 top-1/2 max-w-sm rounded-lg shadow-2xl" />
                </div>
                <div className='w-1/2'>
                    <h1 className="text-2xl font-bold text-orange-600">About Us</h1>
                    <h1 className="my-5 text-5xl">
                        We are qualified<br />
                        & of experience<br />
                        in this field
                    </h1>
                    <p className="py-6">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                    <p className="py-6">the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                    <button className="btn bg-orange-600">Get More Info</button>
                </div>
            </div>
        </div>
    );
};

export default About;