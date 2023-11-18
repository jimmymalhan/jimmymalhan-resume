import React from 'react';

const NewsletterModal = ({ onClose, isVisible }) => {
  if (!isVisible) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('/api/subscribe', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email: e.target.email.value }),
    })
        .then(response => response.json())
        .then(data => {
          console.log('Success:', data);
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    onClose(); // Close the modal after submission
  };

  return (
    <div className="modal">
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input type="email" name="email" required />
        </label>
        <button type="submit">Subscribe</button>
        <button type="button" onClick={onClose}>Close</button>
      </form>
    </div>
  );
};

export default NewsletterModal;