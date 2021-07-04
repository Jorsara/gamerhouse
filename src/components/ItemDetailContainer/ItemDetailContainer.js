import './ItemDetailContainer.css';
import ItemDetail from '../ItemDetail/ItemDetail';
import picture from '../../assets/img/producto.jpg';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';


function ItemDetailContainer () {
  const { id } = useParams();
  const [items, setItems] = useState([]);
  const [isLoading, setisLoading] = useState(true);
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

  const getItems = new Promise((resolve, reject) => {setTimeout(() => resolve(productos), 1000);});

  useEffect(() => {
    getItems
      .then(
        (data) => {
          if(id){
            const found = data.find(element => element.id == id);
            setItems(found);
            if(found){ setisLoading(false); }            
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
    });
  
  return (
    <div className="itemList">
      {isLoading ? <p>Cargando...</p> : 
        <ItemDetail
          key={items.id}
          id={items.id}
          title={items.title}
          description={items.description}
          price={items.price}
          pictureUrl={items.pictureUrl}
          stock={items.stock}
        />
      }
    </div>
  );
}
  
export default ItemDetailContainer;
