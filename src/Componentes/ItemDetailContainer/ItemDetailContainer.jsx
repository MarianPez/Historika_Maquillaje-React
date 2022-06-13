import React from 'react';
import "./ItemDetail.scss";
import Contador from '../../List/Contador/Contador';

function ItemDetailContainer(props) {
  return (
    <div className='d-flex justify-content-around'>
        <div className='divImagenDetail'>
            <img src={props.imagen} alt=""  className='imagenDetail'/>
        </div>
        <div className='divTexto'>
        <h1 className='nombreDetail'>{props.nombre}</h1>
        <h2 className='descripcionDetail'>{props.descripcion}</h2>
        <p className='precioDetail'>{props.precio}$</p>
        <Contador stock={props.stock}></Contador>
        </div>
    </div>
  )
}

export default ItemDetailContainer