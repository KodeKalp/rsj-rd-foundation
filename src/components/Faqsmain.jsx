import React, { useState } from "react";

const FaqsMain = () => {
  // FAQs data
  const faqData = [
    {
      question: "What is the RSJ Rural Development Foundation's mission?",
      answer:
        "Our mission is to improve the quality of life in rural areas by fostering sustainable development, enhancing education, healthcare, and promoting gender equality.",
    },
    {
      question: "How does RSJ support women empowerment?",
      answer:
        "We provide skill development programs, entrepreneurship training, and resources for women to achieve financial independence and leadership roles in their communities.",
    },
    {
      question: "What kind of rural development initiatives does RSJ undertake?",
      answer:
        "Our initiatives include building infrastructure, improving agricultural practices, providing access to clean water, education, and healthcare services.",
    },
    {
      question: "How can I volunteer or contribute to RSJ Foundation?",
      answer:
        "You can volunteer by joining our programs, donating to support our initiatives, or spreading awareness about our mission. Visit our 'Get Involved' page for more details.",
    },
    {
      question: "What are some success stories of RSJ Rural Development Foundation?",
      answer:
        "We have transformed several villages by building schools, providing microfinance for women entrepreneurs, and introducing modern farming techniques for better yields.",
    },
    {
      question: "Are RSJ programs only limited to rural areas?",
      answer:
        "While our focus is on rural areas, some of our programs, especially related to women empowerment and education, extend to semi-urban and urban areas as well.",
    },
    {
      question: "Does RSJ provide funding for small businesses in rural areas?",
      answer:
        "Yes, we offer microfinance opportunities and guidance for setting up small businesses in rural communities.",
    },
    {
      question: "How does RSJ ensure sustainability in its development projects?",
      answer:
        "We prioritize long-term solutions by involving the local community, using sustainable resources, and providing training for maintenance and growth.",
    },
    {
      question: "Can individuals from urban areas participate in RSJ programs?",
      answer:
        "Absolutely! We welcome individuals from all backgrounds to contribute, volunteer, or learn through our programs.",
    },
    {
      question: "How can I stay updated with RSJ's latest activities?",
      answer:
        "You can subscribe to our newsletter, follow us on social media, or visit our website regularly for updates and success stories.",
    },
  ];

  // State to handle active dropdown
  const [activeIndex, setActiveIndex] = useState(null);

  // Toggle the dropdown
  const toggleDropdown = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="py-16 bg-gray-100 min-h-screen">
      <h2 className="text-center text-4xl lg:text-5xl font-extrabold text-gray-800 mb-12">
        Frequently Asked Questions
      </h2>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-4 lg:px-8">
        {/* Left Column - First 5 Questions */}
        <div className="space-y-6">
          {faqData.slice(0, 5).map((faq, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200"
            >
              <div
                onClick={() => toggleDropdown(index)}
                className="cursor-pointer p-6 flex justify-between items-center"
              >
                <h3 className="text-lg lg:text-xl font-bold text-gray-800">
                  {faq.question}
                </h3>
                <span
                  className={`transform transition-transform duration-300 ${
                    activeIndex === index ? "rotate-180" : "rotate-0"
                  }`}
                >
                  ▼
                </span>
              </div>
              {activeIndex === index && (
                <div className="p-6 text-gray-700 border-t border-gray-200">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
        {/* Right Column - Last 5 Questions */}
        <div className="space-y-6">
          {faqData.slice(5).map((faq, index) => (
            <div
              key={index + 5}
              className="bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200"
            >
              <div
                onClick={() => toggleDropdown(index + 5)}
                className="cursor-pointer p-6 flex justify-between items-center"
              >
                <h3 className="text-lg lg:text-xl font-bold text-gray-800">
                  {faq.question}
                </h3>
                <span
                  className={`transform transition-transform duration-300 ${
                    activeIndex === index + 5 ? "rotate-180" : "rotate-0"
                  }`}
                >
                  ▼
                </span>
              </div>
              {activeIndex === index + 5 && (
                <div className="p-6 text-gray-700 border-t border-gray-200">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FaqsMain;
