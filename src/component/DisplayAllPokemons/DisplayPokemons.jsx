import React, { useEffect } from "react";
import { useState } from "react";
import "./DisplayPokemons.css";
import DisplayTable from "./DisplayTable";
import Pagination from "../Pagination/Pagination";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import SearchBar from "../searchBar/SearchBar";
import RadioButton from "../radioButton/RadioButton";
import { filter } from "../../utils/filterMethods";

export default function DisplayPokemons({ data, loading }) {
  const [filteredData, setFilteredData] = useState(data);
  // User is currently on this page
  const [currentPage, setCurrentPage] = useState(1);
  // No of Records to be displayed on each page
  const [recordsPerPage] = useState(12);

  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;

  // Records to be displayed on the current page
  const currentRecords = filteredData.slice(
    indexOfFirstRecord,
    indexOfLastRecord
  );

  const nPages = Math.ceil(filteredData.length / recordsPerPage);
  //Change page
  const paginate = (num) => {
    setCurrentPage(num);
  };
  const nextPage = () => {
    if (currentPage !== nPages) setCurrentPage(currentPage + 1);
  };
  const prevPage = () => {
    if (currentPage !== 1) setCurrentPage(currentPage - 1);
  };

  const [search, setSearch] = useState({ name: "", attack: 0 });
  useEffect(() => {
    filter(data, setFilteredData, search.name, search.attack);
  }, [data, search]);
  return (
    <>
      <Container maxWidth="md">
        <Box sx={{ bgcolor: "#cfe8fc", height: "100vh", px: 3, py: 1 }}>
          <h1 className="text-primary mb-" style={{ textAlign: "center" }}>
            Pokemons Filtering
          </h1>
          <SearchBar setSearch={setSearch} search={search} />
          <RadioButton setSearch={setSearch} search={search} />
          <DisplayTable pokemons={currentRecords} loading={loading} />
        </Box>
      </Container>
      <Pagination
        recordsPerPage={recordsPerPage}
        totalNum={data.length}
        paginate={paginate}
        prePage={prevPage}
        nextPage={nextPage}
        currentPage={currentPage}
      />
    </>
  );
}
