import React from 'react';

import Header from 'components/Header';
import Footer from 'components/Footer';
// Styles
import 'src/styles/index.scss'
import layoutStyles from 'components/Layout.module.scss'

const Layout = ({ children }) => {
  const { container, content } = layoutStyles;
  return (
    <div className={container}>
      <div className={content}>
        <Header />
        {children}
      </div>
      <Footer />
    </div>
  )
}

export default Layout;