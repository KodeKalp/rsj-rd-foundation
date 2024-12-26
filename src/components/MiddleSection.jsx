import React from "react";
import { useNavigate } from "react-router-dom";

const MiddleSection = () => {
  const navigate = useNavigate();

  const handleKnowMore = () => {
    navigate("/about");
  };
  return (
    <>
      <div className=" bg-gradient-to-r from-customBlue1 to-customBlue2 py-5 flex items-center justify-center text-center text-white relative px-10">
        {/* Background Image Overlay */}
        <div className="absolute inset-0 bg-cover bg-center opacity-40"></div>

        {/* Content  */}
        <div className="relative z-10 bg-opacity-70 px-6 lg:px-12 py-10 rounded-lg">
          {/* Main Heading */}
          <h1 className="text-4xl lg:text-6xl font-bold text-[#E35A1E] mb-8 ">
            Empowering Communities
          </h1>

          {/* Subtitle */}
          <p className="text-lg lg:text-2xl italic mb-1 text-center">
            At{" "}
            <span className="text-[#E35A1E]">
              RSJ Rural Development Foundation
            </span>
            , we are committed to empowering rural communities and women,
            fostering sustainable development, and driving positive change in
            society. Our mission is to provide the tools, resources, and support
            needed to create opportunities for growth, education, and
            self-reliance.
          </p>

          {/* Impact Cards */}
          {/* <div class="flex flex-wrap gap-6 justify-center px-10 py-8">
            <div class="bg-green-100 flex items-center justify-center w-72 h-32 rounded-3xl shadow-md px-6">
              <div class="w-16 h-16 flex items-center justify-center bg-[#0084C2] text-white rounded-full">
                <i class="fas fa-female text-3xl"></i>
              </div>
              <div class="ml-6">
                <div class="text-3xl font-bold text-[#E35A1E]">5.8M+</div>
                <div class="text-xl font-semibold text-[#0084C2] text-left">
                  Empowered
                </div>
              </div>
            </div>

            <div class="bg-green-100 flex items-center justify-center w-72 h-32 rounded-3xl shadow-md px-6">
              <div class="w-16 h-16 flex items-center justify-center bg-[#0084C2] text-white rounded-full">
                <i class="fas fa-home text-3xl"></i>
              </div>
              <div class="ml-6">
                <div class="text-3xl font-bold text-[#E35A1E]">4.6M+</div>
                <div class="text-xl font-semibold text-[#0084C2] text-left">
                  Villages
                </div>
              </div>
            </div>

            <div class="bg-green-100 flex items-center justify-center w-72 h-32 rounded-3xl shadow-md px-6">
              <div class="w-16 h-16 flex items-center justify-center bg-[#0084C2] text-white rounded-full">
                <i class="fas fa-child text-3xl"></i>
              </div>
              <div class="ml-6">
                <div class="text-3xl font-bold text-[#E35A1E]">142+</div>
                <div class="text-xl font-semibold text-[#0084C2] text-left">
                  Children
                </div>
              </div>
            </div>

            <div class="bg-green-100 flex items-center justify-center w-72 h-32 rounded-3xl shadow-md px-6">
              <div class="w-16 h-16 flex items-center justify-center bg-[#0084C2] text-white rounded-full">
                <i class="fas fa-users text-3xl"></i>
              </div>
              <div class="ml-6">
                <div class="text-3xl font-bold text-[#E35A1E]">50+</div>
                <div class="text-xl font-semibold text-[#0084C2] text-left">
                  Families
                </div>
              </div>
            </div>
          </div> */}

          {/* For DeskTop */}

          <div class="hidden md:flex flex-wrap gap-6 justify-center px-10 py-8">
            <div class="bg-green-100 flex items-center justify-center w-72 h-32 rounded-3xl shadow-md px-6">
              <div class="w-16 h-16 flex items-center justify-center bg-[#0084C2] text-white rounded-full">
                <i class="fas fa-female text-3xl"></i>
              </div>
              <div class="ml-6">
                <div class="text-3xl font-bold text-[#E35A1E]">5.8M+</div>
                <div class="text-xl font-semibold text-[#0084C2] text-left">
                  Empowered
                </div>
              </div>
            </div>

            <div class="bg-green-100 flex items-center justify-center w-72 h-32 rounded-3xl shadow-md px-6">
              <div class="w-16 h-16 flex items-center justify-center bg-[#0084C2] text-white rounded-full">
                <i class="fas fa-home text-3xl"></i>
              </div>
              <div class="ml-6">
                <div class="text-3xl font-bold text-[#E35A1E]">4.6M+</div>
                <div class="text-xl font-semibold text-[#0084C2] text-left">
                  Villages
                </div>
              </div>
            </div>

            <div class="bg-green-100 flex items-center justify-center w-72 h-32 rounded-3xl shadow-md px-6">
              <div class="w-16 h-16 flex items-center justify-center bg-[#0084C2] text-white rounded-full">
                <i class="fas fa-child text-3xl"></i>
              </div>
              <div class="ml-6">
                <div class="text-3xl font-bold text-[#E35A1E]">142+</div>
                <div class="text-xl font-semibold text-[#0084C2] text-left">
                  Children
                </div>
              </div>
            </div>

            <div class="bg-green-100 flex items-center justify-center w-72 h-32 rounded-3xl shadow-md px-6">
              <div class="w-16 h-16 flex items-center justify-center bg-[#0084C2] text-white rounded-full">
                <i class="fas fa-users text-3xl"></i>
              </div>
              <div class="ml-6">
                <div class="text-3xl font-bold text-[#E35A1E]">50+</div>
                <div class="text-xl font-semibold text-[#0084C2] text-left">
                  Families
                </div>
              </div>
            </div>
          </div>

          {/* For Mobile */}


  <div className="md:hidden flex gap-4 mt-5">     
  <div class="bg-green-100 flex flex-col items-center justify-center w-32 h-40 rounded-xl shadow-md">
    <div class="w-14 h-14 flex items-center justify-center bg-[#0084C2] text-white rounded-full my-3">
      <i class="fas fa-female text-2xl"></i>
    </div>
    <div class="text-center">
      <div class="text-2xl font-bold text-[#E35A1E]">5.8M+</div>
      <div class="text-base font-semibold text-[#0084C2]">Empowered</div>
    </div>
  </div>

  <div class="bg-green-100 flex flex-col items-center justify-center w-32 h-40 rounded-xl shadow-md">
    <div class="w-14 h-14 flex items-center justify-center bg-[#0084C2] text-white rounded-full my-3">
      <i class="fas fa-home text-2xl"></i>
    </div>
    <div class="text-center">
      <div class="text-2xl font-bold text-[#E35A1E]">4.6M+</div>
      <div class="text-base font-semibold text-[#0084C2]">Villages</div>
    </div>
  </div>
  </div>



<div className="md:hidden flex gap-4 mt-5">  
  <div class="bg-green-100 flex flex-col items-center justify-center w-32 h-40 rounded-xl shadow-md">
    <div class="w-14 h-14 flex items-center justify-center bg-[#0084C2] text-white rounded-full my-3">
      <i class="fas fa-child text-2xl"></i>
    </div>
    <div class="text-center">
      <div class="text-2xl font-bold text-[#E35A1E]">142+</div>
      <div class="text-base font-semibold text-[#0084C2]">Children</div>
    </div>
  </div>

  <div class="bg-green-100 flex flex-col items-center justify-center w-32 h-40 rounded-xl shadow-md">
    <div class="w-14 h-14 flex items-center justify-center bg-[#0084C2] text-white rounded-full my-3">
      <i class="fas fa-users text-2xl"></i>
    </div>
    <div class="text-center">
      <div class="text-2xl font-bold text-[#E35A1E]">50+</div>
      <div class="text-base font-semibold text-[#0084C2]">Families</div>
    </div>
  </div>
  </div>



          {/* Action Buttons */}
          <div className="mt-12 space-x-6 flex justify-center animate__animated animate__fadeIn animate__delay-3s">
            {/* Know More Button */}
            <button
              onClick={handleKnowMore}
              className="bg-[#E35A1E] text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg hover:bg-[#0084C2] transition transform hover:scale-105 duration-300"
            >
              Know More
            </button>
          </div>
        </div>
      </div>

      {/* Mission Section */}

      <div
        className=" py-16 bg-gradient-to-r from-customBlue1 to-customBlue2 text-center text-white relative"
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
          <h2 className="text-3xl lg:text-5xl font-bold mb-4 text-[#E35A1E] animate__animated animate__fadeIn animate__delay-1s">
            Our Mission
          </h2>

          <p className="text-lg lg:text-2xl mx-auto max-w-4xl mb-8 text-gray-200 italic animate__animated animate__fadeIn animate__delay-2s">
            We believe in the power of rural communities to transform
            themselves. Our mission focuses on creating a world where every
            rural individual has access to quality education, healthcare,
            infrastructure, and opportunities that help them thrive.
          </p>

          {/* Add a "Learn More" button */}
          <div className="flex justify-center">
            <button className="bg-[#E35A1E] text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg hover:bg-[#0084C2] transition transform hover:scale-105 animate__animated animate__fadeIn animate__delay-3s duration-300">
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* Key Initiatives Section */}
      <div className="py-16 bg-black text-center relative overflow-hidden min-h-screen flex items-center">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-r from-customBlue1 to-customBlue2 opacity-40"></div>

        {/* Content */}
        <div className="relative z-10 w-full">
          <h2 className="text-4xl lg:text-6xl font-extrabold text-[#E35A1E] mb-12 tracking-wider animate__animated animate__fadeIn">
            Our Key Initiatives
          </h2>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 px-6 lg:px-12 my-20">
            {/* (1,1) Rural Development Text */}

            <div className="md:hidden flex justify-center">
              <img
                src="https://images.pexels.com/photos/95687/pexels-photo-95687.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Rural Development"
                className="rounded-lg shadow-lg w-3/4 h-auto object-cover transform transition duration-500 scale-105 hover:shadow-2xl"
              />
            </div>

            <div className="flex flex-col text-left justify-center text-white px-8 lg:px-16 py-8">
              <h3 className="text-3xl font-bold mb-4  text-[#0084C2]  decoration-yellow-300">
                Rural Development
              </h3>
              <p className="text-lg leading-relaxed">
                We focus on transforming rural areas by building better
                infrastructure, enhancing agricultural practices, providing
                access to quality education, and ensuring health and sanitation
                improvements. Our goal is to empower rural communities with
                sustainable resources and opportunities.
              </p>
              <button className="bg-[#E35A1E] mt-5 text-white px-4 py-3 rounded-full text-lg font-semibold shadow-lg hover:bg-[#0084C2] transition transform hover:scale-105 duration-300">
                know More
              </button>
            </div>

            {/* (1,2) Rural Development Image */}
            <div className="hidden md:flex justify-center">
              <img
                src="https://images.pexels.com/photos/95687/pexels-photo-95687.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Rural Development"
                className="rounded-lg shadow-lg w-3/4 h-auto object-cover transform transition duration-500 scale-105 hover:shadow-2xl"
              />
            </div>




            {/* (2,1) Women Empowerment Image */}
            <div className="flex justify-center">
              <img
                src="https://images.pexels.com/photos/13270287/pexels-photo-13270287.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Women Empowerment"
                className="rounded-lg shadow-lg w-3/4 h-auto object-cover transform transition duration-500 scale-105 hover:shadow-2xl"
              />
            </div>

            {/* (2,2) Women Empowerment Text */}
            <div className="flex flex-col text-left justify-center text-white px-8 lg:px-16 py-8">
              <h3 className="text-3xl font-bold mb-4 text-[#E35A1E]  decoration-yellow-300">
                Women Empowerment
              </h3>
              <p className="text-lg leading-relaxed">
                Our programs empower women with skills, knowledge, and resources
                to become leaders and entrepreneurs. We aim to promote gender
                equality and create opportunities for women to drive meaningful
                change in their communities.
              </p>
              <button className="bg-[#0084C2] mt-5 text-white px-4 py-3 rounded-full text-lg font-semibold shadow-lg hover:bg-[#E35A1E] transition transform hover:scale-105">
              know More
              </button>
            </div>
          </div>

          {/* Action Button */}
          {/* <div className="mt-12 space-x-6 flex justify-center animate__animated animate__fadeIn">
            <button
              onClick={handleKnowMore}
              className="bg-[#E35A1E] text-white px-10 py-3 rounded-full text-lg font-semibold shadow-lg hover:bg-[#0084C2] transition transform hover:scale-105"
            >
              Read More
            </button>
          </div> */}
        </div>
      </div>

      {/* How You Can Make a Difference Section */}

      <div className="bg-customBlue1 py-16 px-6 lg:px-20">
        <h2 className="text-4xl lg:text-6xl font-extrabold text-[#E35A1E] mb-12 tracking-wider text-center sm:text-center">
          Why Differences With Us
        </h2>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-[#0084C2] text-center">
              Make Every Occasion A Celebration Of Giving
            </h2>
            <div className="w-20 h-1 bg-green-400 rounded-full"></div>
            <p className="text-lg text-gray-200 leading-relaxed lg:text-left sm:text-center">
              Let's turn moments of personal joy into acts of collective
              compassion. With each anniversary, birthday, or a special
              occasion, your donation becomes a beacon of hope for those facing
              adversity. Join us in celebrating not just milestones, but the
              enduring spirit of giving back. Together, we can create a ripple
              effect of kindness that nourishes hearts and futures alike.
            </p>
            <button
              onClick={handleKnowMore}
              className="bg-[#E35A1E] text-white px-10 py-3 rounded-full text-lg font-semibold shadow-lg hover:bg-[#0084C2] transition transform hover:scale-105"
            >
              Celebrate With Us
            </button>
          </div>

          {/* Right Images */}
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://images.pexels.com/photos/20356777/pexels-photo-20356777/free-photo-of-farmers-in-india.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="women"
              className="rounded-lg shadow-lg transform hover:scale-105 transition duration-300"
            />
            <img
              src="https://images.pexels.com/photos/325521/pexels-photo-325521.jpeg"
              alt="Kids eating meal"
              className="rounded-lg shadow-lg transform hover:scale-105 transition duration-300"
            />
            <img
              src="https://images.pexels.com/photos/12451890/pexels-photo-12451890.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Girl holding food"
              className="col-span-2 rounded-lg shadow-lg transform hover:scale-105 transition duration-300"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default MiddleSection;
