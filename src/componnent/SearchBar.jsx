import React from "react";
import { Box, Paper } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const SearchBar = () => {
  const [searchItem, setSearchItem] = useState("");
  const navigate = useNavigate();
  function handleChange(e) {
    const { value } = e.target;
    setSearchItem(value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    navigate(`searchVideo/${searchItem}`);
    setSearchItem("");
  }
  return (
    <Paper
      component="form"
      sx={{ width: { xs: "40%", md: "30%" } }}
      onSubmit={handleSubmit}
    >
      <Box className="search-bar">
        <input
          type="text"
          placeholder="search a video"
          className="my-input"
          onChange={handleChange}
          value={searchItem}
        />
        <SearchIcon />
      </Box>
    </Paper>
  );
};

export default SearchBar;
