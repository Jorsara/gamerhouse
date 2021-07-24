import './NavBar.css';
import { Button, Navbar, Nav, NavDropdown, Form, FormControl, Container, Row } from 'react-bootstrap';
import logo from '../../assets/img/logo.png';
import lupa from '../../assets/icons/lupa.png';
import CartWidget from '../CartWidget/CartWidget';
import { NavLink } from 'react-router-dom';

function NavBar() {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Row>
                    <NavLink to="/"><Navbar.Brand><img src={logo} alt="logo"></img></Navbar.Brand></NavLink>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                        <NavLink to="/" className="nav-link" activeClassName="active">Inicio</NavLink>                        
                        <NavDropdown title="Tienda" id="basic-nav-dropdown">
                            <NavLink className="dropdown-item" to="/category/pc">Juegos para PC</NavLink>
                            <NavLink className="dropdown-item" to="/category/ps4">Juegos PS4 Digital</NavLink>
                        </NavDropdown>
                        <NavLink to="/cart" className="nav-link" activeClassName="active">Carrito</NavLink>    
                        <NavLink to="/checkout" className="nav-link"  activeClassName="active">Finalizar Compra</NavLink>
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