import React from "react";
import "./Banner.css";
import { Box, Container } from "@mui/system";

// type: top-left, top-right, bottom-left, bottom-right
// size: small, medium, large
function Banner({ url, type = "top-left", size, sx }) {
  return (
    <Container className={sx === undefined ? size : ''} sx={sx}>
      <img src={url} className={type} />
    </Container >
  );
}

export default Banner;
