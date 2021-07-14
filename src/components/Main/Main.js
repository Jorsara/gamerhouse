import './Main.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from '../NavBar/NavBar';
import ItemListContainer from '../ItemListContainer/ItemListContainer';
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CartContext from '../../providers/CartProvider';
import Cart from '../Cart/Cart';
import Checkout from '../Checkout/Checkout';

function Main() {
  return (
    <CartContext>
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <ItemListContainer greeting="Bienvenido a la tienda" />
          </Route>
          <Route exact path="/category/:id">
            <ItemListContainer greeting="Bienvenido a la tienda" />
          </Route>
          <Route exact path="/item/:id">
            <ItemDetailContainer />
          </Route>
          <Route exact path="/cart">
            <Cart />
          </Route>
          <Route exact path="/checkout">
            <Checkout />
          </Route>
        </Switch>
      </BrowserRouter>
    </CartContext>
  );
}

export default Main;
