import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { withTranslation } from 'react-i18next';

import '../../configs/i18next';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../../static/styles/reset.css';
import '../../../static/fonts/fonts.css';
import './index.css';


import Header from '../Header';
import Footer from '../Footer';


class Layout extends Component {
  componentDidMount() {
    const lang = localStorage.getItem('lang');
    if (lang) {
      const { i18n } = this.props;
      i18n.changeLanguage(lang);
    }
  }

  render() {
    const { children } = this.props;
    return (
      <>
        <Helmet>
          <title>Culture portal. Architects of Belarus.</title>
        </Helmet>
        <div>
          <Header />
          <main>
            {children}
          </main>
          <Footer />
        </div>
      </>
    );
  }
}

export default withTranslation()(Layout);
