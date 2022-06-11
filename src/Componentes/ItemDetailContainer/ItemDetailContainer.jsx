import React from 'react';
import "./ItemDetail.scss"

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
        </div>
    </div>
  )
}

export default ItemDetailContainer