import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from '../CartWidget/CartWidget';
import "../CartWidget/CartWidget.css"
import 'bootstrap/dist/css/bootstrap.min.css';

function NavBar() {
  return (
    <Navbar fixed="top" bg="light" expand="lg">
        <div>
        <CartWidget></CartWidget>
        </div>
      <Container>
        <Navbar.Brand href="/">JavaWeed Genetics</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Inicio</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Semillas" id="basic-nav-dropdown">
              <NavDropdown.Item href="/">Sativas</NavDropdown.Item>
              <NavDropdown.Item href="/">
                Indicas
              </NavDropdown.Item>
              <NavDropdown.Item href="/">Hibridas</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Capsulas para vapos" id="basic-nav-dropdown">
              <NavDropdown.Item href="/">Sativos</NavDropdown.Item>
              <NavDropdown.Item href="/">
                Indicos
              </NavDropdown.Item>
              <NavDropdown.Item href="/">Hibridos</NavDropdown.Item>

            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;