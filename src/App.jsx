import React, { useState, useEffect } from 'react';
import './Styles/App.css';
import { faFolder, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faGithub, faDiscord } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isCookieConsentGiven, setIsCookieConsentGiven] = useState(null);

  useEffect(() => {
    const cookieConsent = localStorage.getItem('cookieConsent');
    if (cookieConsent) {
      setIsCookieConsentGiven(JSON.parse(cookieConsent));
      const savedDarkMode = localStorage.getItem('isDarkMode');
      if (savedDarkMode) {
        setIsDarkMode(JSON.parse(savedDarkMode));
      }
    }
  }, []);

  useEffect(() => {
    if (isCookieConsentGiven !== null) {
      localStorage.setItem('cookieConsent', JSON.stringify(isCookieConsentGiven));
    }
  }, [isCookieConsentGiven]);

  useEffect(() => {
    if (isCookieConsentGiven) {
      localStorage.setItem('isDarkMode', JSON.stringify(isDarkMode));
    }
  }, [isDarkMode, isCookieConsentGiven]);

  const toggleDarkMode = () => setIsDarkMode(prev => !prev);

  const handleCookieConsent = (consent) => {
    setIsCookieConsentGiven(consent);
    if (!consent) {
      localStorage.removeItem('isDarkMode');
    }
  };

  return (
    <div className={`app ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
      {isCookieConsentGiven === null && (
        <div className="cookie-banner">
          <p>This site uses cookies to enhance your experience.</p>
          <button onClick={() => handleCookieConsent(true)}>Accept</button>
          <button onClick={() => handleCookieConsent(false)}>Decline</button>
        </div>
      )}

      <header className="header">
        <h1>Nate Marcellus</h1>
        <p className="subscript">Developer • Designer • Creator</p>
        <button className="mode-toggle" onClick={toggleDarkMode}>
          {isDarkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
        </button>
      </header>

      <main className="links">
        <a href="sms:+(470)705-8483" className="link">
          <FontAwesomeIcon icon={faPhone} /> Text Me
        </a>
        <a href="mailto:contact@natemarcellus.com" className="link">
          <FontAwesomeIcon icon={faEnvelope} /> Email Me
        </a>
        <a href="https://natemarcellus.com/" className="link">
          <FontAwesomeIcon icon={faFolder} /> Portfolio
        </a>
        <a href="https://github.com/NatesHonor/" className="link">
          <FontAwesomeIcon icon={faGithub} /> GitHub
        </a>
        <a href="https://www.instagram.com/nateshonor/" className="link">
          <FontAwesomeIcon icon={faInstagram} /> Instagram
        </a>
        <a href="https://discord.gg/invite/UrGZwfjxND" className="link">
          <FontAwesomeIcon icon={faDiscord} /> Discord
        </a>
      </main>

      <footer className="social-footer">
        <a href="https://github.com/NatesHonor"><FontAwesomeIcon icon={faGithub} /></a>
        <a href="https://www.instagram.com/nateshonor/"><FontAwesomeIcon icon={faInstagram} /></a>
        <a href="https://discord.gg/invite/UrGZwfjxND"><FontAwesomeIcon icon={faDiscord} /></a>
      </footer>
    </div>
  );
}

export default App;
