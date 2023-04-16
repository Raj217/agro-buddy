import React from "react";
import { Stack, Typography } from "@mui/material";
import "./styles.css";

function Youtube() {
  return (
    <div>
      <div style={{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <Typography
          variant="h3"
          fontWeight="bold"
          margin="50px 20px"
        >
          Know more about Farming
        </Typography>
      </div>
      <Stack
        flex
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        gap={5}
        overflow="auto"
        margin="20px 20px"
      >
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/9_Q4RBTd3ws"
          title="YouTube video player"
          frameborder="0"
          allow="fullscreen; accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen="true"
        ></iframe>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/QT4TWbPLrN8"
          title="YouTube video player"
          frameborder="0"
          allow="fullscreen; accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen="true"
        ></iframe>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/KfB2sx9uCkI"
          title="YouTube video player"
          frameborder="0"
          allow="fullscreen; accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen="true"
        ></iframe>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/SJv8bHTq4mU"
          title="YouTube video player"
          frameborder="0"
          allow="fullscreen; accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen="true"
        ></iframe>
      </Stack>
      <Stack
        flex
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        gap={5}
        overflow="auto"
        margin="20px 20px"
      >
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/R9pxFgJwxFE"
          title="YouTube video player"
          frameborder="0"
          allow="fullscreen; accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen="true"
        ></iframe>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/T0P8V3Ndbrs"
          title="YouTube video player"
          frameborder="0"
          allow="fullscreen; accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen="true"
        ></iframe>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/YDcakKDJWv0"
          title="YouTube video player"
          frameborder="0"
          allow="fullscreen; accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen="true"
        ></iframe>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/syDRoJ1PdYI"
          title="YouTube video player"
          frameborder="0"
          allow="fullscreen; accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen="true"
        ></iframe>
      </Stack>
    </div>
  );
}

export default Youtube;
