import React from 'react'
import { useNavigate } from 'react-router-dom';


const MiddleSection = () => {
  const navigate = useNavigate();

  const handleKnowMore = () => {
    navigate("/about");
  };
  return (
    <>
      <div className="bg-gradient-to-r from-customBlue1 to-customBlue2 py-20 flex items-center justify-center text-center text-white relative">

        {/* Background Image Overlay */}
        <div className="absolute inset-0 bg-cover bg-center opacity-40"></div>

        {/* Content Container */}
        <div className="relative z-10 bg-opacity-70 px-6 lg:px-12 py-10 rounded-lg max-w-4xl">
          {/* Main Heading */}
          <h1 className="text-4xl lg:text-6xl font-bold text-yellow-400 mb-4 animate__animated animate__fadeIn animate__delay-1s">
            Empowering Rural Communities Future Life
          </h1>

          {/* Subtitle */}
          <p className="text-lg lg:text-2xl mt-4 italic mb-8 animate__animated animate__fadeIn animate__delay-2s">
            At <span className="text-yellow-400">RSJ Rural Development Foundation</span>, we are committed to empowering rural communities and women, fostering sustainable development, and driving positive change in society.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 px-4 lg:px-16">
            {/* First Impact Block */}
            <div className="p-6 bg-customBlue1 rounded-lg shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl animate__animated animate__fadeIn animate__delay-2s">
              <h3 className="text-4xl font-bold text-yellow-400 mb-2">500+</h3>
              <p className="text-lg">
                Women Empowered through vocational training, entrepreneurship, and leadership programs.
              </p>
            </div>

            {/* Second Impact Block */}
            <div className="p-6 bg-customBlue1 rounded-lg shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl animate__animated animate__fadeIn animate__delay-3s">
              <h3 className="text-4xl font-bold text-yellow-400 mb-2">300+</h3>
              <p className="text-lg">
                Villages Transformed with improved infrastructure, education, and healthcare services.
              </p>
            </div>

            {/* Third Impact Block */}
            <div className="p-6 bg-customBlue1 rounded-lg shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl animate__animated animate__fadeIn animate__delay-4s">
              <h3 className="text-4xl font-bold text-yellow-400 mb-2">2,000+</h3>
              <p className="text-lg">
                Children Educated, ensuring a brighter future for the next generation.
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="mt-8 space-x-6 flex justify-center animate__animated animate__fadeIn animate__delay-3s">
            {/* Know More Button */}
            <button
              onClick={handleKnowMore}
              className="bg-yellow-500 text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg hover:bg-yellow-400 transition transform hover:scale-105"
            >
              Know More
            </button>

            {/* Donate Button */}
            {/* <button
              className="bg-green-500 text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg hover:bg-green-400 transition transform hover:scale-105"
            >
              Donate
            </button> */}
          </div>
        </div>
      </div>
      


      {/* Mission Section */}

      <div
        className="py-16 bg-gradient-to-r from-customBlue1 to-customBlue2 text-center text-white relative"
      // style={{
      //     backgroundImage: "url('https://images.pexels.com/photos/10629415/pexels-photo-10629415.jpeg?auto=compress&cs=tinysrgb&w=1500')", 
      //     backgroundSize: "cover",
      //     backgroundPosition: "center",
      //     height: "100"
      // }}
      >
        {/* Background overlay */}
        <div className="absolute inset-0 bg-black opacity-40"></div>

        {/* Content Container */}
        <div className="relative z-10 px-6 lg:px-12 py-8">
          <h2 className="text-3xl lg:text-5xl font-bold mb-4 text-white animate__animated animate__fadeIn animate__delay-1s">
            Our Mission
          </h2>

          <p className="text-lg lg:text-2xl mx-auto max-w-4xl mb-8 text-gray-200 italic animate__animated animate__fadeIn animate__delay-2s">
            We believe in the power of rural communities to transform themselves. Our mission focuses on creating a world where every rural individual has access to quality education, healthcare, infrastructure, and opportunities that help them thrive.
          </p>

          {/* Add a "Learn More" button */}
          <div className="flex justify-center">
            <button
              className="bg-yellow-500 text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg hover:bg-yellow-400 transition transform hover:scale-105 animate__animated animate__fadeIn animate__delay-3s"
            >
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* Key Initiatives Section */}

      <div className="py-16 bg-gray-900 text-center relative overflow-hidden"

        style={{
          backgroundImage: "url('https://images.pexels.com/photos/10629418/pexels-photo-10629418.jpeg?auto=compress&cs=tinysrgb&w=600')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100"
        }}
      >

//https://images.pexels.com/photos/10629418/pexels-photo-10629418.jpeg?auto=compress&cs=tinysrgb&w=600

        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-r from-customBlue1 to-customBlue2 opacity-40"></div>

        {/* Content Container */}
        <div className="relative z-10">
          <h2 className="text-3xl lg:text-5xl font-bold text-yellow-300 mb-8 animate__animated animate__fadeIn animate__delay-1s">
            Our Key Initiatives
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 px-4 lg:px-16">
            {/* Rural Development Card */}
            <div className="p-6 border-2 border-customBlue1 rounded-lg shadow-xl bg-customBlue1 text-white transform transition duration-500 hover:scale-105 hover:shadow-2xl hover:bg-blue-700 animate__animated animate__fadeIn animate__delay-2s">
              <h3 className="text-2xl font-semibold mb-4 text-yellow-300">Rural Development</h3>
              <p className="text-lg">
                We work on creating better infrastructure, improving agricultural practices, enhancing access to education, and promoting health and sanitation in rural areas.
              </p>
            </div>

            {/* Women Empowerment Card */}
            <div className="p-6 border-2 border-customBlue1 rounded-lg shadow-xl bg-customBlue1 text-white transform transition duration-500 hover:scale-105 hover:shadow-2xl hover:bg-green-700 animate__animated animate__fadeIn animate__delay-3s">
              <h3 className="text-2xl font-semibold mb-4 text-yellow-300">Women Empowerment</h3>
              <p className="text-lg">
                Our women-centric programs provide skills, knowledge, and resources to help women become leaders, entrepreneurs, and agents of change in their communities.
              </p>
            </div>
          </div>
        </div>
      </div>

     

      {/* How You Can Make a Difference Section */}
      <div className="py-16 bg-gradient-to-r from-customBlue1 to-customBlue2 text-center text-white relative overflow-hidden"
        style={{
          backgroundImage: "url('https://images.pexels.com/photos/10629415/pexels-photo-10629415.jpeg?auto=compress&cs=tinysrgb&w=1500')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100"
        }}
      >
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-r from-customBlue1 to-customBlue2 opacity-30 z-0"></div>

        <div className="relative z-10">
          <h2 className="text-3xl lg:text-5xl font-bold text-yellow-300 mb-8 animate__animated animate__fadeIn animate__delay-1s">
            How You Can Make a Difference
          </h2>

          <div className="flex justify-center gap-8 mb-8">
            {/* Volunteer Button */}
            <button
              onClick={handleKnowMore}
              className="bg-blue-500 text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg transform transition duration-300 hover:scale-105 hover:bg-blue-400 hover:shadow-2xl animate__animated animate__fadeIn animate__delay-2s"
            >
              Volunteer With Us
            </button>

            {/* Donate Button */}
            <button
              className="bg-green-500 text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg transform transition duration-300 hover:scale-105 hover:bg-green-400 hover:shadow-2xl animate__animated animate__fadeIn animate__delay-3s"
            >
              Donate
            </button>
          </div>

          {/* Additional Call to Action Text */}
          <p className="text-lg lg:text-xl font-light text-[#eff3f3] opacity-80 animate__animated animate__fadeIn animate__delay-4s text-center max-w-4xl flex justify-center items-center mx-auto">
            Your involvement, whether through volunteering or donations, can help us create lasting change. Together, we can make a real difference in the lives of rural communities and empower women across the nation.
          </p>
        </div>
      </div>


    
    </>
  )
}

export default MiddleSection
