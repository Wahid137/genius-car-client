import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

const TeamCard = ({ teamMember }) => {
    const { title, img, skill } = teamMember;
    return (
        <div className="w-[364px] h-[487px] card card-compact bg-base-100 shadow-xl">
            <figure><img className="rounded-sm w-80 h-72 mt-5" src={img} alt="product" /></figure>
            <div className="card-body text-center mb-5">
                <h2 className="card-title inline">{title}</h2>
                <p className='text-orange-600 font-semibold mb-0'>{skill}</p>
                <div className='flex justify-center pb-3'>
                    <FaFacebook className='w-10 h-10 me-2 text-[#395185]'></FaFacebook>
                    <FaTwitter className='rounded-full w-10 h-10 me-2 px-2 text-white bg-[#55ACEE]'></FaTwitter>
                    <FaLinkedinIn className='w-10 h-10 me-2 p-2 text-white rounded-full bg-[#0A66C2]'></FaLinkedinIn>
                    <FaInstagram className='w-10 h-10 me-2 bg-gradient-to-r from-red-700 to-orange-600 text-white rounded-full p-2'></FaInstagram>
                </div>
            </div>
        </div >
    );
};

export default TeamCard;