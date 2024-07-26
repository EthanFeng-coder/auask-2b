import React from 'react';
import './secondSection.css';

const SecondSection = () => {
  return (
<>
<div className='second-section'>
      <h2 className="section-title">
    Our business partner, <span className="highlight">in Australia</span>:
      </h2>
      <div className="button-container">
        <button className="feature-button"><i class="fab fa-searchengin"></i> Baidu</button>
        <button className="feature-button"> <i class="fas fa-school"></i> JR Academy</button>
        <button className="feature-button"><i class="fas fa-briefcase"></i> SeeK</button>
      {/*  <button className="feature-button"></button> */}
      </div>
      </div>
</>
  );
};

export default SecondSection;
