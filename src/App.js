import React, { useState, useEffect } from 'react';
import './Styles/App.css';
import { faFolder, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faGithub, faDiscord} from '@fortawesome/free-brands-svg-icons';
import Header from './Components/Header';
import LinkItem from './Components/LinkItem';
import SocialIcons from './Components/SocialIcons';
import DarkModeToggle from './Components/DarkModeToggle';
import CookieConsent from './Components/CookieConsent';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isCookieConsentGiven, setIsCookieConsentGiven] = useState(null);
  const [hoveredItem, setHoveredItem] = useState(null);

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
    body.style.backgroundColor = isDarkMode ? '#333' : '#fff';
    body.style.color = isDarkMode ? '#fff' : '#333';

    if (isCookieConsentGiven) {
      localStorage.setItem('isDarkMode', JSON.stringify(isDarkMode));
    }
  }, [isDarkMode, isCookieConsentGiven]);

  const toggleDarkMode = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  const handleCookieConsent = (consent) => {
    setIsCookieConsentGiven(consent);
    if (!consent) {
      localStorage.removeItem('isDarkMode');
    }
  };

  const handleMouseOver = (item) => setHoveredItem(item);
  const handleMouseOut = () => setHoveredItem(null);

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
            href="sms:+(470)705-8483"
            className="phone"
            icon={faPhone}
            label={hoveredItem === 'phone' ? '+1(470)-705-8483' : 'Text Me'}
            onMouseOver={() => handleMouseOver('phone')}
            onMouseOut={handleMouseOut}
            isDarkMode={isDarkMode}
          />
          <LinkItem
             href="mailto:contact@natemarcellus.com"
             className="email"
             icon={faEnvelope}
             label="Email Me"
             isDarkMode={isDarkMode}
          />
          <LinkItem
            href="https://natemarcellus.com/"
            className="portfolio"
            icon={faFolder}
            label="Portfolio"
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
            label={hoveredItem === 'instagram' ? '9.5k Followers' : 'Instagram'}
            onMouseOver={() => handleMouseOver('instagram')}
            onMouseOut={handleMouseOut}
            isDarkMode={isDarkMode}
          />
          <LinkItem
            href="https://discord.gg/invite/UrGZwfjxND"
            className="discord"
            icon={faDiscord}
            label="Join our community!"
            isDarkMode={isDarkMode}
          />
        </div>
      </div>
      <SocialIcons isDarkMode={isDarkMode} />
    </div>
  );
}

export default App;
