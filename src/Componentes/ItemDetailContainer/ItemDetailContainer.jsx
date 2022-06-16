import React, {useState} from "react";
import "./ItemDetail.scss";
import Contador from "../../List/Contador/Contador";
import {CartContext} from "../../List/CartContext/CartContext"


function ItemDetailContainer(props) {

const {cart, setCart, agregarAlCarrito} = React.useContext(CartContext);


const onAdd = (numero) => {

  let elemento = {
    nombre: props.nombre,
    precio: props.precio,
    id: props.id,
    imagen: props.imagen,
    descripcion: props.descripcion,
    cantidad: numero
  }


agregarAlCarrito(elemento)


}


  return (
    <div className="d-flex justify-content-around">
      <div className="divImagenDetail">
        <img src={props.imagen} alt="" className="imagenDetail" />
      </div>
      <div className="divTexto">
        <h1 className="nombreDetail">{props.nombre}</h1>
        <h2 className="descripcionDetail">{props.descripcion}</h2>
        <p className="precioDetail">{props.precio}$</p>
        <Contador stock={props.stock} onAdd={onAdd}></Contador>
        
      </div>
    </div>
  );
}

export default ItemDetailContainer;
