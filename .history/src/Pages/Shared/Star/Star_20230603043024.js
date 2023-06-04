import React from 'react';
import { FaStar, faStar, FaStarHalfAlt } from "react-icons/fa";
import { AiOutLineStar } from "react-icons/ai";
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
                    <AiOutLineStar className='icon'></AiOutLineStar>
                )}
            </span>
        )
    });
    return (
        <Wrapper className="icon-style">
            <div>
                {ratingStar}
            </div>
        </Wrapper>
    );
};

export default Star;