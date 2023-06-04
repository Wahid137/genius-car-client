import React from 'react';
import './BannerItem.css'

const BannerItem = ({ slide }) => {
    const { image, prev, id, next } = slide;
    return (

        <div id={`slide${id}`} className="carousel-item relative w-full">
            <div className='carousel-img'>
                <img src={image} alt="slide" className="w-full" />
            </div>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right before: top-1/2">
                <a href={`#slide${prev}`} className="btn btn-circle">❮</a>
                <a href={`#slide${next}`} className="btn btn-circle">❯</a>
            </div>
        </div>

    );
};

export default BannerItem;