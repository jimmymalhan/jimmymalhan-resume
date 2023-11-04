import React, { useState } from 'react';
import './Newsletter.css'; // Import the CSS file

function Newsletter() {
  // Define your Substack URL
  const substackUrl = 'https://your-substack-url.com';

  // State to control the visibility of the subscription popup
  const [showPopup, setShowPopup] = useState(false);

  // Function to handle subscription form submission
  const handleSubscribe = (e) => {
    e.preventDefault();
    const email = e.target.email.value; // Get the entered email
    // Perform your subscription logic here, e.g., send email to your Substack
    alert(`Subscribed with email: ${email}`);
    setShowPopup(false); // Close the popup
  };

  return (
    <div className="newsletter-container">
      {/* Button to open the subscription popup */}
      <button className="subscribe-button" onClick={() => setShowPopup(true)}>
        Subscribe to Newsletter
      </button>

      {/* Subscription Popup */}
      {showPopup && (
        <div className="subscription-popup">
          <h2>Subscribe to Our Newsletter</h2>
          <p>Enter your email below to receive updates and new blog posts:</p>
          <form onSubmit={handleSubscribe}>
            <input type="email" name="email" placeholder="Your Email" required />
            <button type="submit">Subscribe</button>
          </form>
          <button onClick={() => setShowPopup(false)}>Close</button>
        </div>
      )}

      {/* Redirect users to your Substack page */}
      <a href={substackUrl} target="_blank" rel="noopener noreferrer">
        Go to Newsletter
      </a>
    </div>
  );
}

export default Newsletter;
