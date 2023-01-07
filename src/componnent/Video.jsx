import { Stack } from "@mui/material";
import VideoCard from "./VideoCard";
import { nanoid } from "nanoid";
const Video = (props) => {
  const { data } = props;
  return (
    <Stack
      direction="row"
      sx={{
        display: "flex",
        flexWrap: "wrap",
        gap: 3,
        width: "100%",
      }}
    >
      {data.map((ele) => {
        return <VideoCard key={nanoid()} videos={ele} />;
      })}
    </Stack>
  );
};

export default Video;
