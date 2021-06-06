import './NavBar.css';
import { Button, Navbar, Nav, NavDropdown, Form, FormControl, Container, Row } from 'react-bootstrap';
import logo from '../../assets/img/logo.png';
import lupa from '../../assets/icons/lupa.png';
import CartWidget from '../CartWidget/CartWidget';

function NavBar() {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Row>
                    <Navbar.Brand href="#home"><img src={logo} alt="logo"></img></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                        <Nav.Link href="#home">Inicio</Nav.Link>
                        <Nav.Link href="#link">Formas de pago</Nav.Link>
                        <NavDropdown title="Tienda" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Juegos para PC</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Juegos PS4 Digital</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Juegos PS5 Digital</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Sale</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#link">FAQs</Nav.Link>
                        <Nav.Link href="#link">Contacto</Nav.Link>
                        </Nav>
                        <Form inline>
                            <FormControl type="text" placeholder="Buscar..." className="mr-sm-2" />
                            <Button variant="outline-success"><img src={lupa} alt="buscar"></img></Button>
                        </Form>
                        <CartWidget />
                    </Navbar.Collapse>
                </Row>
            </Container>
        </Navbar>
    );
}

export default NavBar;