import React, { useState } from "react";
import { FaQuestionCircle } from "react-icons/fa"; // Import icon from react-icons
import { Link } from "react-router-dom"; // Import Link from react-router-dom for navigation
import "./FaqSection.css"; // You can create a CSS file for styling

function FaqSection() {
  const [activeIndex, setActiveIndex] = useState(null);

  const frequentlyAskedQuestions = [
    {
      question: "What services do you offer?",
      answer:
        "We offer a range of services, including web development, mobile app development, and custom software solutions.",
    },
    {
      question: "How can I request a quote?",
      answer:
        "You can request a quote by contacting our team through the provided contact channels on our website.",
    },
    {
      question: "What industries do you specialize in?",
      answer:
        "Our expertise spans across various industries, ensuring versatile solutions that meet diverse business needs.",
    },
    // Add more frequently asked questions and answers as needed
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq_section">
      <div className="faq_container">
        <h2>Frequently Asked Questions</h2>
        <div className="faq_list">
          {frequentlyAskedQuestions.map((faq, index) => (
            <div
              key={index}
              className={`faq_item ${activeIndex === index ? "active" : ""}`}
            >
              <div
                className="faq_question"
                onClick={() => toggleAccordion(index)}
              >
                <FaQuestionCircle className="faq_icon" />
                <h3>{faq.question}</h3>
              </div>
              {activeIndex === index && (
                <div className="faq_answer">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
        <Link to="/faq" className="view_more_link">
          View More FAQs
        </Link>
      </div>
    </section>
  );
}

export default FaqSection;
