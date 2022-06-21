import React, {useState} from 'react';
import "./Contador.scss";
import {Button} from "@mui/material";
import {Link} from "react-router-dom"


function Contador(props) {
const [numero, setNumero] = useState(0);
const [bool, setBool] = useState(false);
const [bool2, setBool2] = useState(true);
const [bool3, setBool3] = useState(false)

const sumar = () => {

  props.stock <= numero ? setBool(true) : setNumero(numero + 1);
  numero >= 0 && setBool2(false)

}

const restar = () => {

  numero < 1 ? setBool2(true) : setNumero(numero- 1); 
  props.stock >= numero && setBool(false) 

}

  return (
    <div>
    <div className='d-flex justify-content-around mb-5'>
    <button onClick={() => 
      restar()
      } className="botonesContador" disabled={bool2}> - </button>

    <div><p className='pContador'>{numero}</p></div>

    <button onClick={() => 
     sumar()
      } className="botonesContador" disabled={bool}> + </button>
    </div>
    <Button className='boton' id="boton" variant="contained" disableElevation onClick={() => {
      props.onAdd(numero)
      {numero > 0 && setBool3(true)}
      setNumero(0)
     
    }}>
    Comprar
  </Button>
  {bool3 && <Link to="/carrito" className='linkCarrito'> <Button className='boton' id="boton" variant="contained" disableElevation>
   Carrito
  </Button></Link>}
  </div>
  )
}

export default Contador