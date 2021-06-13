import './ItemList.css';
import Item from '../Item/Item';

function ItemList () {
    const productos = [
        {
          id: 1,
          title: 'Producto 1',
          description: 'Lorem impsum',
          price: 200,
          pictureUrl: 'url'
        },
        {
          id: 2,
          title: 'Producto 2',
          description: 'Lorem impsum',
          price: 200,
          pictureUrl: 'url'
        },
        {
          id: 3,
          title: 'Producto 3',
          description: 'Lorem impsum',
          price: 200,
          pictureUrl: 'url'
        }
    ];
      
    const task = new Promise((resolve, reject) => {
        setTimeout(resolve(productos), 10000);
    });
    
    task
    .then(
        data => {
            console.log(productos);           
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
        console.log(msg);
    });

    return (
        <div className="itemList">
            {productos.map(producto => {
                return <Item key={producto.id} id={producto.id} title={producto.title} description={producto.description} price={producto.price} pictureUrl={producto.pictureUrl} />;
            })}     
        </div>
    );
}
  
export default ItemList;
