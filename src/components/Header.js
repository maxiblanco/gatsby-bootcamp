import React from 'react';
import { Link, graphql, useStaticQuery } from "gatsby";
// Styles
import 'components/Header.module.scss'

import headerStyles from 'components/Header.module.scss'

const Header = () => {
  const data = useStaticQuery(graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
  
  `)
  const { header, title, navList, navItem, navItem__active } = headerStyles
  return (
    <header className={header}>
      <h1>
        <Link to="/" className={title}>{data.site.siteMetadata.title}</Link>
      </h1>
      <nav>
        <ul className={navList}>
          <li>
            <Link to="/" className={navItem} activeClassName={navItem__active}>Home</Link>
          </li>
          <li>
            <Link to="/blog" className={navItem} activeClassName={navItem__active}>Blog</Link>
          </li>
          <li>
            <Link to="/about" className={navItem} activeClassName={navItem__active}>About</Link>
          </li>
          <li>
            <Link to="/contact" className={navItem} activeClassName={navItem__active}>Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header;