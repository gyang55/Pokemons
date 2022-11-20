import React from "react";
import PokemonCard from "../card/PokemonCard";
import Grid from "@mui/material/Grid";

export default function DisplayTable({ pokemons, loading }) {
  if (loading) {
    return <h2>Loading...</h2>;
  } else {
    return (
      <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {pokemons.map((pokemon) => {
          return (
            <Grid item xs={3} key={pokemon.id}>
              <PokemonCard name={pokemon.name.english} id={pokemon.id} />
            </Grid>
          );
        })}
      </Grid>
    );
  }
}
