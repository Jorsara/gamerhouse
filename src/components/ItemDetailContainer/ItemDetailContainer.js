import './ItemDetailContainer.css';
import ItemDetail from '../ItemDetail/ItemDetail';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getFirestore } from '../../factory/firebase';

function ItemDetailContainer () {
  const { id } = useParams();
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const db = getFirestore();
    const itemCollection = db.collection('items');
    itemCollection.get().then(querySnapshot => {
      if (querySnapshot.size === 0) {
        console.log('No se encontraron resultados');
        setLoading(false);
      }
      if(id){
        let item = querySnapshot.docs.map(doc => doc.data());
        item.forEach(function agregarId(element, index) {
          element.id = querySnapshot.docs[index].id;
        });
        const found = item.find(element => element.id == id);
        setItems(found);
        if(found){ setLoading(false); }            
      }
    });
  }, []);
  
  return (
    <div className="itemList">
      {loading ? <p>Cargando...</p> : 
        <ItemDetail
          key={items.id}
          id={items.id}
          title={items.title}
          description={items.description}
          price={items.price}
          imageId={items.imageId}
          stock={items.stock}
        />
      }
    </div>
  );
}
  
export default ItemDetailContainer;
