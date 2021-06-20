import './ItemList.css';
import Item from '../Item/Item';
import React, { useState, useEffect } from 'react';
import picture from '../../assets/img/producto.jpg';


function ItemList () {
    const [items, setItems] = useState([]);
    const productos = [
        {
          id: 1,
          title: 'Producto 1',
          description: 'Lorem impsum',
          price: 200,
          pictureUrl: picture
        },
        {
          id: 2,
          title: 'Producto 2',
          description: 'Lorem impsum',
          price: 200,
          pictureUrl: picture
        },
        {
          id: 3,
          title: 'Producto 3',
          description: 'Lorem impsum',
          price: 200,
          pictureUrl: picture
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
      }, []);

    return (
        <div className="itemList">
            {items.map(producto => {
                return <Item key={producto.id} id={producto.id} title={producto.title} description={producto.description} price={producto.price} pictureUrl={producto.pictureUrl} />;
            })}     
        </div>
    );
}
  
export default ItemList;
