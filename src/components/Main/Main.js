import './Main.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row } from 'react-bootstrap';
import NavBar from '../NavBar/NavBar';
import ItemListContainer from '../ItemListContainer/ItemListContainer';

function Main() {
  return (
    <Container fluid>
      <Row>
        <NavBar />
        <ItemListContainer greeting="Bienvenido a la tienda"></ItemListContainer>
      </Row>
    </Container>
  );
}

export default Main;
