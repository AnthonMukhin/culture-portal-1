import React from 'react';
import Helmet from 'react-helmet';
import '../../configs/i18next';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../../static/styles/reset.css';
import '../../../static/fonts/fonts.css';
import './index.css';


import Header from '../Header';
import Footer from '../Footer';


const Layout = ({ children }) => (
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

export default Layout;
