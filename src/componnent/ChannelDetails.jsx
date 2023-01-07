import React, { useState } from "react";
import { Box, Stack, Typography, CardMedia } from "@mui/material"
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import FetchFromApi from "../utilities/FetchFromApi";
import Loader from "./Loader";
import Video from "./Video";
import { nanoid } from "nanoid";
const ChannelDetails = () => {
  const { id } = useParams()
  const [data, setData] = useState([])
  const [channelVideos, setChannelVideos] = useState([])
  useEffect(() => {
    FetchFromApi(`channels?part=snippet,statistics&id=${id}`).then((data) => setData(data.items[0]))
    FetchFromApi(`search?channelId=${id}&part=snippet,id&order=date`).then((data) => setChannelVideos(data.items))
  }
    , [])
  if (!data?.snippet) return <Loader />
  const { snippet: { thumbnails: { default: { url } }, title } } = data
  console.log(data)
  return (<Stack>
    <Box sx={{ mb: "7em" }}>
      <div className="img-background" />
      <Box className="channel-img" >
        <CardMedia component="img" height="150" width="150" image={url} alt="image"
          sx={{ borderRadius: "50%" }}
        />
      </Box>
      <Typography variant="h6" sx={{
        position: "absolute",
        top: "77%",
        left: "50%",
        transform: "translate(-50%, -77%)"
      }}>{title}</Typography>
    </Box>
    <Box sx={{
      width: "1300px",
      margin: "auto"
    }}>
      <Video key={nanoid()} data={channelVideos} />
    </Box>
  </Stack>);
};

export default ChannelDetails;
