import React from 'react';

function Contact() {
  return (
    <div className="Contact">
      <h2>Contact Me</h2>
      <p>If you have any questions or would like to get in touch, feel free to contact me using the information below:</p>
      <div className="Contact-info">
        <p>Email: your.email@example.com</p>
        <p>Phone: (123) 456-7890</p>
        <p>LinkedIn: <a href="https://www.linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">Your LinkedIn Profile</a></p>
      </div>
    </div>
  );
}

export default Contact;
