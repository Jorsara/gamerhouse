import './ItemDetail.css';
import {Row, Col, Container} from 'react-bootstrap';
import ItemCount from '../ItemCount/ItemCount';

function ItemDetail ({id, title, description, price, pictureUrl, stock}) {
    function onAdd(cantidad){
        console.log(cantidad);
    }
    return (
        <Container className="prodDesc">
            <Row>
                <Col> 
                    <img className="imagenProd" src={pictureUrl} alt="Producto" />
                </Col>
                <Col>
                    <h2>{title}</h2>
                    <p>{description}</p>
                    <p>Precio: ${price}</p> 
                    <ItemCount stock={stock} initial={1} onAdd={() => onAdd()}/>  
                </Col>   
            </Row> 
        </Container>       
    );
}
  
export default ItemDetail;
