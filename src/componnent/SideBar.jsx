import React from "react";
import { Box, Stack } from "@mui/material";
import { categories } from "../utilities/constant";
const SideBar = (props) => {
  const { selectedCategory, setSelectedCategory } = props;
  return (
    <Stack
      className="side-bar"
      sx={{
        flexDirection: { xs: "row", md: "column" },
        width: "100%",
      }}
    >
      {categories.map((category) => (
        <Box
          className="my-box"
          onClick={() => {
            setSelectedCategory(category.name);
          }}
          sx={{
            background: selectedCategory === category.name ? "#f98f36" : null,
          }}
        >
          <span
            className="box-icon"
            style={{
              color: selectedCategory === category.name ? "#fff" : null,
            }}
          >
            {category.icon}
          </span>
          <span className="box-name">{category.name}</span>
        </Box>
      ))}
    </Stack>
  );
};

export default SideBar;
