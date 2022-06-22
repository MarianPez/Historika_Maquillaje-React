import React from "react";
import { TextField, Button, Alert } from "@mui/material";
import "./form.scss";
import { useContext, useState } from "react";
import { CartContext } from "../../List/CartContext/CartContext";
import { db } from "../../Firebase/Firebase";
import { collection, addDoc } from "firebase/firestore";

const initialState = {
  nombre: "",
  direccion: "",
  telefono: "",
  mail: "",
};

const date = new Date();
const outPut =
  date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();

function Compras() {
  const [values, setValues] = useState(initialState);
  const [compraID, setCompraID] = useState("");
  const [bool, setBool] = useState(true);

  const { cart } = useContext(CartContext);

  const handleOnChange = (e) => {
    const { value, name } = e.target;
    e.preventDefault();
    setValues({ ...values, [name]: value });
  };

  const confirmarCompra = async (e) => {
    let suma = 0;
    cart.map((el) => (suma = suma + el.precio));
    e.preventDefault();

    const docRef = await addDoc(collection(db, "compras"), {
      comprador: values,
      productos: cart,
      fecha: outPut,
      total: suma,
    });

    setCompraID(docRef.id);
    setValues(initialState);

  };

  return (
    <div className="text-center finalizarCompra">
      <h1 className="mb-5">Finalizar compra</h1>
      <form
        className="d-flex flex-column justify-content-center form"
        action=""
        onSubmit={confirmarCompra}
      >
        <TextField
          id="outlined-basic"
          label="Nombre"
          variant="outlined"
          name="nombre"
          value={values.nombre}
          className="mb-5"
          onChange={handleOnChange}
        />
        <TextField
          id="outlined-basic"
          label="Dirección"
          variant="outlined"
          name="direccion"
          value={values.direccion}
          className="mb-5"
          onChange={handleOnChange}
        />
        <TextField
          id="outlined-basic"
          label="Telefono"
          variant="outlined"
          name="telefono"
          value={values.telefono}
          className="mb-5"
          onChange={handleOnChange}
        />
        <TextField
          id="outlined-basic"
          label="mail"
          variant="outlined"
          name="mail"
          value={values.mail}
          className="mb-5"
          onChange={handleOnChange}
        />
        <div className="divBotonForm">
         <button className="button">
        <Button className="boton text-center"  disableElevation id="botonForm"> 
         
                 Confirmar compra
                
                </Button>
                </button>
          {compraID != "" && (
            <Alert severity="success">el id de tu compra es: {compraID}</Alert>
          )}
        </div>
      </form>
    </div>
  );
}

export default Compras;
