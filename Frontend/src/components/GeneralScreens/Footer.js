import React, { useState, useEffect } from 'react';
import '../../Css/Footer.css';

const Footer = () => {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    const interval = setInterval(() => {
      // Update the year every 60 seconds to account for the new year
      setCurrentYear(new Date().getFullYear());
    }, 60000);

    return () => clearInterval(interval);
  }, []); // Run only once on component mount

  return (
    <div>
      <div className="footer">
      </div>
      <div className="copyright">
        <p className="copyright-blog">© {currentYear} Aditya. All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
