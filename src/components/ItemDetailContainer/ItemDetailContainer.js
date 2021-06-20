import './ItemDetailContainer.css';
import ItemDetail from '../ItemDetail/ItemDetail';
import picture from '../../assets/img/producto.jpg';
import React, { useState, useEffect } from 'react';

function ItemDetailContainer () {
    const [items, setItems] = useState([]);
    const productos = [
        {
          id: 1,
          title: 'Producto 1',
          description: 'Lorem impsum',
          price: 200,
          pictureUrl: picture,
          stock: 4
        }
    ];

    const getItems = new Promise((resolve, reject) => {setTimeout(() => resolve(productos), 2000);});

    useEffect(() => {
        getItems
          .then(
            (data) => {
              setItems(data);
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
      });
    
    return (
        <div className="itemList">
            {items.map((item) => {
                return (
                <ItemDetail
                    key={item.id}
                    id={item.id}
                    title={item.title}
                    description={item.description}
                    price={item.price}
                    pictureUrl={item.pictureUrl}
                    stock={item.stock}
                />
                );
            })}
        </div>
    );
}
  
export default ItemDetailContainer;
