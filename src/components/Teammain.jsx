import React from 'react';

const TeamMain = () => {
  const teamMembers = [
    {
      name: 'Kartik Paul',
      position: 'Founder & CEO',
      image: 'https://images.pexels.com/photos/12283121/pexels-photo-12283121.jpeg?auto=compress&cs=tinysrgb&w=600',
      bio: 'Kartik is a passionate leader dedicated to creating a positive impact through the RSJRD Foundation.',
    },
    {
      name: 'Vaibhab Katre',
      position: 'Program Manager',
      image: 'https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=600',
      bio: 'Vaibhab manages our community outreach programs and ensures seamless execution of initiatives.',
    },
    {
      name: 'Michael Brown',
      position: 'Volunteer Coordinator',
      image: 'https://images.pexels.com/photos/8237038/pexels-photo-8237038.jpeg?auto=compress&cs=tinysrgb&w=600',
      bio: 'Michael works closely with our volunteers, helping them align their skills with our projects.',
    },
    // {
    //   name: 'Emily Davis',
    //   position: 'Communications Lead',
    //   image: 'https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=600',
    //   bio: 'Emily oversees all communication strategies to amplify the foundation’s message.',
    // }
    // {
    //     name: 'Emily Davis',
    //     position: 'Communications Lead',
    //     image: 'https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=600',
    //     bio: 'Emily oversees all communication strategies to amplify the foundation’s message.',
    //   },
    //   {
    //     name: 'Emily Davis',
    //     position: 'Communications Lead',
    //     image: 'https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=600',
    //     bio: 'Emily oversees all communication strategies to amplify the foundation’s message.',
    //   },
  ];

  return (
    <div className="mx-auto p-6 space-y-6 bg-customBlue1">
      <h1 className="text-3xl font-bold text-center text-[#E35A1E]">Meet Our Team</h1>
      <p className="text-[#0084C2] text-center">
        Behind every impactful initiative is a dedicated team working together to drive change.
      </p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {teamMembers.map((member, index) => (
          <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-lg text-center">
            <img
              src={member.image}
              alt={`${member.name}'s profile`}
              className="w-24 h-24 mx-auto rounded-full object-cover mb-4"
            />
            <h2 className="text-xl font-semibold text-[#E35A1E]">{member.name}</h2>
            <p className="text-[#0084C2] text-sm font-medium">{member.position}</p>
            <p className="text-gray-700 mt-2">{member.bio}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamMain;
