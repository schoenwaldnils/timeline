import React from 'react';
// import { FaLanguage } from 'react-icons/fa';

import { LanguageConsumer, languages } from './../../js/context/lang-context';

import './LangSwitch.css';


const LangSwitch = () => (
  <LanguageConsumer>
    {({ language, changeLanguage } = {}) => {
      if (!language) return null;
      const otherLanguages = languages.filter(lang => lang !== language);
      return (
        <div className="LangSwitch">
          {/* <FaLanguage /> */}
          { otherLanguages.map(otherLanguage => (
            <button
              key={otherLanguage}
              className="LangSwitch-language"
              onClick={() => changeLanguage(otherLanguage)}>
              { otherLanguage }
            </button>
          ))}
        </div>
      );
    }}
  </LanguageConsumer>
);

export default LangSwitch;
