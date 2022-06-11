import React from 'react';
import {Link} from "react-router-dom";
import carrito from "../../assets/img/carrito_kids.png";
import logo from "../../assets/img/logo.png"

function Footer() {
  return (
    <div className='divNavbar d-flex justify-content-between align-items-center'>
    <div>
        <img src={logo} alt="" className='logoNavbar' />
    </div>
    <ul className='d-flex listaNavbar align-items-center'>
    <Link key={1} to="/*" className="liNavbar">Home</Link>
      <li key={2} className="liNavbar">Productos</li>
      <li key={3} className="liNavbar">Nuestra historia</li>
      <Link key={4} className="liNavbar" to="/compras">Compra</Link>
    </ul>
    <div>
      <img src={carrito} alt=""  className='carritoNavbar'/>
    </div>
</div>
  )
}

export default Footer