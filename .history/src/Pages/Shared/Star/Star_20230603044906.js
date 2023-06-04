import React from 'react';
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { AiOutLineStar } from "react-icons/ai";
import './Star.css'

const Star = ({ stars }) => {
    const ratingStar = Array.from({ length: 5 }, (elem, index) => {
        let numbers = index + 0.5;

        return (
            <span key={index}>
                {stars >= index + 1 ? (
                    <FaStar className='icon'></FaStar>
                ) : stars >= numbers ? (
                    <FaStarHalfAlt className='icon'></FaStarHalfAlt>
                ) : (
                    <fStar className='icon'></fStar>
                )}
            </span>
        )
    });
    return (

        <div className='icon-style'>
            {ratingStar}
        </div>

    );
};


export default Star;