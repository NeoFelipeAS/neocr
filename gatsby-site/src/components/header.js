import PropTypes from "prop-types"
import React from "react"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import Container from "react-bootstrap/Container"
import { Phone } from "react-feather"
import { Instagram } from "react-feather"
import { Youtube } from "react-feather"

const Header = ({ siteTitle }) => (
  <header>
    <Navbar expand="lg" style={{ borderBottom: `5px solid black` }}>
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="tel:50683352898">
              <Phone color="green" /> (506) 8335-2898
            </Nav.Link>
          </Nav>
          <Nav className="ml-auto">
            <ul className="list-inline m-0 p-0">
              <li class="list-inline-item">
                <Nav.Link href="">
                  <Instagram color="green" />
                </Nav.Link>
              </li>
              <li class="list-inline-item">
                <Nav.Link href="">
                  <Youtube color="green" />
                </Nav.Link>
              </li>
            </ul>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
