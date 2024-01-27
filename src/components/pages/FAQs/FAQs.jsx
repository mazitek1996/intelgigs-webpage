import React, { useState } from 'react';
import { FaQuestionCircle } from 'react-icons/fa';
import "./FAQ.css";

function FAQs() {
  const [activeIndex, setActiveIndex] = useState(null);

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

  const toggleAccordion = (categoryIndex, questionIndex) => {
    setActiveIndex(activeIndex === `${categoryIndex}-${questionIndex}` ? null : `${categoryIndex}-${questionIndex}`);
  };

  return (
    <div className='faq_root'>
      <h1>Frequently Asked Questions</h1>
      <div className="faq_categories">
        {faqData.map((category, categoryIndex) => (
          <div key={categoryIndex} className="faq_category">
            <h2>{category.category}</h2>
            {category.questions.map((faq, questionIndex) => (
              <div key={questionIndex} className={`faq_item ${activeIndex === `${categoryIndex}-${questionIndex}` ? 'active' : ''}`}>
                <div className="faq_question" onClick={() => toggleAccordion(categoryIndex, questionIndex)}>
                  <FaQuestionCircle className="faq_icon" />
                  <h3>{faq.question}</h3>
                </div>
                {activeIndex === `${categoryIndex}-${questionIndex}` && (
                  <div className="faq_answer">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default FAQs;






// <div className="accordion" id="accordionDefault">

// <div className="accordion-item">
//   <h3 className="accordion-header" id="headingOne">
//     <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">Accordion Item #1</button>
//   </h3>
//   <div className="accordion-collapse collapse show" id="collapseOne" aria-labelledby="headingOne" data-bs-parent="#accordionDefault">
//     <div className="accordion-body">This is the first item's accordion body. It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element.</div>
//   </div>
// </div>

// <div className="accordion-item">
//   <h3 className="accordion-header" id="headingTwo">
//     <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">Accordion Item #2</button>
//   </h3>
//   <div className="accordion-collapse collapse" id="collapseTwo" aria-labelledby="headingTwo" data-bs-parent="#accordionDefault">
//     <div className="accordion-body">This is the second item's accordion body. It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element.</div>
//   </div>
// </div>

// <div className="accordion-item">
//   <h3 className="accordion-header" id="headingThree">
//     <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">Accordion Item #3</button>
//   </h3>
//   <div className="accordion-collapse collapse" id="collapseThree" aria-labelledby="headingThree" data-bs-parent="#accordionDefault">
//     <div className="accordion-body">This is the third item's accordion body. It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element.</div>
//   </div>
// </div>
// </div>