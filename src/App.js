import './App.scss';
import Navbar from './Componentes/Navbar/Navbar';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Compras from './view/Compras/Compras';
import Home from './view/Home/Home';


function App() {
  return (
    <Router>
     <Navbar className="mb-5"></Navbar>
    
<Routes>
  <Route path='/*' element={<Home/>}></Route>
<Route path='/compras' element={<Compras/>}></Route>
</Routes>

    </Router>
  );
}

export default App;
