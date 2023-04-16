import React from "react";
import NPPData from "./NPPData";
import PhVsRainfall from "./PhVsRainfall";
import TempVsRainfall from "./TempVsRainfall";
import Temperature from "./Temperature";
import { useParams } from "react-router-dom";
import ReactGa from "react-ga";

const Content = () => {
  React.useEffect(() => {
    ReactGa.pageview(window.location.pathname);
  }, []);

  const { crop } = useParams();
  console.log(crop);
  return (
    <div>
      <NPPData crop={crop} />
      <PhVsRainfall crop={crop} />
      <TempVsRainfall crop={crop} />
      <Temperature crop={crop} />
    </div>
  );
};

export default Content;
