import React, { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import axios from "axios";
import DisplayPokemons from './component/DisplayAllPokemons/DisplayPokemons'
import PokemonDetails from './component/pokemonDetails/PokemonDetails';

export default function App() {
  const [data, setData] = useState(() => {
    const saved = localStorage.getItem("pokemons");
    const initialValue = JSON.parse(saved);
    return initialValue || [];
  })
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (data.length == 0) {
      axios
        .get("https://guangyanglab11.herokuapp.com/api/v1/pokemons/?count=809&after=0")
        .then((res) => {
          localStorage.setItem("pokemons", JSON.stringify(res["data"]));
          setData(res["data"]);
          // setFilteredData(res["data"]);
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  }, []);

  return (
    <Routes>
      <Route path='/' element={<DisplayPokemons data={data} loading={loading} />}>
      </Route>
      <Route path='/details' element={<PokemonDetails />}></Route>
    </Routes>

  )
}

