import './ItemDetailContainer.css';
import ItemDetail from '../ItemDetail/ItemDetail';
import picture from '../../assets/img/producto.jpg';
import React, { useState, useEffect } from 'react';

const getItems = () =>{    
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
          }
    ];

    const task = new Promise((resolve, reject) => {
        setTimeout(resolve(productos), 2000);
    });

    task
    .then(
        data => {
            console.log('exito');
            console.log(data[0]);
            return data[0];         
        },
        error => {
            //Paso por aquí si la promesa fue rechazada
            console.log(
                'Estoy pasando por aquí por que la promesa fue directamente RECHAZADA'
            );
        }
    )
    .catch(error => {
        console.log(error.message);
        return 'Valor por defecto';
    })
    .then(msg => {
        // Paso por aquí si un bloque catch  retorno algo por defecto.
        //console.log(msg);
    });

}

function ItemDetailContainer () {
    const [results, setResults] = useState({});
    console.log('test2');
    console.log(getItems())
    setResults(getItems());
    useEffect(() => {        
        
    }, []);
    
    return (
        <p></p>
        //<div className="itemDetail">
         //  <ItemDetail title={results.title} description={results.description} price={results.price} pictureUrl={results.pictureUrl} />              
        //</div>
    );
}
  
export default ItemDetailContainer;
