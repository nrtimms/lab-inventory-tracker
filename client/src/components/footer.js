import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <div className="footer">
      <img src="https://i.imgur.com/os8lEFq.png" alt="Chemical Logo" className="footer-logo" />
      <div className='footer-padding'>
      <p className='footer-text'>&copy; ChemCache: Chemical Inventory Tracker</p>
      <p className='footer-text'> About Us</p>
      <p className='footer-text'> Contact Us</p>
      </div>
    </div>
  );
};

export default Footer;