

import React, { useState } from 'react';
import { FaQuestionCircle } from 'react-icons/fa';
import './FAQ.css';

function FAQs() {
  const [activeCategory, setActiveCategory] = useState(null);
  const [activeQuestion, setActiveQuestion] = useState(null);

  const faqData = [
    {
      category: 'General',
      questions: [
        {
          question: 'What services do you offer?',
          answer: 'We offer a range of services, including web development, mobile app development, and custom software solutions.',
        },
        {
          question: 'How can I request a quote?',
          answer: 'You can request a quote by contacting our team through the provided contact channels on our website.',
        },
      ],
    },
    {
      category: 'Technical Support',
      questions: [
        {
          question: 'How do I troubleshoot common issues?',
          answer: 'For technical support, please visit our support portal or contact our dedicated support team at support@example.com.',
        },
        {
          question: 'Are software updates free?',
          answer: 'Yes, software updates are provided free of charge for licensed users. Check our release notes for more information.',
        },
      ],
    },
    // Add more categories and questions as needed
  ];

  const toggleCategory = (categoryIndex) => {
    setActiveCategory(activeCategory === categoryIndex ? null : categoryIndex);
    setActiveQuestion(null);
  };

  const toggleQuestion = (questionIndex) => {
    setActiveQuestion(activeQuestion === questionIndex ? null : questionIndex);
  };

  return (
    <div className="faq_root">
      <div className="faqs_headings text-center">
        <h1>Frequently Asked Questions</h1>
      </div>
      <div className="faqs_container container">
        <div className="accordion" id="accordionFAQ">
          {faqData.map((category, categoryIndex) => (
            <div className="accordion-item" key={categoryIndex}>
              <h2 className="accordion-header" id={`heading${categoryIndex}`}>
                <button
                  className={`accordion-button ${activeCategory === categoryIndex ? '' : 'collapsed'}`}
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#collapse${categoryIndex}`}
                  aria-expanded={activeCategory === categoryIndex ? 'true' : 'false'}
                  aria-controls={`collapse${categoryIndex}`}
                  onClick={() => toggleCategory(categoryIndex)}
                >
                  {category.category}
                </button>
              </h2>
              <div
                id={`collapse${categoryIndex}`}
                className={`accordion-collapse collapse ${activeCategory === categoryIndex ? 'show' : ''}`}
                aria-labelledby={`heading${categoryIndex}`}
                data-bs-parent="#accordionFAQ"
              >
                <div className="accordion-body">
                  {category.questions.map((faq, questionIndex) => (
                    <div key={questionIndex} className="faq_item">
                      <div className="faq_question" onClick={() => toggleQuestion(questionIndex)}>
                        <FaQuestionCircle className="faq_icon" />
                        <h3>{faq.question}</h3>
                      </div>
                      {activeCategory === categoryIndex && activeQuestion === questionIndex && (
                        <div className="faq_answer">
                          <p>{faq.answer}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FAQs;
