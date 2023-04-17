import React from "react";
import NPPData from "./NPPData";
import PhVsRainfall from "./PhVsRainfall";
import TempVsRainfall from "./TempVsRainfall";
import Temperature from "./Temperature";
import { useParams } from "react-router-dom";
import ReactGa from "react-ga";
import { CropContext } from "../../context/crops";
import { Typography } from "@mui/material";

const Content = () => {
  React.useEffect(() => {
    ReactGa.pageview(window.location.pathname);
  }, []);

  const { crop } = useParams();
  const { crops } = React.useContext(CropContext);

  const name = crops?.get(crop)?.data.name;
  return (
    <div>
      <Typography variant="h4" textAlign="center" fontWeight="bold">{name}</Typography>
      <NPPData crop={crop} />
      <PhVsRainfall crop={crop} />
      <TempVsRainfall crop={crop} />
      <Temperature crop={crop} />
    </div>
  );
};

export default Content;
