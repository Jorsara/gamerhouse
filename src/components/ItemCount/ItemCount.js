import {useState} from 'react';
import './ItemCount.css';
import {InputGroup, Button} from 'react-bootstrap';

function ItemCount ({initial, stock, onAdd}) {
    const [contador, setContador] = useState(initial);
    function restar(){
        if(contador > 1){
            setContador(contador - 1);
        }
    };
    function sumar(){
        if(contador < stock){
            setContador(contador + 1);
        }            
    };
    return (
        <>
            <InputGroup className="mt-4 text-center">
                <InputGroup.Prepend>
                    <Button variant="outline-secondary" onClick={()=>restar()}>-</Button>
                </InputGroup.Prepend>
                <input className="form-control" value={contador} readOnly className="cantidad" />
                <InputGroup.Append>
                    <Button variant="outline-secondary" onClick={()=>sumar()}>+</Button>
                </InputGroup.Append>
            </InputGroup>  
            <Button variant="outline-secondary" className="mt-2" onClick={() => onAdd(contador)}>Agregar al carrito</Button>
        </>
    );
}
  
export default ItemCount;
