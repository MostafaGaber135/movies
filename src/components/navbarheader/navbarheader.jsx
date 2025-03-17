import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Badge from "react-bootstrap/Badge";

function NavbarHeader() {
  const fav = useSelector((state) => state.fav || []);

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">Movies</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink to="/" className="nav-link">Home</NavLink>
            <NavLink to="/movies" className="nav-link">Movies</NavLink>
            <NavLink to="/favorites" className="nav-link">Favorites</NavLink>
            <NavLink to="/login" className="nav-link">Login</NavLink>
          </Nav>
          <Nav>
            <Badge bg="danger" className="d-flex align-items-center ms-2">
              Favorites: {fav.length}
            </Badge>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarHeader;