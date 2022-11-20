import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
export default function PokemonCard(props) {
  const { name, id } = props;
  const [url, setUrl] = useState();

  useEffect(() => {
    axios
      .get(`https://guangyanglab11.herokuapp.com/api/v1/pokemonImage/${id}`)
      .then((res) => {
        setUrl(res.data.URL);
      });
  }, []);
  return (
    <Card sx={{ maxWidth: 200 }}>
      <CardMedia component="img" height="180" src={url} alt={name} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">
          <Link to="/details" state={id}>
            Learn More
          </Link>
        </Button>
      </CardActions>
    </Card>
  );
}
