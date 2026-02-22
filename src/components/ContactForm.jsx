import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Name from "./Name"
import Navbar from "./Navbar"
import SocialMedia from "./SocialMedia"

const ContactForm = () => {
  const form = useRef();
  const [status, setStatus] = useState(''); // For success/error message

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_fx20eib",     // ← replace
        "template_rlhqt6p",    // ← replace
        form.current,
        "uwADMJp9h0EAnHq_I"      // ← replace (the user_ one)
      )
      .then(
        () => {
          setStatus('Message sent successfully! 🎉');
          form.current.reset(); // Clear form
        },
        (error) => {
          setStatus(`Oops... ${error.text}`);
        }
      );
  };

  return (
    <div style={{ maxWidth: '500px', margin: '0 auto', padding: '2rem' }}>
      <h2>Let's Talk!</h2>
      <form ref={form} onSubmit={sendEmail}>
        <div style={{ marginBottom: '1rem' }}>
          <label htmlFor="user_name">Your Name</label>
          <input
            type="text"
            name="user_name"
            id="user_name"
            required
            style={{ width: '100%', padding: '0.5rem' }}
          />
        </div>

        <div style={{ marginBottom: '1rem' }}>
          <label htmlFor="user_email">Your Email</label>
          <input
            type="email"
            name="user_email"
            id="user_email"
            required
            style={{ width: '100%', padding: '0.5rem' }}
          />
        </div>

        <div style={{ marginBottom: '1rem' }}>
          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            id="message"
            rows="5"
            required
            style={{ width: '100%', padding: '0.5rem' }}
          />
        </div>

        <button
          type="submit"
          style={{
            background: '#ff3366', // your pink
            color: 'white',
            padding: '0.8rem 1.5rem',
            border: 'none',
            borderRadius: '20px',
            fontSize: '1.2rem',
            cursor: 'pointer',
          }}
        >
          Send Message
        </button>
      </form>

      {status && <p style={{ marginTop: '1rem', color: status.includes('Oops') ? 'red' : 'green' }}>{status}</p>}
    </div>
  );
};

export default ContactForm;