import './ItemList.css';
import Item from '../Item/Item';

function ItemList ( { items } ) {
    return (
        <div className="itemList">
            {items.map(producto => {
                return <Item key={producto.id} id={producto.id} title={producto.title} description={producto.description} price={producto.price} imageId={producto.imageId} stock={producto.stock} />;
            })}     
        </div>
    );
}
  
export default ItemList;
