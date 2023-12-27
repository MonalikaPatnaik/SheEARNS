import React, { useState } from 'react';
import './SubmitEmail.css'

const SubmitEmail = () => {
  const scriptURL = 'https://script.google.com/macros/s/AKfycbyQB_lU7Trm6WpV-TjnXV2rSPwIgDXrZDeFDfhVUAaDP_xkVTYxbaTGpWhlKibqSKk/exec';
  const [email, setEmail] = useState('');
  const [msg, setMsg] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(scriptURL, {
        method: 'POST',
        body: new URLSearchParams({ 'Email': email }),
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      });

      if (response.ok) {
        setMsg('Thank You For Subscribing!');
        setTimeout(() => {
          setMsg('');
        }, 5000);
        setEmail('');
      } else {
        throw new Error('Failed to submit form');
      }
    } catch (error) {
      console.error('Error!', error.message);
    }
  };

  return (
    <div className="hero">
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="Email"
          placeholder="email@mail.com"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit">Subscribe</button>
      </form>
      <span id="msg">{msg}</span>
    </div>
  );
};

export default SubmitEmail;
