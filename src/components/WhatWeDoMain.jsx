import React from 'react';

const WhatWeDoMain = () => {
  const initiatives = [
    {
      title: 'Education for All',
      description:
        'We provide quality education to underprivileged children, ensuring they have access to learning opportunities and resources to build a brighter future.',
      icon: '📚',
    },
    {
      title: 'Healthcare Outreach',
      description:
        'Our healthcare programs deliver medical aid, awareness campaigns, and wellness checks to rural and underserved communities.',
      icon: '💊',
    },
    {
      title: 'Women Empowerment',
      description:
        'We empower women through skill development, entrepreneurship training, and support networks to foster self-reliance.',
      icon: '🌟',
    },
    {
      title: 'Environmental Conservation',
      description:
        'Our environmental initiatives focus on tree plantation drives, waste management, and promoting sustainable living practices.',
      icon: '🌳',
    },
    {
      title: 'Disaster Relief',
      description:
        'In times of crisis, we provide essential support to communities affected by natural disasters, helping them rebuild their lives.',
      icon: '🌊',
    },
    {
        title: 'Disaster Relief',
        description:
          'In times of crisis, we provide essential support to communities affected by natural disasters, helping them rebuild their lives.',
        icon: '🌊',
      },
  ];

  return (
    <div className="py-10 p-6 space-y-6 bg-customBlue1">
      <h1 className="text-3xl font-bold text-center text-[#E35A1E]">What We Do</h1>
      <p className="text-[#0084C2] text-center">
        At RSJRD Foundation, we are committed to creating a positive impact across various aspects of society.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {initiatives.map((initiative, index) => (
          <div
            key={index}
            className="bg-gray-50 p-6 rounded-lg shadow-lg text-center transform hover:scale-105 transition-transform duration-300"
          >
            <div className="text-5xl mb-4">{initiative.icon}</div>
            <h2 className="text-xl font-semibold  text-[#E35A1E]">{initiative.title}</h2>
            <p className="text-gray-700 mt-2">{initiative.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhatWeDoMain;
