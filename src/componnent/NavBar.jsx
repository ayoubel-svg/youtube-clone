import React from "react";
import { Typography, Stack } from "@mui/material";
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <Stack direction="row" sx={{ color: "#fff" }} className="nav-bar">
      <Link to="/">
        <Typography variant="h5" sx={{ color: "#f98f36" }}>
          A-Watch
        </Typography>
      </Link>
      <SearchBar />
    </Stack>
  );
};

export default NavBar;
