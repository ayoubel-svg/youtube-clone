import React from "react";
import {
  Box,
  Typography,
  Stack,
  CardMedia,
  CardContent,
  Card,
} from "@mui/material";

import { Link } from "react-router-dom";
const VideoCard = (props) => {
  const { videos } = props;
  const { videos: { id: { videoId }, snippet: { channelId } } } = props;
  return (
    <Card
      sx={{ width: "300px", height: "350px", background: "#000" }}
      className="video-card"
    >
      <Link to={`/video/${videoId}`}>

        <CardMedia
          component="img"
          height="168"
          image={videos?.snippet?.thumbnails?.high?.url}
          alt="image"
        />
      </Link>
      <CardContent sx={{ background: "#000", color: "#fff" }}>
        <Link to={`/video/${videoId}`}>
          <Typography variant="h6" sx={{ pb: 2 }}>
            {videos?.snippet?.description.slice(0, 60)}
          </Typography>
        </Link>
        <Link to={`/channel/${channelId}`}>
          <Typography variant="body1" sx={{ color: "gray" }}>
            {videos?.snippet?.channelTitle}
          </Typography>
        </Link>
      </CardContent>
    </Card>
  );
};

export default VideoCard;
