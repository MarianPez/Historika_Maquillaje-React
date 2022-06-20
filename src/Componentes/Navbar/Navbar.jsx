import React, { useContext } from 'react';
import logo from "../../assets/img/logo.png";
import { Link } from 'react-router-dom';
import carrito from "../../assets/img/carrito_kids.png";
import "./Navbar.scss";
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { CartContext } from "../../List/CartContext/CartContext"




function Navbar() {
 const { widget } = useContext(CartContext)
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };



  return (
    <div className='divNavbar d-flex justify-content-between align-items-center mb-5'>
        <div>
            <img src={logo} alt="" className='logoNavbar' />
        </div>
        <ul className='d-flex listaNavbar align-items-center'>
        <Link key={1} to="/*" className="liNavbar">Home</Link>
          <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        Productos
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}> <Link to={`categoria/lipstick`}> Pintalabios</Link></MenuItem>
        <MenuItem onClick={handleClose}> <Link to={`categoria/baseSolida`}> Bases Solidas</Link></MenuItem>
        <MenuItem onClick={handleClose}> <Link to={`categoria/baseLiquida`}> Bases liquidas</Link></MenuItem>
        <MenuItem onClick={handleClose}> <Link to={`categoria/eyeliner`}> Delineador</Link></MenuItem>
        <MenuItem onClick={handleClose}> <Link to={`categoria/sombras`}> Sombras</Link></MenuItem>
      </Menu>
          <li key={3} className="liNavbar">Nuestra historia</li>
          <Link key={4} className="liNavbar" to="/compras">Compra</Link>
        </ul>
        <div>
          <Link to="/carrito">
          <img src={carrito} alt=""  className='carritoNavbar'/>
          {widget !== 0 && <p className='widget'>{widget}</p>}
          </Link>
        </div>
    </div>
  )
}

export default Navbar;