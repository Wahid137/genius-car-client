import React from 'react';

const BannerItem = ({ slide }) => {
    const { image, prev, id, next } = slide;
    return (
        <div>
            <h2>{id}</h2>
        </div>
    );
};

export default BannerItem;