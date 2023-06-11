import TeamCard from './TeamCard';
import member1 from '../../assets/images/team/1.jpg';
import member2 from '../../assets/images/team/2.jpg';
import member3 from '../../assets/images/team/3.jpg';

const Team = () => {
    const teamMembers = [
        {
            "member_id": "01",
            "title": "Car Engine Plug",
            "img": member1,
            "skill": "Engine Expert"
        },
        {
            "member_id": "02",
            "title": "Car Engine Plug",
            "img": member2,
            "skill": "Engine Expert"
        },
        {
            "member_id": "03",
            "title": "Car Engine Plug",
            "img": member3,
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