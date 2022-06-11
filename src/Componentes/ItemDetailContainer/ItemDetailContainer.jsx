import React from 'react'

function ItemDetailContainer(props) {
  return (
    <div>
        <h1>{props.nombre}</h1>
        <h2>{props.descripcion}</h2>
        <p>{props.precio}</p>
        
    </div>
  )
}

export default ItemDetailContainer