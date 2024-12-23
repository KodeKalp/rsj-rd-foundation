import React from 'react';

const TeamMain = () => {
  const teamMembers = [
    {
      name: 'John Doe',
      position: 'Founder & CEO',
      image: 'https://via.placeholder.com/150',
      bio: 'John is a passionate leader dedicated to creating a positive impact through the RSJRD Foundation.',
    },
    {
      name: 'Jane Smith',
      position: 'Program Manager',
      image: 'https://via.placeholder.com/150',
      bio: 'Jane manages our community outreach programs and ensures seamless execution of initiatives.',
    },
    {
      name: 'Michael Brown',
      position: 'Volunteer Coordinator',
      image: 'https://via.placeholder.com/150',
      bio: 'Michael works closely with our volunteers, helping them align their skills with our projects.',
    },
    {
      name: 'Emily Davis',
      position: 'Communications Lead',
      image: 'https://via.placeholder.com/150',
      bio: 'Emily oversees all communication strategies to amplify the foundation’s message.',
    },
    {
        name: 'Emily Davis',
        position: 'Communications Lead',
        image: 'https://via.placeholder.com/150',
        bio: 'Emily oversees all communication strategies to amplify the foundation’s message.',
      },
      {
        name: 'Emily Davis',
        position: 'Communications Lead',
        image: 'https://via.placeholder.com/150',
        bio: 'Emily oversees all communication strategies to amplify the foundation’s message.',
      },
  ];

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-6">
      <h1 className="text-3xl font-bold text-center text-gray-900">Meet Our Team</h1>
      <p className="text-gray-700 text-center">
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
            <h2 className="text-xl font-semibold text-gray-800">{member.name}</h2>
            <p className="text-blue-500 text-sm font-medium">{member.position}</p>
            <p className="text-gray-700 mt-2">{member.bio}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamMain;
