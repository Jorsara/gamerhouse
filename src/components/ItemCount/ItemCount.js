import './ItemCount.css';
import {InputGroup, FormControl, Button} from 'react-bootstrap';

function ItemListContainer (props) {
    document.addEventListener("DOMContentLoaded", function() {
        let contador = document.getElementById('cantidad');
        contador.value = props.initial;
        document.getElementById('restar').addEventListener('click', (e) =>{
            e.stopImmediatePropagation();
            if(contador.value > 0){
                contador.value = Number(contador.value) -1;
            }
        });
        document.getElementById('sumar').addEventListener('click', (e) =>{
            e.stopImmediatePropagation();
            if(contador.value < props.stock){
                contador.value = Number(contador.value) +1;
            }            
        });
        document.getElementById('agregar').addEventListener('click', (e) =>{
            if(props.stock !== 0 && contador.value <= props.stock){
                props.onAdd(contador.value);
            }
        });
    });    
    return (
        <>
            <InputGroup className="mt-4 text-center">
                <InputGroup.Prepend>
                    <Button variant="outline-secondary" id="restar">-</Button>
                </InputGroup.Prepend>
                <FormControl id="cantidad" />
                <InputGroup.Append>
                    <Button variant="outline-secondary" id="sumar">+</Button>
                </InputGroup.Append>
            </InputGroup>  
            <Button variant="outline-secondary" className="mt-2" id="agregar">Agregar al carrito</Button>
        </>
    );
}
  
export default ItemListContainer;
