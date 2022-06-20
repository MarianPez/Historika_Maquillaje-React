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
import {Link} from "react-router-dom"

function Categorias() {
  const identificador = useParams();
  let id = identificador.id
  const [elementos, setElementos] = useState([]);

  useEffect(() => {
    const getDocumentos = async () => {
      const q = query(
        collection(db, "productos"),
        where("categoria", "==", id)
      );
      const elemento = [];
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        elemento.push({...doc.data(), id: doc.id });
        setElementos(elemento);
       
      });
    };
    
    getDocumentos();
  }, [id]);



  return (
 <div className="d-flex justify-content-around flex-wrap">
{elementos.map((el) => {
    return(
    <Card sx={{ maxWidth: 900}} key={el.id} className="mb-5 card">
    <CardMedia
      component="img"
      alt="green iguana"
      height="500"
      image={el.imagen}
    />
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        {el.nombre}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {el.descripcion}
      </Typography>
    </CardContent>
    <CardActions>
     <Link to={`/detalles/${el.id}`}> <Button size="small">Detalles</Button></Link>
    </CardActions>
  </Card>
  
  )
})}
</div>)
}

export default Categorias;
