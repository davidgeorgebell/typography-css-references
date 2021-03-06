import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import "../styles/header.css"

const Header = ({ siteTitle }) => (
  <header>
    <div className="header-wrapper">
      <h1>
        <Link to="/">{siteTitle}</Link>
      </h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
