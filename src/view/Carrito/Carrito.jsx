import React, {useContext} from 'react';
import {CartContext} from "../../List/CartContext/CartContext";
import "./Carrito.scss";

function Carrito() {
    const {cart} = useContext(CartContext);

     
      
      

  return (
    <div>
      <h1 className='text-center tituloDetail'>Confirmar compra</h1>
   { cart.map((el) => {
        return(
            <div className="d-flex justify-content-around">
            <div className="divImagenDetail">
              <img src={el.imagen} alt="" className="imagenDetail" />
            </div>
            <div className="divTexto">
              <h1 className="nombreDetail">{el.nombre}</h1>
              <h2 className="descripcionDetail">{el.descripcion}</h2>
              <div className='d-flex justify-content-between'>
                <p className='unidadesDetail'>{el.cantidad} unidades</p>
              <p className="precioDetail">{el.precio}$</p>
              </div>
              
            </div>
          </div>
        )
        
    })}
    </div>
  )
}

export default Carrito