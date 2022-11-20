import React from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

export default function RadioButton({ search, setSearch }) {
  return (
    <FormGroup>
      <FormControlLabel
        control={
          <Checkbox
            onChange={(e) => {
              if (e.target.checked) {
                setSearch({ ...search, attack: 100 });
              } else {
                setSearch({ ...search, attack: 0 });
              }
            }}
          />
        }
        label="Pokemons whose attack are greater than 100"
      />
    </FormGroup>
  );
}
