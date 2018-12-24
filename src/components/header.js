import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

import './header.css'

const Header = ({ siteTitle }) => (
  <div
    style={{
      background: `white`,
      marginBottom: `1.45rem`,
      margin: `0 auto`,
      maxWidth: 960,
    }}
  >
    <div className="header-title">
      <h1>
        <Link
          to="/"
          style={{
            color: `black`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
      <nav className="header-nav">
        <Link
          to="/"
          style={{
            flex: 1,
            textTransform: 'uppercase',
            fontWeight: 'bold',
            color: 'black',
            marginRight: '20px',
            textDecoration: 'none',
          }}
        >
          Purchase
        </Link>
        <Link
          to="/"
          style={{
            flex: 1,
            textTransform: 'uppercase',
            fontWeight: 'bold',
            color: 'black',
            marginLeft: '20px',
            textDecoration: 'none',
          }}
        >
          About the artist
        </Link>
      </nav>
    </div>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
