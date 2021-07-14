import './Checkout.css';
import { Link } from 'react-router-dom';
import React, { useContext, useEffect, useState } from 'react';
import CartContext from '../../context/CartContext';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { getFirestore } from '../../factory/firebase';
import * as firebase from 'firebase/app';

function Checkout() {
    const { cart, cartTotal, setCartTotal } = useContext(CartContext);
    useEffect(()=>{
        let suma = 0;
        cart.forEach(item => {
            suma = suma + (item.item.price * item.quantity);
          });
        setCartTotal(suma);
    })
    
    const [loading, setLoading] = useState(false);
    const [pedidoRealizado, setPedidoRealizado] = useState('');
    const saveOrder = () => {
        setLoading(true);
        const db = getFirestore();
        const order = db.collection('orders');
        let inputName = document.getElementById('name').value;
        let inputPhone = document.getElementById('email').value;
        let inputEmail = document.getElementById('phone').value;
        const newOrder = {
        buyer: {
            email: inputEmail,
            name: inputName,
            phone: inputPhone
        },
        date: firebase.firestore.Timestamp.fromDate(new Date()),
        total: cartTotal,
        items: cart
        };
        order
        .add(newOrder)
        .then(({ id }) => {
            setLoading(false);            
            setPedidoRealizado(id);
        })
        .catch(error => {
            setLoading(false);
            console.log(error);
        });
    };
    return (
        <Container className="checkoutContainer">
            <Row>
                <Col>
                <h2 className="text-center mt-4 mb-2">Finalizar Compra</h2>
                    {cart.length === 0 ? 
                        <div className="cartSinItems">
                            <h4>No hay items en el carrito para comprar.</h4>
                            <Link to="/"><Button>Volver a la tienda</Button></Link>
                        </div>
                    : 
                        <div className="checkoutForm">   
                            {pedidoRealizado==='' &&                      
                                <form className="form-group">
                                    <input className="form-control" id="name" placeholder="Nombre" />
                                    <input className="form-control" id="email" placeholder="E-mail" />
                                    <input className="form-control" id="phone" placeholder="Teléfono" />
                                </form>
                            }
                            <div className="checkoutTotal">
                                {pedidoRealizado==='' &&       
                                    <h5>Total de la orden: {cartTotal}</h5>      
                                }                          
                                {loading ? 
                                    <div className="loader">Cargando...</div> 
                                    :
                                    pedidoRealizado==='' ? <Button onClick={() => saveOrder()}>Realizar Pedido</Button> : 
                                    <div className="compraFinalizada text-center">
                                        <p>Su pedido fue realizado con éxito, el id del mismo es: <b>{pedidoRealizado}</b></p>
                                        <Link to="/"><Button>Volver a la tienda</Button></Link>
                                    </div>
                                }
                            </div>
                        </div>
                    }
                </Col>
            </Row>
        </Container>
        
    );
}
  
export default Checkout;
