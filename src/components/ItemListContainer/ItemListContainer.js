import './ItemListContainer.css';
import { Container, Row, Col } from 'react-bootstrap';
import ItemCount from '../ItemCount/ItemCount';

function ItemListContainer (props) {
    function onAdd(cantidad){
        console.log(cantidad);
    }
    return (
        <Container>
            <Row>
                <Col className="text-center">
                    <h1>{props.greeting}</h1>
                    <ItemCount stock="5" initial={1} onAdd={() => onAdd()}/>
                </Col>
            </Row>
        </Container>        
    );
}
  
export default ItemListContainer;
