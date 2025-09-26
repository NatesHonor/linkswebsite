import React from 'react';

const Header = ({ isDarkMode }) => (
  <div className="header">
    <h1 style={{ color: isDarkMode ? '#fff' : '#333' }}>
      Nate
      <span className="subscript">All Round Developer | Content Creator</span>
    </h1>
    <p>Find ways to connect with me and view my work!</p>
  </div>
);

export default Header;
