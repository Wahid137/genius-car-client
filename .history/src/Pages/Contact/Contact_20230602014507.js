import React from 'react';
import { FaBeer, TbCalendarTime, TbCalendar } from 'react-icons/fa';

const Contact = () => {
    return (
        <div className="card my-5 bg-black text-white rounded-lg">
            <div className="card-body">
                <div class="flex justify-around">
                    <div>
                        <FaBeer />
                        <TbCalendarTime />
                        <TbCalendar />

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