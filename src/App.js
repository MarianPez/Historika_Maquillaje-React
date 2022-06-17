import './App.scss';
import Navbar from './Componentes/Navbar/Navbar';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Compras from './view/Compras/Compras';
import Home from './view/Home/Home';
import Footer from './Componentes/Footer/Footer';
import ItemDetail from './view/ItemDetail/ItemDetail';
import { CartProvider } from './List/CartContext/CartContext';
import Carrito from './view/Carrito/Carrito';
import { ItemProvider } from './ItemContext/ItemContext';
import Categorias from './view/Categorias/Categorias';


function App() {
  return (
    <Router>
      <ItemProvider>
      <CartProvider>
     <Navbar></Navbar>
    
<Routes>
  <Route path='/' element={<Home/>}></Route>
<Route path='/compras' element={<Compras/>}></Route>
<Route path='/detalles/:id' element={<ItemDetail></ItemDetail>}></Route>
<Route path='*' element={<Home/>}></Route>
<Route path="/carrito" element={<Carrito></Carrito>}></Route>
<Route path="categoria/:id" element={<Categorias></Categorias>}></Route>
</Routes>

<Footer></Footer>
</CartProvider>
</ItemProvider>
    </Router>
  );
}

export default App;
