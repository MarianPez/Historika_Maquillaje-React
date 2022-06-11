import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";


const ItemListContainer = (prop) => {


    return (
      <Card sx={{ maxWidth: 600 }} key={prop.id}>
        <CardMedia
          component="img"
          alt="green iguana"
          height="300"
          image={prop.imagen}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {prop.nombre}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {prop.descripcion}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    );

};

export default ItemListContainer;
