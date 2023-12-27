
import React, { useState } from 'react';
import './FAQ.css'; // Create a CSS file for styling

const FAQ = () => {
  const [isOpen, setIsOpen] = useState(Array(5).fill(false));

  const toggleAccordion = (index) => {
    setIsOpen((prev) => {
      const newState = [...prev];
      newState[index] = !newState[index];
      return newState;
    });
  };

  const questions = [
    'What is Lorem Ipsum?',
    'Why do we use it?',
    'Where does it come from?',
    'Where can I get some?',
    'Is it free to use?',
  ];

  const answers = Array(5).fill(
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  );

  return (
    <div className="faq-container">
      <div className="leftside">
        <img src="https://illustrations.popsy.co/fuchsia/app-launch.svg" alt="illustration" />
      </div>

      <div className='rightside'>
      <h2>FAQs</h2>
      {questions.map((question, index) => (
        <div key={index} className="faq-item">
          <div className={`question ${isOpen[index] ? 'open' : ''}`} onClick={() => toggleAccordion(index)}>
            {question}
          </div>
          {isOpen[index] && <div className="answer">{answers[index]}</div>}
        </div>
      ))}
      <div className="feedback-section">
        <h3>Send Feedback</h3>
        <div className='submit-textarea'>
            <textarea
            placeholder="Type your feedback here..."
            />
            <button>Submit</button>
        </div>
      </div>
      </div>
    </div>
  );
};

export default FAQ;
