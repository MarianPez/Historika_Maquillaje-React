import './App.scss';
import Navbar from './Componentes/Navbar/Navbar';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Compras from './view/Compras/Compras';
import Home from './view/Home/Home';
import Footer from './Componentes/Footer/Footer';
import ItemDetail from './view/ItemDetail/ItemDetail';


function App() {
  return (
    <Router>
     <Navbar></Navbar>
    
<Routes>
  <Route path='/' element={<Home/>}></Route>
<Route path='/compras' element={<Compras/>}></Route>
<Route path='/detalles/:id' element={<ItemDetail></ItemDetail>}></Route>
<Route path='*' element={<Home/>}></Route>
</Routes>

<Footer></Footer>

    </Router>
  );
}

export default App;
