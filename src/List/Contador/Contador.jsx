import React, {useState} from 'react';
import "./Contador.scss"

function Contador(props) {

const [numero, setNumero] = useState(0)
const [bool, setBool] = useState(false)
const [bool2, setBool2] = useState(true)

const sumar = () => {

  props.stock <= numero ? setBool(true) : setNumero(numero + 1);
  numero >= 0 && setBool2(false)

}

const restar = () => {

  numero < 1 ? setBool2(true) : setNumero(numero- 1); 
  props.stock >= numero && setBool(false) 

}

  return (
    <div className='d-flex justify-content-around'>
    <button onClick={() => 
      restar()
      } className="botonesContador" disabled={bool2}> - </button>

    <div><p className='pContador'>{numero}</p></div>

    <button onClick={() => 
     sumar()
      } className="botonesContador" disabled={bool}> + </button>
    </div>
  )
}

export default Contador