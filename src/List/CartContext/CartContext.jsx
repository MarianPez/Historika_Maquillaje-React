import React, { createContext, useState } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [widget, setWidget] = useState(0);

const agregarAlCarrito = (props) => {
    
    setWidget(widget + props.cantidad);

    let elemento = {
      id: props.id,
      nombre: props.nombre,
      imagen: props.imagen,
      descripcion: props.descripcion,
      precio: props.precio * props.cantidad,
      cantidad: props.cantidad,
    };


    const elementoNuevo = (id) => {
      return cart.find((el) => el.id == id);
    };

    if (elementoNuevo(props.id) != undefined) {
      const suma = [...cart];

      suma.map((el) => {
        if (el.id == elemento.id) {
          el.precio += elemento.precio;
          el.cantidad += props.cantidad;
        }
      });
      setCart(suma);
    } else {
      setCart([...cart, elemento]);
    }

    
  };

  return (
    <CartContext.Provider
      value={{cart, setCart, widget, setWidget, agregarAlCarrito}}
    >
      {children}
    </CartContext.Provider>
  );
}
