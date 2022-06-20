import React from 'react';
import { TextField, Button } from "@mui/material";
import "./form.scss";



function Compras() {
  return (
    <div className='text-center'>
      <h1 className='mb-5'>Finalizar compra</h1>
      <div className='d-flex flex-column justify-content-center form'>
      <TextField id="outlined-basic" label="Nombre" variant="outlined" className='mb-5' required/>
      <TextField id="outlined-basic" label="Dirección" variant="outlined" className='mb-5' required/>
      <TextField id="outlined-basic" label="Correo" variant="outlined" className='mb-5' required/>
      <div className='divBotonForm'>
      <Button className='botonForm mb-5' variant="contained" disableElevation>
    Confirmar Compra
  </Button>
  </div>
      </div>
     
    </div>
  )
}

export default Compras