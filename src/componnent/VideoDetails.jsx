import React, { useState, useEffect } from "react";
import { Box, Stack, Typography } from "@mui/material";
import ReactPlayer from "react-player";
import { Link, useParams } from "react-router-dom";
import FetchFromApi from "../utilities/FetchFromApi";
import Video from "./Video";
import Loader from "./Loader";
const VideoDetails = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [videoDetail, setVideoDetail] = useState([])
  useEffect(() => {
    FetchFromApi(`search?relatedToVideoId=${id}&part=snippet&type=video`).then(
      (data) => setData(data.items)
    );
    FetchFromApi(`videos?part=contentDetails,snippet,statistics&id=${id}`).then((data) => {
      setVideoDetail(data.items[0])
    })
  }, [id]);

  if (!videoDetail?.snippet) return <Loader />
  const { snippet: { description, channelId, channelTitle }, statistics: { viewCount, likeCount } } = videoDetail

  return (
    <Stack
      sx={{
        display: "flex",
        flexDirection: { sx: "column", md: "row" },
        paddingX: "10px",
      }}
    >
      <Box sx={{ width: "1100px", height: "500px" }}>
        <ReactPlayer
          url={`https://www.youtube.com/watch?v=${id}`}
          controls
          width="100%"
          height="100%"
        />
        <Stack direction="row" sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: "100px" }} >
          <Box>
            <Typography variant="h5">{description.slice(0, 60)}</Typography>
            <Link to={`/channel/${channelId}`}>
              <Typography sx={{ display: "flex", color: "gray", gap: "20px" }}>{channelTitle}</Typography>
            </Link>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-evenly", width: "30%" }}>
            <Typography>{parseInt(viewCount).toLocaleString()} Likes</Typography>
            <Typography>{parseInt(likeCount).toLocaleString()} Views</Typography>
          </Box>
        </Stack>
      </Box>
      <Box sx={{ width: "400px", ml: "25px" }}>
        <Video data={data} />
      </Box>
    </Stack>
  );
};

export default VideoDetails;
