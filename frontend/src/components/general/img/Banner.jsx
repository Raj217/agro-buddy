import React from "react";
import "./Banner.css";

// type: top-left, top-right, bottom-left, bottom-right
// size: small, medium, large
function Banner({ url, type = "top-left", size = "medium" }) {
  return (
    <div className={size}>
      <img src={url} className={type} />
    </div>
  );
}

export default Banner;
