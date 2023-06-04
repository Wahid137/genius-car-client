import React, { useEffect, useState } from 'react';
import TeamCard from './TeamCard';

const Team = () => {
    const [teamMembers, setTeamMembers] = useState([])

    useEffect(() => {
        fetch('team.json')
            .then(res => res.json())
            .then(data => setTeamMembers(data))
    }, [])
    return (
        <div className='my-24'>
            <div className='mx-auto mb-5 text-center w-1/2'>
                <p className='text-2xl font-bold text-orange-600'>Team</p>
                <h2 className="text-5xl font-semibold mb-3">Meet Our Tea </h2>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
            </div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    teamMembers.map(teamMember => <TeamCard
                        key={teamMember.member   _id}
                teamMember={teamMember}
                    ></TeamCard>)
                }
        </div>
        </div >
    );
};

export default Team;