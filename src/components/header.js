import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import userPNG from '../images/user.svg'

const Header = ({ siteTitle }) => (
  <header>
    <nav>
      <ul className="header-links">
        <li><Link to="/">{siteTitle}</Link></li>
        <li><Link to="/articles">Articles</Link></li>
        <li><Link to="/screencasts">Screen Casts</Link></li>
        <li><Link to="/skillmap">Skill Map</Link></li>
      </ul>
      <ul className="account-menu">
        <li>
          <Link to="/account">
            <img src={userPNG}  style={{height:'40px', width:"40px"}} alt="user icon"/>
          </Link>
        </li>
      </ul>  
    </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
