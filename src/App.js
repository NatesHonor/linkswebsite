import React, { useState, useEffect } from 'react';
import './Styles/App.css';
import { faFolder, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faGithub, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import Header from './Components/Header';
import LinkItem from './Components/LinkItem';
import SocialIcons from './Components/SocialIcons';
import DarkModeToggle from './Components/DarkModeToggle';
import CookieConsent from './Components/CookieConsent';

function App() {
  const [isHovered, setIsHovered] = useState(false);
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
    const body = document.body;
    if (isDarkMode) {
      body.style.backgroundColor = '#333';
      body.style.color = '#fff'; 
    } else {
      body.style.backgroundColor = '#fff';
      body.style.color = '#333';
    }

    if (isCookieConsentGiven) {
      localStorage.setItem('isDarkMode', JSON.stringify(isDarkMode));
    }
  }, [isDarkMode, isCookieConsentGiven]);

  const handleMouseOver = () => setIsHovered(true);
  const handleMouseOut = () => setIsHovered(false);

  const toggleDarkMode = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  const handleCookieConsent = (consent) => {
    setIsCookieConsentGiven(consent);
    if (!consent) {
      localStorage.removeItem('isDarkMode');
    }
  };

  return (
    <div>
      {isCookieConsentGiven === null && (
        <CookieConsent handleCookieConsent={handleCookieConsent} />
      )}
      <div className={`container ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
        <DarkModeToggle isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
        <Header isDarkMode={isDarkMode} />
        <div className="links">
          <LinkItem
            href="mailto:contact@natemarcellus.com"
            className="portfolio"
            icon={faEnvelope}
            label="Email Me"
            isDarkMode={isDarkMode}
          />
          <LinkItem
            href="sms:+1234567890"
            className="portfolio"
            icon={faWhatsapp}
            label="Text Me"
            isHovered={isHovered}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
            isDarkMode={isDarkMode}
          />
          <LinkItem
            href="https://github.com/NatesHonor/"
            className="github"
            icon={faGithub}
            label="GitHub"
            isDarkMode={isDarkMode}
          />
          <LinkItem
            href="https://www.instagram.com/nateshonor/"
            className="instagram"
            icon={faInstagram}
            label={isHovered ? '9.5k Followers' : 'Instagram'}
            isHovered={isHovered}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
            isDarkMode={isDarkMode}
          />
          <LinkItem
            href="https://natemarcellus.com/"
            className="portfolio"
            icon={faFolder}
            label="Portfolio"
            isDarkMode={isDarkMode}
          />
        </div>
      </div>
      <SocialIcons isDarkMode={isDarkMode} />
    </div>
  );
}

export default App;
