import React from 'react';
import icon from '../../assets/icons/quote.svg';

const Testimonial = () => {
    const customersInformation = [
        {
            "customer_id": "01",
            "name": "Awlad Hossain",
            "job": "Businessman",
            "quote": "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
            "img": "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80",
            "icon": icon
        },
        {
            "customer_id": "02",
            "name": "Awlad Hossain",
            "job": "Businessman",
            "quote": "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
            "img": "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80",
            "icon": icon
        }
    ]
    return (
        <div>
            <h2>This is testimonial</h2>
        </div>
    );
};

export default Testimonial;