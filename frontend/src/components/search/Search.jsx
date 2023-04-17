import React from "react";
import { CircularProgress, Box, Typography } from "@mui/material";
import CropDetailsQuery from "../../api/models/cropDetailsQuery";
import SearchCrops from "./components/SearchCrops";
import SearchCard from "./components/SearchCard";
import { CropContext } from "../../context/crops";
import { Grid } from "@mui/material";
import ReactGa from "react-ga";

function Search() {
  const { getParamRanges } = React.useContext(CropContext);
  const [isLoading, setIsLoading] = React.useState(true);

  const [range, setRange] = React.useState({});
  React.useEffect(() => {
    ReactGa.pageview(window.location.pathname);

    getParamRanges().then((data) => {
      setIsLoading(false);
      console.log(data);
      setRange(data);
    });
  }, []);
  const [query, setQuery] = React.useState(new CropDetailsQuery());
  const { crops } = React.useContext(CropContext);
  let cropList = [];
  for (const [name, data] of crops) {
    cropList.push(data);
  }
  if (isLoading) {
    return (
      <Box
        style={{ minHeight: "70vh" }}
        sx={{ display: "flex", justifyContent: "center" }}
      >
        <CircularProgress />
      </Box>
    );
  }
  return (
    <div style={{ minHeight: "70vh" }}>
      <SearchCrops query={query} setQuery={setQuery} hasFilter ranges={range} />
      <Stack display='flex' flexDirection='row' justifyContent='space-around'>

      </Stack>
      <Grid container spacing={2} direction="row" justifyContent="center">
        {cropList.map((crop) => (
          <Grid item xs={12} sm={6} md={4}>
            <SearchCard key={crop.data.name} query={query} crop={crop} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default Search;
