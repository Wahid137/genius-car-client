import React from 'react';
import { FaCalendarDay, FaPhone, FaPhoneAlt, FaSearchLocation } from 'react-icons/fa';

const Contact = () => {
    return (
        <div className="card my-5 bg-black text-white rounded-lg">
            <div className="card-body">
                <div class="flex justify-around">
                    <div className='flex items-center'>
                        <FaCalendarDay className='me-5  w-8 h-8' />
                        <div>
                            <p className='text-base'>We are open monday-friday</p>
                            <h1 className='text-2xl'>7:00 am - 9:00 pm</h1>
                        </div>
                    </div>
                    <div className='flex items-center'>
                        <FaPhoneAlt className='me-5  w-8 h-8' />
                        <div>
                            <p className='text-base'>Have a question?</p>
                            <h1 className='text-2xl'>+2546 251 2658</h1>
                        </div>
                    </div>
                    <div className='flex items-center'>
                        <FaSearchLocation className='me-5  w-8 h-8' />
                        <div>
                            <p className='text-base'>Need a repair? our address</p>
                            <h1 className='text-2xl'>Liza Street, New York</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;