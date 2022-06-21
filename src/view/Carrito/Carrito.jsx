import React, { useContext } from "react";
import { CartContext } from "../../List/CartContext/CartContext";
import "./Carrito.scss";
import {Link} from "react-router-dom";
import {Button} from "@mui/material"

function Carrito() {
  const { cart } = useContext(CartContext);

  return (
    <div>
      {cart.length > 0 ? (
        <h1 className="text-center tituloDetailCarrito"> Carrito </h1>
      ) : (
        <p className="opcion2Carrito">Aun no tenés nada en tu carrito</p>
      )}
      {cart.map((el) => {
        return (
          <div className={cart.length === 1 ? "d-flex justify-content-around divExtra" : "d-flex justify-content-around" }>
            <div className="divImagenDetail">
              <img src={el.imagen} alt="" className= {cart.length === 1 ? `imagenDetail pt-5` : `imagenDetail` } />
            </div>
            <div className="divTextoCarrito">
              <h1 className="nombreDetail">{el.nombre}</h1>
              <h2 className="descripcionDetail mb-5">{el.descripcion}</h2>
              <div className="d-flex justify-content-between">
                <p className="unidadesDetail">{el.cantidad} unidades</p>
                <p className={`precioDetail`}>{el.precio}$</p>
              </div>
            </div>
          </div>
        );
      })}
      {  cart.length !== 0  && <div className="text-center mb-5" >
   <Link to="/compras" className="linkCarrito"> <Button className="boton text-center" variant="contained" disableElevation id="botonCarrito">
                  Finalizar compra
                </Button></Link>  
      </div>}
    </div>
  );
}

export default Carrito;
