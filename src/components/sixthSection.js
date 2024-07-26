import React from 'react';
import './sixthSection.css';

const SixthSection = () => {
  return (
    <section className="sixth-section">
      <div className="newsletter-container">
        <h2 className="newsletter-title">Get Graphlit updates to your inbox</h2>
        <form className="newsletter-form">
          <input type="email" placeholder="Email address" className="email-input" />
          <button type="submit" className="subscribe-button">Subscribe</button>
        </form>
      </div>
    </section>
  );
};

export default SixthSection;
