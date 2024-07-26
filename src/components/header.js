import React from 'react';
import './header.css'; // Assuming you have a CSS file for styling

const Header = () => {
  return (
    <header className="header">
      <div className="logo-container">
        {/*<img src="path_to_your_logo_image" alt="Logo" className="logo" /> */}
        <span className="brand-name">Keep<span className="highlight-text">Simple</span></span>
      </div>
      <div className="button-container">
        <button className="api-doc-button">API Documentation</button>
        <button className="try-free-button">Try for Free</button>
      </div>
    </header>
  );
};

export default Header;
