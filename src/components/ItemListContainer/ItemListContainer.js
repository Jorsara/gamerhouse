import './ItemListContainer.css';
import { Container, Row, Col } from 'react-bootstrap';
import ItemCount from '../ItemCount/ItemCount';
import ItemList from '../ItemList/ItemList';

function ItemListContainer (props) {
    return (
        <Container>
            <Row>
                <Col className="text-center">
                    <h1>{props.greeting}</h1>
                                      
                </Col>
            </Row>
            <Row>
                <Col className="text-center">
                    <ItemList />
                </Col>
            </Row>
        </Container>        
    );
}
  
export default ItemListContainer;
