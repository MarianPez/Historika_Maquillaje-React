import { db } from "../../Firebase/Firebase";
import { collection, query, getDocs } from "firebase/firestore";
import React, { useState, useEffect } from "react";
import ItemListContainer from '../ItemListContainer/itemListContainer';




function ItemList() {
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        const getProductos = async () => {
          const q = query(collection(db, "productos"));
          const docs = [];
          const querySnapshot = await getDocs(q);
          querySnapshot.forEach((doc) => {
            docs.push({ ...doc.data(), id: doc.id });
          });
          setProductos(docs);
        };
      
        getProductos();
      }, []);

  return (
   productos.map((el) => {
    return(
     <ItemListContainer nombre={el.nombre} descripcion={el.descripcion} imagen={el.imagen} id={el.id} stock={el.stock} className="mb-3"/>)})
  )
}

export default ItemList