import './ItemDetail.css';
import {Row, Col, Container} from 'react-bootstrap';

function ItemDetail ({id, title, description, price, pictureUrl}) {
    return (
        <Container>
            <Row>
                <Col> 
                    <img className="imagenProd" src={pictureUrl} />
                </Col>
                <Col>
                    <h2>{title}</h2>
                    <p>{description}</p>
                    <p>Precio: ${price}</p> 
                </Col>   
            </Row> 
        </Container>       
    );
}
  
export default ItemDetail;
