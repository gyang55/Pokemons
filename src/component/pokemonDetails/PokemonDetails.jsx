import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import axios from "axios";
import Name from "./Name";
import Base from "./Base";
import Types from "./Types";
export default function PokemonDetails() {
  const location = useLocation();
  const id = location.state;
  const [poke, setPoke] = useState();
  useEffect(() => {
    axios
      .get(`https://guangyanglab11.herokuapp.com/api/v1/pokemon/${id}`)
      .then((res) => {
        setPoke(res.data[0]);
      });
  }, []);
  return (
    <Container maxWidth="md">
      <Box sx={{ bgcolor: "#cfe8fc", height: "100vh", px: 3, py: 1 }}>
        <h1 className="text-primary mb-" style={{ textAlign: "center" }}>
          Pokemons Details
        </h1>
        {poke && (
          <>
            <Name
              id={poke.id}
              english={poke.name.english}
              japanese={poke.name.japanese}
              chinese={poke.name.chinese}
              french={poke.name.french}
            ></Name>
            <Base
              HP={poke.base.HP}
              Attack={poke.base.HP}
              Defense={poke.base.Attack}
              Speed={poke.base.Defense}
              SpeedAttack={poke.base["Speed Attack"]}
              SpeedDefense={poke.base["Speed Defense"]}
            />
            <Types types={poke.type}></Types>
          </>
        )}
      </Box>
    </Container>
  );
}
