import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import getUserLanguage from '../getUserLanguage';
import { createCookie } from '../cookie';

export const languages = [
  'en',
  'de',
];

const LanguageContext = React.createContext();

let locale;

export class LanguageProvider extends PureComponent {
  state = {
    language: undefined,
  }

  async componentDidMount() {
    locale = getUserLanguage();
    this.setState({ // eslint-disable-line react/no-did-mount-set-state
      language: locale,
    });
  }

  changeLanguage = (language) => {
    createCookie('timeline-lang', language);

    this.setState({ language });
    locale = language;
  }

  render() {
    const { changeLanguage } = this;
    const { language } = this.state;
    return (
      <LanguageContext.Provider
        value={{
          language,
          changeLanguage,
        }}>
        {this.props.children}
      </LanguageContext.Provider>
    );
  }
}

LanguageProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const currentlocale = () => locale;

export const LanguageConsumer = LanguageContext.Consumer;
