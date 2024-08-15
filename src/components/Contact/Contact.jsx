import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    comment: '',
    rating: '5', 
  });

  const [submitted, setSubmitted] = useState(false);
  const [error] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);

    setSubmitted(true);
    setFormData({
      name: '',
      email: '',
      comment: '',
      rating: '5',
    });
  };

  return (
    <div className="contact-me-section">
      <h2>Rate My Portfolio</h2>

      <form onSubmit={handleSubmit} className="contact-form">
        {submitted ? (
          <div className="submitted-message">
            <h3>Thank You!</h3>
            <p>Your feedback has been submitted. I appreciate your time!</p>
          </div>
        ) : (
          <>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="comment">Comment:</label>
              <textarea
                id="comment"
                name="comment"
                value={formData.comment}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <div className="form-group">
              <label htmlFor="rating">Rating:</label>
              <select
                id="rating"
                name="rating"
                value={formData.rating}
                onChange={handleChange}
                required
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </div>
            {error && <p className="error-message">{error}</p>}
            <button type="submit">Submit</button>
          </>
        )}
      </form>
    </div>
  );
};

export default Contact;