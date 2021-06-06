import './CartWidget.css';
import {Nav} from 'react-bootstrap';
import carrito from '../../assets/icons/carrito.png';

function CartWidget() {
    return (
        <Nav.Link href="#link"><img src={carrito} alt="carrito"></img></Nav.Link>
    );
}
  
export default CartWidget;
