import './Main.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from '../NavBar/NavBar';
import ItemListContainer from '../ItemListContainer/ItemListContainer';
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer';

function Main() {
  return (
    <>
      <NavBar />
      <ItemListContainer greeting="Bienvenido a la tienda"></ItemListContainer>
      
    </>
  );
}

export default Main;
