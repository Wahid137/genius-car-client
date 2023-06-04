import React from 'react';
import { FaCalendarDay } from 'react-icons/fa';

const Contact = () => {
    return (
        <div className="card my-5 bg-black text-white rounded-lg">
            <div className="card-body">
                <div class="flex justify-around">
                    <div>
                        <FaCalendarDay className='w-8 h-8' />
                        <div>
                            <p className='text-xl'>We are open monday-friday</p>

                        </div>

                    </div>
                    <div>

                    </div>
                    <div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;