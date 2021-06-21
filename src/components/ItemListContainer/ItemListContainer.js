import './ItemListContainer.css';
import { Container, Row, Col } from 'react-bootstrap';
import ItemList from '../ItemList/ItemList';
import React, { useState, useEffect } from 'react';
import picture from '../../assets/img/producto.jpg';
import { useParams } from 'react-router-dom';

function ItemListContainer (props) {
    const { id } = useParams();
    const [items, setItems] = useState([]);
    const productos = [
        {
          id: 1,
          title: 'Producto 1',
          description: 'Lorem impsum',
          price: 200,
          pictureUrl: picture,
          stock: 4,
          category: 1
        },
        {
          id: 2,
          title: 'Producto 2',
          description: 'Lorem impsum',
          price: 200,
          pictureUrl: picture,
          stock: 5,
          category: 1
        },
        {
          id: 3,
          title: 'Producto 3',
          description: 'Lorem impsum',
          price: 200,
          pictureUrl: picture,
          stock: 2,
          category: 2
        }
    ];  

    const getItems = new Promise((resolve, reject) => {setTimeout(() => resolve(productos), 2000);});

    useEffect(() => {
      getItems
        .then(
          (data) => {
            if(id){
              let prodCat = []
              data.forEach(element => {
                if(element.category == id){
                  prodCat.push(element);
                }
              });
              setItems(prodCat);
            }else{
              setItems(data);
            }
          },
          (error) => {
            //Paso por aquí si la promesa fue rechazada
            console.log(
              "Estoy pasando por aquí por que la promesa fue directamente RECHAZADA"
            );
          }
        )
        .catch((error) => {
          console.log(error.message);
          return "Valor por defecto";
      });
    }, [id]);
    return (
        <Container>
            <Row>
                <Col className="text-center">
                    <h1>{props.greeting}</h1>                                      
                </Col>
            </Row>
            <Row>
                <Col className="text-center">
                    <ItemList items={items} />
                </Col>
            </Row>
        </Container>        
    );
}
  
export default ItemListContainer;
