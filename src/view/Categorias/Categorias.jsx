import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../../Firebase/Firebase";
import { collection, query, where, getDocs } from "firebase/firestore";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import "./Categorias.scss";
import Spinner from "../../List/Spinner/Spinner";

function Categorias() {
  const identificador = useParams();
  let id = identificador.id;
  const [elementos, setElementos] = useState([]);
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const getDocumentos = async () => {
      const q = query(
        collection(db, "productos"),
        where("categoria", "==", id)
      );
      const elemento = [];
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        elemento.push({ ...doc.data(), id: doc.id });
        setElementos(elemento);
      });
    };

    getDocumentos();
  }, [id]);

  setTimeout(() => {
    setIsLoading(false)
  }, 1500)

  return (
    <div className={ isLoading ?  "d-flex justify-content-center align-items-center flex-wrap spinnerCategorias" : "d-flex justify-content-around flex-wrap"}>
      {isLoading ? <Spinner id="spinnerHome"/>   :   elementos.map((el) => {
        return (
          <Card sx={{ maxWidth: 600 }} key={el.id} className="mb-5 cardCategorias">
            <CardMedia
              component="img"
              alt="green iguana"
              height="450"
              image={el.imagen}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div" className="tituloCategorias text-center">
                {el.nombre}
              </Typography>
              <Typography variant="body2" color="text.secondary" className="descripcionCategorias text-center">
                {el.descripcion}
              </Typography>
            </CardContent>
            <CardActions className="justify-content-center">
              <Link to={`/detalles/${el.id}`} className="linkCategorias text-center">
                {" "}
                <Button className="boton text-center" variant="contained" disableElevation id="botonCategorias">
                  Detalles
                </Button>
              </Link>
            </CardActions>
          </Card>
        );
      })}

  
    </div>
  );
}

export default Categorias;
