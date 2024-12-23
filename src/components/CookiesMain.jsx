import React from 'react';

const CookiesMain = () => {
  return (
    <div className="max-w-4xl mx-auto p-4 space-y-6">
      <h1 className="text-3xl font-bold text-center text-gray-900">Cookies Policy</h1>
      
      <section className="bg-gray-50 p-6 rounded-lg shadow-sm">
        <h2 className="text-2xl font-semibold text-gray-800">Introduction</h2>
        <p className="text-gray-700 mt-2">
          This Cookies Policy explains how RSJRD Foundation uses cookies and similar technologies to recognize you
          when you visit our website or use our services. This policy describes what cookies are, how we use them,
          and how you can manage them.
        </p>
      </section>

      <section className="bg-gray-50 p-6 rounded-lg shadow-sm">
        <h2 className="text-2xl font-semibold text-gray-800">What Are Cookies?</h2>
        <p className="text-gray-700 mt-2">
          Cookies are small files that are stored on your device when you visit a website. They help improve the
          functionality of the website by remembering your preferences, login information, and other activities.
        </p>
      </section>

      <section className="bg-gray-50 p-6 rounded-lg shadow-sm">
        <h2 className="text-2xl font-semibold text-gray-800">How We Use Cookies</h2>
        <p className="text-gray-700 mt-2">
          RSJRD Foundation uses cookies for the following purposes:
        </p>
        <ul className="list-disc pl-6 text-gray-700">
          <li>To personalize your experience and respond to your preferences</li>
          <li>To analyze website traffic and usage to improve our services</li>
          <li>To remember your login details and preferences for future visits</li>
          <li>To provide targeted advertising based on your interests</li>
        </ul>
      </section>

      <section className="bg-gray-50 p-6 rounded-lg shadow-sm">
        <h2 className="text-2xl font-semibold text-gray-800">Types of Cookies We Use</h2>
        <p className="text-gray-700 mt-2">
          We use the following types of cookies on our website:
        </p>
        <ul className="list-disc pl-6 text-gray-700">
          <li><strong>Essential Cookies</strong>: These cookies are necessary for the website to function properly, such as remembering your session or authentication status.</li>
          <li><strong>Performance Cookies</strong>: These cookies collect information about how visitors use our website, such as which pages are visited most often or if error messages appear.</li>
          <li><strong>Functionality Cookies</strong>: These cookies allow the website to remember your preferences (such as language or region) and provide enhanced, personalized features.</li>
          <li><strong>Targeting/Advertising Cookies</strong>: These cookies are used to deliver advertisements that are relevant to you and your interests, based on your online activity.</li>
        </ul>
      </section>

      <section className="bg-gray-50 p-6 rounded-lg shadow-sm">
        <h2 className="text-2xl font-semibold text-gray-800">Managing Cookies</h2>
        <p className="text-gray-700 mt-2">
          You have the ability to control cookies through your browser settings. Most browsers allow you to block or
          delete cookies, or to alert you when a cookie is being set. However, please note that blocking or deleting
          cookies may affect the functionality of certain parts of the website.
        </p>
        <p className="text-gray-700 mt-2">
          For more information on how to manage cookies, you can visit the help section of your browser. Below are links
          for managing cookies in popular browsers:
        </p>
        <ul className="list-disc pl-6 text-gray-700">
          <li><a href="https://www.aboutcookies.org/" target="_blank" rel="noopener noreferrer" className="text-blue-500">Learn how to manage cookies in your browser</a></li>
          <li><a href="https://support.google.com/chrome/answer/95647?hl=en" target="_blank" rel="noopener noreferrer" className="text-blue-500">Google Chrome</a></li>
          <li><a href="https://support.mozilla.org/en-US/kb/enable-and-disable-cookies-website-preferences" target="_blank" rel="noopener noreferrer" className="text-blue-500">Mozilla Firefox</a></li>
          <li><a href="https://support.apple.com/en-us/HT201265" target="_blank" rel="noopener noreferrer" className="text-blue-500">Safari</a></li>
        </ul>
      </section>

      <section className="bg-gray-50 p-6 rounded-lg shadow-sm">
        <h2 className="text-2xl font-semibold text-gray-800">Changes to This Cookies Policy</h2>
        <p className="text-gray-700 mt-2">
          We may update this Cookies Policy from time to time to reflect changes in our practices or for other operational,
          legal, or regulatory reasons. We will post the updated policy on this page, and the "Last Updated" date at the
          top will be revised.
        </p>
      </section>

      <section className="bg-gray-50 p-6 rounded-lg shadow-sm">
        <h2 className="text-2xl font-semibold text-gray-800">Contact Us</h2>
        <p className="text-gray-700 mt-2">
          If you have any questions or concerns about our use of cookies, please contact us at <strong>connect@rsjrdfoundation.org</strong>.
        </p>
      </section>

    </div>
  );
};

export default CookiesMain;
