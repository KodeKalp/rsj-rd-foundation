// import React, { useState } from 'react';
// //import contact from "../assets/contactus.png";
// import contact from "../assets/LandImg.png";
// import '../css/contactForm.css';
// import FaqsMain from './Faqsmain';

// function ContactForm() {
//     const [formData, setFormData] = useState({
//         name: '',
//         email: '',
//         subject: '',
//         message: ''
//     });

//     const [errors, setErrors] = useState({});

//     const validateForm = () => {
//         let errors = {};
//         let isValid = true;

//         if (!formData.name.trim()) {
//             errors.name = 'Please enter your name';
//             isValid = false;
//         }

//         if (!formData.email.trim()) {
//             errors.email = 'Please enter your email';
//             isValid = false;
//         } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
//             errors.email = 'Please enter a valid email address';
//             isValid = false;
//         }

//         if (!formData.subject.trim()) {
//             errors.subject = 'Please enter a subject';
//             isValid = false;
//         }

//         if (!formData.message.trim()) {
//             errors.message = 'Please enter your message';
//             isValid = false;
//         }

//         setErrors(errors);
//         return isValid;
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         if (validateForm()) {
//             // Perform action (e.g., send form data to server)
//             document.getElementById("success").innerHTML="✔ Message Sent Successfully!";
//             console.log('Form submitted successfully');
//             // Reset form fields
//             setFormData({
//                 name: '',
//                 email: '',
//                 subject: '',
//                 message: ''
//             });
//         }else{
//             document.getElementById("success").innerHTML="";
//         }
//     };

//     const handleChange = (e) => {
//         setFormData({ ...formData, [e.target.id]: e.target.value });
//     };
//     return (
//         <>
//             {/* <!-- Contact Start --> */}
//             <div className="contact">
//                 <div className="container">
//                     <div className="section-header text-center">
//                         <h3 className='text-[#E35A1E] text-xl'>Get In Touch</h3>
//                         <h2 className='text-[#0084C2]'>Contact for any query</h2>
//                     </div>
//                     <div className="contact-img">
//                         <img src={contact} alt="Image" height={50}/> 
//                     </div>
//                     <div className="contact-form">
//                         <div className='sent text-success' id="success"></div>
//                         <form name="sentMessage" id="contactForm" onSubmit={handleSubmit} noValidate>
//                             <div className="control-group">
//                                 <input type="text" className="form-control" id="name" placeholder="Your Name" value={formData.name} onChange={handleChange} autoComplete='name' required />
//                                 <p className="text-danger">{errors.name}</p>
//                             </div>
//                             <div className="control-group">
//                                 <input type="email" className="form-control" id="email" placeholder="Your Email" value={formData.email} onChange={handleChange} autoComplete='email' required />
//                                 <p className="text-danger">{errors.email}</p>
//                             </div>
//                             <div className="control-group">
//                                 <input type="text" className="form-control" id="subject" placeholder="Subject" value={formData.subject} onChange={handleChange} required />
//                                 <p className="text-danger">{errors.subject}</p>
//                             </div>
//                             <div className="control-group">
//                                 <textarea className="form-control" id="message" placeholder="Message" value={formData.message} onChange={handleChange} required></textarea>
//                                 <p className="text-danger">{errors.message}</p>
//                             </div>
//                             <div>
//                                 <button className="btn btn-custom" type="submit" id="sendMessageButton">Send Message</button>
//                             </div>
//                         </form>
//                     </div>
//                 </div>
//             </div>
//             {/* <!-- Contact End --> */}
//             {/* <FaqsMain /> */}
//         </>
//     );
// }

// // export default ContactForm;










import React from "react";

const ContactForm = () => {
  return (
    <div className="flex flex-col items-center px-4 py-8">
      {/* Contact Details */}
      <div className="flex flex-col lg:flex-row items-start lg:items-center lg:justify-between w-full max-w-5xl gap-8">
        <div className="text-left">
          <h2 className="text-[#E35A1E] text-3xl font-bold">Get in Touch With Us</h2>
          <h3 className="text-xl font-semibold mt-2">
            Contact Us For Any Questions!
          </h3>
          <div className="mt-4 space-y-2">
            <p className="font-bold">RSJRD FOUNDATION,</p>
            <p>Sainik Coloni, Plot No.-2062, Katangi</p>
            <p>Gondia, Maharashtra, India, 441601</p>
            
            <p>📞 <a href="tel:+918928991161" className="text-[#E35A1E]">+91 892 899 1161</a></p>
            <p>📧 <a href="mailto:write2us@akshayachaitanya.org" className="text-[#E35A1E]">write2us@akshayachaitanya.org</a></p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="w-full max-w-md">
          <form className="bg-white shadow-lg p-6 rounded-lg space-y-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 "
              required
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 "
              required
            />
            <input
              type="text"
              placeholder="Contact"
              className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 "
              required
            />
            <textarea
              placeholder="Message"
              className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 "
              required
            ></textarea>
            <button
              type="submit"
              className="w-full bg-[#E35A1E] text-white rounded-lg py-3 hover:bg-[#0084C2] transition duration-300"
            >
              Submit
            </button>
          </form>
        </div>
      </div>

      {/* Map */}
      <div className="mt-10 w-full max-w-5xl">
        <iframe
          title="Location Map"
          src="https://www.google.com/maps/embed?pb=!1m18..."
          width="100%"
          height="400"
          style={{ border: "0" }}
          allowFullScreen=""
          loading="lazy"
          className="rounded-lg"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactForm;

