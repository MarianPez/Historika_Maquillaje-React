import React, { useContext } from "react";
import ItemListContainer from '../ItemListContainer/itemListContainer';
import { productosContext } from "../../ItemContext/ItemContext";



function ItemList() {
    const [productos] = useContext(productosContext);

  

  return (
   productos.map((el) => {
    return(
     <ItemListContainer key={el.id} nombre={el.nombre} descripcion={el.descripcion} imagen={el.imagen} id={el.id}  className="mb-3"/>)})
  )
}

export default ItemList