import React from 'react';

const VolentureMain = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <h1 className="text-3xl font-bold text-center text-gray-900">Become a Volunteer</h1>
      <p className="text-gray-700 text-center">
        Join the RSJRD Foundation in making a difference! Your time and efforts can create a positive impact in the lives of many. 
      </p>

      <section className="bg-gray-50 p-6 rounded-lg shadow-sm">
        <h2 className="text-2xl font-semibold text-gray-800">Why Volunteer with RSJRD Foundation?</h2>
        <ul className="list-disc list-inside mt-4 text-gray-700 space-y-2">
          <li>Make a meaningful impact in your community.</li>
          <li>Learn new skills and gain valuable experience.</li>
          <li>Be part of a passionate and dedicated team.</li>
          <li>Contribute to social change and development.</li>
        </ul>
      </section>

      <section className="bg-gray-50 p-6 rounded-lg shadow-sm">
        <h2 className="text-2xl font-semibold text-gray-800">How to Volunteer</h2>
        <p className="text-gray-700 mt-2">
          Follow these simple steps to join our volunteering program:
        </p>
        <ol className="list-decimal list-inside mt-4 text-gray-700 space-y-2">
          <li>Fill out the online application form below.</li>
          <li>Attend an orientation session to understand our mission and goals.</li>
          <li>Participate in our programs and contribute your skills and time.</li>
        </ol>
      </section>

      <section className="bg-gray-50 p-6 rounded-lg shadow-sm">
        <h2 className="text-2xl font-semibold text-gray-800">Volunteer Application Form</h2>
        <form className="mt-6 space-y-4">
          <div>
            <label htmlFor="name" className="block text-gray-700 font-medium">Full Name</label>
            <input
              type="text"
              id="name"
              placeholder="Enter your full name"
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-gray-700 font-medium">Email Address</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
              required
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-gray-700 font-medium">Phone Number</label>
            <input
              type="tel"
              id="phone"
              placeholder="Enter your phone number"
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
              required
            />
          </div>
          <div>
            <label htmlFor="skills" className="block text-gray-700 font-medium">Skills & Expertise</label>
            <textarea
              id="skills"
              rows="4"
              placeholder="Describe your skills or areas of expertise"
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300"
          >
            Submit Application
          </button>
        </form>
      </section>

      <section className="bg-gray-50 p-6 rounded-lg shadow-sm">
        <h2 className="text-2xl font-semibold text-gray-800">Contact Us for Volunteering</h2>
        <p className="text-gray-700 mt-2">
          If you have any questions about volunteering, feel free to contact us at:
        </p>
        <ul className="mt-4 text-gray-700 space-y-2">
          <li><strong>Email:</strong> volunteer@rsjrd.org</li>
          <li><strong>Phone:</strong> +1 (123) 456-7890</li>
        </ul>
      </section>
    </div>
  );
};

export default VolentureMain;
