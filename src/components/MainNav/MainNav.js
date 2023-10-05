import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import './MainNav.scss';

import data from '../data.json';
import NavItem from "./NavItem";

const MainNav = () => {
  console.log(data);

  const navLinks = data.map(planet => {
    return <NavItem planetName={ planet.name }/>;
  });

  return <header>
    <Navbar expand="md" className="d-flex flex-md-column flex-xl-row">
      <h2 className="ps-3">{ 'The Planets'.toUpperCase() }</h2>
      <Navbar.Toggle aria-controls="basic-navbar-nav"/>
      <Navbar.Collapse id="basic-navbar-nav">
        <Container className="d-flex justify-content-center justify-content-md-end">
          <Nav className="flex-grow-1 flex-md-grow-0">
            { navLinks }
          </Nav>
        </Container>
      </Navbar.Collapse>
    </Navbar>
    <hr/>
  </header>;
};

export default MainNav;