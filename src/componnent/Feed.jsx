import React, { useState, useEffect } from "react";
import { Box, Stack, Typography } from "@mui/material";
import SideBar from "./SideBar";
import Video from "./Video";
import FetchFromApi from "../utilities/FetchFromApi";

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [data, setData] = useState([]);
  useEffect(() => {
    FetchFromApi(`search?q=${selectedCategory}&part=snippet`).then((data) => {
      setData(data.items);
    });
  }, [selectedCategory]);

  return (
    <Stack
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        width: "100%",
      }}
    >
      <Box
        sx={{
          width: { sx: "100%", md: "200px" },
          borderRight: "1px solid rgb(56, 56, 56)",
        }}
      >
        <SideBar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <Box className="copyRight">
          <span>A-watch copy rights 2022</span>
        </Box>
      </Box>
      <Box sx={{ width: "100%", minHeight: "100vh" }}>
        <Typography variant="h4">
          Videos <span style={{ color: "#f98f36" }}>{selectedCategory}</span>
        </Typography>
        <Video data={data} />
      </Box>
    </Stack>
  );
};

export default Feed;
