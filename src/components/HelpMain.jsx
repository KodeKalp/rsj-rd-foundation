import React from 'react';

const HelpMain = () => {
  return (
    <div className="max-w-4xl mx-auto p-4 space-y-6">
      <h1 className="text-3xl font-bold text-center text-gray-900">Help & Support</h1>

      <section className="bg-gray-50 p-6 rounded-lg shadow-sm">
        <h2 className="text-2xl font-semibold text-gray-800">How Can We Assist You?</h2>
        <p className="text-gray-700 mt-2">
          At RSJRD Foundation, we are committed to providing the best support for our community. Whether you're looking for
          information on our programs, volunteering, donations, or need assistance with any issues, we're here to help.
        </p>
      </section>

      <section className="bg-gray-50 p-6 rounded-lg shadow-sm">
        <h2 className="text-2xl font-semibold text-gray-800">Common Help Topics</h2>
        <div className="space-y-4 mt-4">
          <div>
            <h3 className="text-xl font-medium text-gray-700">1. I need help with donating.</h3>
            <p className="text-gray-700 mt-2">
              If you are facing any issues while donating or would like more information about donation options, please visit our
              <a href="/donate" className="text-blue-500"> Donate Page</a> for more details. You can also contact us at
              <strong> contact@rsjrd.org</strong>.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-medium text-gray-700">2. How can I volunteer with RSJRD Foundation?</h3>
            <p className="text-gray-700 mt-2">
              To become a volunteer, please visit our
              <a href="/volunteer" className="text-blue-500"> Volunteer Page</a>. If you have any specific questions, feel free to
              reach out via email at <strong>contact@rsjrd.org</strong>.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-medium text-gray-700">3. I have a technical issue on the website.</h3>
            <p className="text-gray-700 mt-2">
              If you're experiencing any issues navigating our website or accessing certain features, please contact us at
              <strong> techsupport@rsjrd.org</strong>, and our technical team will assist you as soon as possible.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-medium text-gray-700">4. I need information on upcoming events.</h3>
            <p className="text-gray-700 mt-2">
              For information on upcoming events, check our
              <a href="/events" className="text-blue-500"> Events Page</a>. You can also subscribe to our newsletter to stay updated
              on the latest news and events.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-medium text-gray-700">5. How can I contact RSJRD Foundation?</h3>
            <p className="text-gray-700 mt-2">
              You can contact us directly through email at <strong>contact@rsjrd.org</strong> or reach us by phone at <strong>+1 (123) 456-7890</strong>.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 p-6 rounded-lg shadow-sm">
        <h2 className="text-2xl font-semibold text-gray-800">Need Further Assistance?</h2>
        <p className="text-gray-700 mt-2">
          If you cannot find the answer to your question or need further assistance, please don't hesitate to reach out. Our team is here
          to help you with any inquiries or concerns.
        </p>
        <div className="mt-4">
          <h3 className="text-lg font-medium text-gray-700">Email Us:</h3>
          <p className="text-gray-700 mt-1">For general inquiries: <strong>connect@rsjrdfoundation.org</strong></p>
          <p className="text-gray-700 mt-1">For technical support: <strong>techsupport@rsjrd.org</strong></p>
        </div>

        <div className="mt-4">
          <h3 className="text-lg font-medium text-gray-700">Call Us:</h3>
          <p className="text-gray-700 mt-1">Our helpline is available Monday to Friday, 9 AM to 6 PM at <strong>+1 (123) 456-7890</strong>.</p>
        </div>
      </section>

      <section className="bg-gray-50 p-6 rounded-lg shadow-sm">
        <h2 className="text-2xl font-semibold text-gray-800">Follow Us</h2>
        <p className="text-gray-700 mt-2">
          Stay connected and follow us on social media for the latest updates, events, and news about RSJRD Foundation.
        </p>
        <div className="flex space-x-4 mt-4">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-blue-600">
            Facebook
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-blue-400">
            Twitter
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-pink-600">
            Instagram
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-blue-700">
            LinkedIn
          </a>
        </div>
      </section>
    </div>
  );
};

export default HelpMain;
