import React, { useEffect, useState } from 'react';

const Team = () => {
    const [teamMember, setTeamMember] = useState([])

    useEffect(() => {
        fetch('team.json')
            .then(res => res.json())
            .then(data => setTeamMember(data))
    }, [])
    return (
        <div>
            <h2>This is team</h2>
        </div>
    );
};

export default Team;