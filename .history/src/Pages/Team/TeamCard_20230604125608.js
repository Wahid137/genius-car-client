import React from 'react';

const TeamCard = ({ teamMember }) => {
    const { title, img, skill } = teamMember;
    return (
        <div className="w-[364px] h-[487px] card card-compact bg-base-100 shadow-xl">
            <figure><img className="rounded-sm w-80 h-72 mt-5" src={img} alt="product" /></figure>
            <div className="card-body text-center mb-5">
                <h2 className="card-title inline">{title}</h2>
                <p className='text-orange-600 font-semibold mb-0'>{skill}</p>
                <div>

                </div>
            </div>
        </div>
    );
};

export default TeamCard;