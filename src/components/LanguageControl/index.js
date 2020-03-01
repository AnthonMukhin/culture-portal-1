import React from 'react';
import { useTranslation } from 'react-i18next';

import './index.css';

const LanguageControl = ({ languages }) => {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;

  const handleChange = (event) => {
    const { value } = event.target;
    console.log(i18n.language);
    i18n.changeLanguage(value);
    console.log(i18n.language);
    localStorage.setItem('lang', value);
  };

  const items = Object.keys(languages).map((key) => {
    const { path: value, label } = languages[key];
    return (
      <div key={value} className="language-control__item">
        <input
          className="language-control__input"
          id={value}
          type="radio"
          name="language"
          value={value}
          checked={value === currentLanguage}
          onChange={handleChange}
        />
        <label
          className="language-control__label"
          htmlFor={value}
        >
          {label}
        </label>
      </div>
    );
  });

  return (
    <div className="language-control">
      {items}
    </div>
  );
};

export default LanguageControl;
