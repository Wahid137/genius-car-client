import React from 'react';
import { faStar, FaStarHalfAlt } from "react-icons/fa";
import { AiOutLineStar } from "react-icons/ai";
const Star = ({ stars }) => {
    console.log(stars)
    return (
        <div>
            <h2>{stars}</h2>
        </div>
    );
};

export default Star;