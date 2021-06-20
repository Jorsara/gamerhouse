import './NavBar.css';
import { Button, Navbar, Nav, NavDropdown, Form, FormControl, Container, Row } from 'react-bootstrap';
import logo from '../../assets/img/logo.png';
import lupa from '../../assets/icons/lupa.png';
import CartWidget from '../CartWidget/CartWidget';
import { NavLink, Link } from 'react-router-dom';

function NavBar() {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Row>
                    <Link to="/"><Navbar.Brand><img src={logo} alt="logo"></img></Navbar.Brand></Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                        <NavLink to="/" className="nav-link" activeClassName="active">Inicio</NavLink>                        
                        <NavDropdown title="Tienda" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/category/1">Juegos para PC</NavDropdown.Item>
                            <NavDropdown.Item href="/category/2">Juegos PS4 Digital</NavDropdown.Item>
                            <NavDropdown.Item href="/category/1">Juegos PS5 Digital</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="/category/2">Sale</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#">FAQs</Nav.Link>
                        <Nav.Link href="#">Contacto</Nav.Link>
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