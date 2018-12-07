import React from 'react';
import App, { Container } from 'next/app';

import { LanguageProvider } from '../app/js/context/lang-context';

class TimelineApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <Container>
        <LanguageProvider>
          <Component {...pageProps} />
        </LanguageProvider>
      </Container>
    );
  }
}

export default TimelineApp;
