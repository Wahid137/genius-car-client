import React, { useEffect, useState } from 'react';
import TeamCard from './TeamCard';

const Team = () => {
    const teamMembers = [
        {
            "member_id": "01",
            "title": "Car Engine Plug",
            "img": "https://i.ibb.co/rFk8WGC/2.jpg",
            "skill": "Engine Expert"
        },
        {
            "member_id": "02",
            "title": "Car Engine Plug",
            "img": "https://i.ibb.co/60fZxKd/3.jpg",
            "skill": "Engine Expert"
        },
        {
            "member_id": "03",
            "title": "Car Engine Plug",
            "img": "https://i.ibb.co/k0yLr4Z/1.jpg",
            "skill": "Engine Expert"
        }

    ]
    return (
        <div className='my-24'>
            <div className='mx-auto mb-5 text-center w-1/2'>
                <p className='text-2xl font-bold text-orange-600'>Team</p>
                <h2 className="text-5xl font-semibold mb-3">Meet Our Team</h2>
                <p>The majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
            </div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    teamMembers.map(teamMember => <TeamCard
                        key={teamMember.member_id}
                        teamMember={teamMember}
                    ></TeamCard>)
                }
            </div>
        </div >
    );
};

export default Team;