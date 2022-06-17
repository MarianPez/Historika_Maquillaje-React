import React, { useContext } from "react";
import { useParams } from "react-router-dom";

import ItemDetailContainer from "../../Componentes/ItemDetailContainer/ItemDetailContainer";
import { productosContext } from "../../ItemContext/ItemContext";

function ItemDetail() {
  const [productos] = useContext(productosContext);
  let { id } = useParams();

  let elemento = productos.filter((el) => el.id === id);

  return elemento.map((el) => {
    return (
      <div>
        <ItemDetailContainer
          nombre={el.nombre}
          descripcion={el.descripcion}
          precio={el.precio}
          imagen={el.imagen}
          stock={el.stock}
          id={el.id}
        ></ItemDetailContainer>
      </div>
    );
  });
}

export default ItemDetail;
