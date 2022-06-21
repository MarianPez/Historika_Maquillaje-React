import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import "./itemListContainer.scss"

const ItemListContainer = (prop) => {


    return (
      <Card sx={{ maxWidth: 800 }} key={prop.id} className="mb-5 card">
          <CardContent className="text-center">
          <Typography gutterBottom variant="h5" component="div" className="tituloHome">
            {prop.nombre}
          </Typography>
          <Typography variant="body2" color="text.secondary" className="descripcion">
            {prop.descripcion}
          </Typography>
        </CardContent>
        <CardMedia
          component="img"
          alt="green iguana"
          height="400"
          image={prop.imagen}
        />
      
        <CardActions className="align-self-center cardLink">
         <Link to={`/detalles/${prop.id}`} className="linkHome">
           <Button variant="contained" disableElevation size="small" id="botonHome">Detalles</Button>
           </Link>
        </CardActions>
      </Card>
    );

};

export default ItemListContainer;
