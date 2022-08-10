import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from '../CartWidget/CartWidget';
import "../CartWidget/CartWidget.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';

function NavBar() {

  const navegar = useNavigate()
  const goSativa = () => {
    const sativa = "sativa"
    navegar(`/sativa`)
  }

  const goIndica = () =>{
    navegar(`/indica`)
  }

  const goHibridas = () => {
    navegar(`/hibrida`)
  }

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
            <NavDropdown title="RiquiGenetics" id="basic-nav-dropdown">
              <NavDropdown.Item onClick={goSativa}>Sativas</NavDropdown.Item>
              <NavDropdown.Item onClick={goIndica}>Indicas</NavDropdown.Item>
              <NavDropdown.Item onClick={goHibridas}>Hibridas</NavDropdown.Item>
              </NavDropdown>
            <NavDropdown title="CrazyVaps" id="basic-nav-dropdown">
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