import React from 'react'
import { useNavigate } from 'react-router-dom';


const MiddleSection = () => {
  const navigate = useNavigate();

  const handleKnowMore = () => {
    navigate("/about");
  };
  return (
    <>


      <div className=" bg-gradient-to-r from-customBlue1 to-customBlue2 py-10 flex items-center justify-center text-center text-white relative px-10">
        {/* Background Image Overlay */}
        <div className="absolute inset-0 bg-cover bg-center opacity-40"></div>

        {/* Content  */}
        <div className="relative z-10 bg-opacity-70 px-6 lg:px-12 py-10 rounded-lg">
          {/* Main Heading */}
          <h1 className="text-4xl lg:text-6xl font-bold text-yellow-400 mb-8 animate__animated animate__fadeIn animate__delay-1s">
            Empowering Rural Communities Brighter Future
          </h1>

          {/* Subtitle */}
          <p className="text-lg lg:text-2xl italic mb-12 text-center">
            At <span className="text-yellow-400">RSJ Rural Development Foundation</span>, we are committed to empowering rural communities and women, fostering sustainable development, and driving positive change in society.
            Our mission is to provide the tools, resources, and support needed to create opportunities for growth, education, and self-reliance.
          </p>


          {/* Impact Cards */}
          <div class="flex flex-wrap gap-6 justify-center px-10 py-8">

            <div class="bg-green-100 flex items-center justify-center w-72 h-32 rounded-3xl shadow-md px-6">
              <div class="w-16 h-16 flex items-center justify-center bg-green-300 text-white rounded-full">
                <i class="fas fa-female text-3xl"></i>
              </div>
              <div class="ml-6">
                <div class="text-3xl font-bold text-green-600">5.8M+</div>
                <div class="text-lg font-medium text-gray-700 text-left">Empowered</div>
              </div>
            </div>


            <div class="bg-green-100 flex items-center justify-center w-72 h-32 rounded-3xl shadow-md px-6">
              <div class="w-16 h-16 flex items-center justify-center bg-green-300 text-white rounded-full">
                <i class="fas fa-home text-3xl"></i>
              </div>
              <div class="ml-6">
                <div class="text-3xl font-bold text-green-600">4.6M+</div>
                <div class="text-lg font-medium text-gray-700 text-left">Villages</div>
              </div>
            </div>


            <div class="bg-green-100 flex items-center justify-center w-72 h-32 rounded-3xl shadow-md px-6">
              <div class="w-16 h-16 flex items-center justify-center bg-green-300 text-white rounded-full">
                <i class="fas fa-child text-3xl"></i>
              </div>
              <div class="ml-6">
                <div class="text-3xl font-bold text-green-600">142+</div>
                <div class="text-lg font-medium text-gray-700 text-left">Children</div>
              </div>
            </div>


            <div class="bg-green-100 flex items-center justify-center w-72 h-32 rounded-3xl shadow-md px-6">
              <div class="w-16 h-16 flex items-center justify-center bg-green-300 text-white rounded-full">
                <i class="fas fa-users text-3xl"></i>
              </div>
              <div class="ml-6">
                <div class="text-3xl font-bold text-green-600">50+</div>
                <div class="text-lg font-medium text-gray-700 text-left">Families</div>
              </div>
            </div>
          </div>




          {/* Action Buttons */}
          <div className="mt-12 space-x-6 flex justify-center animate__animated animate__fadeIn animate__delay-3s">
            {/* Know More Button */}
            <button
              onClick={handleKnowMore}
              className="bg-yellow-500 text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg hover:bg-yellow-400 transition transform hover:scale-105"
            >
              Know More
            </button>
          </div>
        </div>


      </div>




      {/* Mission Section */}

      <div className=" py-16 bg-gradient-to-r from-customBlue1 to-customBlue2 text-center text-white relative"
      // style={{
      //   backgroundImage: "url('https://images.pexels.com/photos/10629415/pexels-photo-10629415.jpeg?auto=compress&cs=tinysrgb&w=1500')", 
      //   backgroundSize: "cover",
      //   backgroundPosition: "center",
      //   height: "100vh", // Make sure this is set to 100vh (full screen height) or a specific height
      // }}
      >
        {/* Background overlay */}
        <div className="absolute inset-0 bg-black opacity-50"></div>

        {/* Content  */}
        <div className="relative z-10 px-6 lg:px-12 py-8">
          <h2 className="text-3xl lg:text-5xl font-bold mb-4 text-white animate__animated animate__fadeIn animate__delay-1s">
            Our Mission
          </h2>

          <p className="text-lg lg:text-2xl mx-auto max-w-4xl mb-8 text-gray-200 italic animate__animated animate__fadeIn animate__delay-2s">
            We believe in the power of rural communities to transform themselves. Our mission focuses on creating a world where every rural individual has access to quality education, healthcare, infrastructure, and opportunities that help them thrive.
          </p>

          {/* Add a "Learn More" button */}
          <div className="flex justify-center">
            <button className="bg-yellow-500 text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg hover:bg-yellow-400 transition transform hover:scale-105 animate__animated animate__fadeIn animate__delay-3s">
              Learn More
            </button>
          </div>
        </div>
      </div>








      {/* Key Initiatives Section */}
      <div
        className=" py-16 bg-black text-center relative overflow-hidden min-h-screen flex items-center"
      // style={{
      //   backgroundImage:
      //     "url('https://images.pexels.com/photos/10629418/pexels-photo-10629418.jpeg?auto=compress&cs=tinysrgb&w=600')",
      //   backgroundSize: "cover",
      //   backgroundPosition: "center",
      // }}
      >
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-r from-customBlue1 to-customBlue2 opacity-40"></div>

        {/* Content  */}
        <div className="relative z-10 w-full">
          <h2 className="text-4xl lg:text-6xl font-extrabold text-yellow-300 mb-12 tracking-wider animate__animated animate__fadeIn">
            Our Key Initiatives
          </h2>

          {/* Flexbox Row 1: (1,1) and (1,2) */}
          <div className="flex flex-col lg:flex-row justify-between items-start gap-8 px-6 lg:px-12">
            {/* (1,1) Rural Development Text */}
            <div className="flex flex-col justify-start text-left text-white flex-1 px-40 py-8">
              <h3 className="text-3xl font-bold mb-4 text-blue-300 underline decoration-yellow-300">
                Rural Development
              </h3>
              <p className="text-lg leading-relaxed">
                We focus on transforming rural areas by building better infrastructure, enhancing agricultural practices, providing access to quality education, and ensuring health and sanitation improvements. Our goal is to empower rural communities with sustainable resources and opportunities.
              </p>
              <button className='bg-yellow-500 w-50 mt-5 text-white px-4 py-2 rounded-full text-lg font-semibold shadow-lg hover:bg-yellow-400 transition transform hover:scale-105'>All Our Reural Development Work</button>
            </div>

            {/* (1,2) Rural Development Image */}
            <div className="flex items-start  flex-1">
              <img
                src="https://images.pexels.com/photos/95687/pexels-photo-95687.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Rural Development"
                className="rounded-lg shadow-lg w-3/4 h-auto object-cover transform transition duration-500 hover:scale-105 hover:shadow-2xl"
              />
            </div>

          </div>

          {/* Flexbox Row 2: (2,1) and (2,2) */}
          <div className="flex flex-col lg:flex-row justify-between items-start gap-8 px-6 lg:px-12 mt-8">
          <div className="flex items-start  flex-1 px-40 py-8">
              <img
                src="https://images.pexels.com/photos/13270287/pexels-photo-13270287.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Women Empowerment"
                className="rounded-lg shadow-lg w-3/4 h-auto object-cover transform transition duration-500 hover:scale-105 hover:shadow-2xl"
              />
            </div>
            <div className="flex flex-col justify-start p-6 text-left text-white flex-1">
              <h3 className="text-3xl font-bold mb-4 text-green-300 underline decoration-yellow-300">
                Women Empowerment
              </h3>
              <p className="text-lg leading-relaxed">
                Our programs empower women with skills, knowledge, and resources to become leaders and entrepreneurs. We aim to promote gender equality and create opportunities for women to drive meaningful change in their communities.
              </p>
              <button className='bg-yellow-500 w-50 mt-5 text-white px-4 py-2 rounded-full text-lg font-semibold shadow-lg hover:bg-yellow-400 transition transform hover:scale-105'>Our Women Empowerment Work</button>
            </div>
            {/* (2,1) Women Empowerment Image */}
            

            {/* (2,2) Women Empowerment Text */}

          </div>

          {/* Action Button */}
          <div className="mt-12 space-x-6 flex justify-center animate__animated animate__fadeIn">
            <button
              onClick={handleKnowMore}
              className="bg-green-500 text-white px-10 py-3 rounded-full text-lg font-semibold shadow-lg hover:bg-yellow-400 transition transform hover:scale-105"
            >
              Read More
            </button>
          </div>
        </div>
      </div>







      {/* How You Can Make a Difference Section */}

      <div className=" flex flex-col lg:flex-row items-center justify-between bg-customBlue1 py-16">
        <div className="lg:w-1/2">
          <img
            src="https://images.pexels.com/photos/10629415/pexels-photo-10629415.jpeg?auto=compress&cs=tinysrgb&w=1500"
            alt="Make a Difference"
            className="rounded-lg shadow-lg"
          />
        </div>
        {/* Left Content */}
        <div className="lg:w-1/2 px-8">
          <h2 className="text-3xl lg:text-5xl font-bold text-yellow-400 mb-6">
            How You Can Make a Difference
          </h2>
          <p className="text-lg text-gray-100 mb-8">
            Whether by volunteering or donating, you can play a vital role in
            empowering rural communities and transforming lives.
          </p>
          <p className="text-lg text-gray-100 mb-8">
            Every small effort counts. Your contribution can help provide access to
            education, improve healthcare, support sustainable farming practices, and
            create opportunities for women to thrive. Together, we can build a future
            where everyone has the chance to succeed, regardless of their circumstances.
          </p>
          <p className="text-lg text-gray-100 mb-8">
            By joining hands with us, you become a part of a growing community
            dedicated to uplifting rural areas and ensuring equal opportunities for all.
            Let’s work together to create a positive and lasting impact on society.
          </p>
          <div className="flex space-x-4">
            <button
              onClick={handleKnowMore}
              className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-400"
            >
              Volunteer
            </button>
            <button className="bg-green-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-green-400">
              Donate
            </button>
          </div>
        </div>


        {/* Right Image */}

      </div>
      
    </>
  )
}

export default MiddleSection
