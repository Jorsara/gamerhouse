import './Item.css';

function Item ({id, title, description, price, pictureUrl}) {
    return (
        <div className="itemContainer">
            <p>ID: {id}</p>
            <p>Title: {title}</p>
            <p>Description: {description}</p>
            <p>Price: {price}</p>
            <p>Picture Url: {pictureUrl}</p>
        </div>
    );
}
  
export default Item;
