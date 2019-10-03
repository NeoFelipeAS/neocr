import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Navbar from "react-bootstrap/Navbar"
import Logo from "../components/logo"
import Nav from "react-bootstrap/Nav"

const Header = ({ siteTitle }) => (
  <header>
    <Navbar expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="/">
        {" WebBrainCR"}
        <div style={{ maxWidth: `180px` }}>
          <Logo className="d-inline-block align-top" />
        </div>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    {siteTitle}
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
