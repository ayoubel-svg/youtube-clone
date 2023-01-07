import React from "react";
import { Box, Typography, Stack } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import Feed from "./componnent/Feed";
import NavBar from "./componnent/NavBar";
import VideoDetails from "./componnent/VideoDetails";
import ChannelDetails from "./componnent/ChannelDetails";
import SearchVideos from "./componnent/SearchVideos";
const App = () => {
  return (
    <Box>
      <NavBar />
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="/video/:id" element={<VideoDetails />} />
        <Route path="/channel/:id" element={<ChannelDetails />} />
        <Route path="/searchVideo/:searchTerm" element={<SearchVideos />} />
      </Routes>
    </Box>
  );
};

export default App;
