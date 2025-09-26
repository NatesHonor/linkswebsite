import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

const SocialIcons = ({ isDarkMode }) => (
  <div className="social-icons">
    <a href="https://www.linkedin.com/in/nmarcellus/" target="_blank" className={`linkedin ${isDarkMode ? 'dark-link' : ''}`} rel="noopener noreferrer">
    <FontAwesomeIcon icon={faLinkedin} size="2x" />
    </a>
    <a href="https://twitter.com/nateshonor" target="_blank" className={`twitter ${isDarkMode ? 'dark-link' : ''}`} rel="noopener noreferrer">
    <FontAwesomeIcon icon={faTwitter} size="2x" />
    </a>
  </div>
);

export default SocialIcons;
