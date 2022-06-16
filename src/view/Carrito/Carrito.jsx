import React, {useContext} from 'react';
import {CartContext} from "../../List/CartContext/CartContext";
import "./Carrito.scss";
import Contador from '../../List/Contador/Contador';

function Carrito() {
    const {cart, setCart, agregarAlCarrito} = useContext(CartContext);

    // const onAdd = (numero) => {

    //     let elemento = {
    //       nombre: props.nombre,
    //       precio: props.precio,
    //       id: props.id,
    //       imagen: props.imagen,
    //       descripcion: props.descripcion,
    //       cantidad: numero
    //     }
      
      
    //   agregarAlCarrito(elemento)
      
      
    //   }
      
      

  return (
    cart.map((el) => {
        return(
            <div className="d-flex justify-content-around">
            <div className="divImagenDetail">
              <img src={el.imagen} alt="" className="imagenDetail" />
            </div>
            <div className="divTexto">
              <h1 className="nombreDetail">{el.nombre}</h1>
              <h2 className="descripcionDetail">{el.descripcion}</h2>
              <p className="precioDetail">{el.precio}$</p>
              <Contador stock={el.stock}></Contador>
              
            </div>
          </div>
        )
        
    })
  )
}

export default Carrito