import React from 'react';
import '../Styles/Cookies.css';

const CookieConsent = ({ handleCookieConsent }) => (
  <div className="cookie-consent">
    <p>We use cookies to save your preferences. Do you allow cookies?</p>
    <div>
    <button className="yes-button" onClick={() => handleCookieConsent(true)}>Yes</button>
    <button className="no-button" onClick={() => handleCookieConsent(false)}>No</button>
    </div>
  </div>
);

export default CookieConsent;
