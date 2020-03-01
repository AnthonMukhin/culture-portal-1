import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';

import './index.css';

class LanguageControl extends Component {
  constructor() {
    super();
    this.state = {
      currentLanguage: 'ru',
    };
  }

  componentDidMount() {
    const { i18n } = this.props;
    const lang = localStorage.getItem('lang');
    if (lang) {
      i18n.changeLanguage(lang);
      this.setState({ currentLanguage: lang });
    }
  }

  handleChange = (event) => {
    const { i18n } = this.props;
    const { value } = event.target;
    i18n.changeLanguage(value);
    this.setState({ currentLanguage: value });
    localStorage.setItem('lang', value);
  };

  render() {
    const { languages } = this.props;
    const { currentLanguage } = this.state;
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
            onChange={this.handleChange}
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
  }
}

export default withTranslation()(LanguageControl);
