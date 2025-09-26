import React from 'react';

const DarkModeToggle = ({ isDarkMode, toggleDarkMode }) => (
  <div className="mode-switch" onClick={toggleDarkMode}>
    <div className={`slider ${isDarkMode ? 'slider-dark' : 'slider-light'}`}></div>
    <span className={`toggle-text ${isDarkMode ? 'text-light' : 'text-dark'}`}>
      {isDarkMode ? 'Light Mode' : 'Dark Mode'}
    </span>
  </div>
);

export default DarkModeToggle;
