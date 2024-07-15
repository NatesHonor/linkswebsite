import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const LinkItem = ({ href, className, icon, label, isHovered, onMouseOver, onMouseOut, isDarkMode }) => (
  <a
    href={href}
    target="_blank"
    className={`link ${className} ${isHovered ? 'hovered' : ''} ${isDarkMode ? 'dark-link' : ''}`}
    rel="noopener noreferrer"
    onMouseOver={onMouseOver}
    onMouseOut={onMouseOut}
  >
    <FontAwesomeIcon icon={icon} /> {label}
  </a>
);

export default LinkItem;
