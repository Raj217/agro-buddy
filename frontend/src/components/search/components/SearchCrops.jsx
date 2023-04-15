import React, { useContext, useState } from "react";
import {
  Box,
  Button,
  Stack,
  TextField,
  Typography,
  Select,
  Popover,
  Slider,
  Grid,
} from "@mui/material";
import { CropContext } from "../../../context/crops";
import CropDetailsQuery from "../../../api/models/cropDetailsQuery";
import SearchCard from "./SearchCard";
import "./styles.css";

const valueText = (value) => {
  return `${value}`;
};

function SearchCrops({ setQuery }) {
  const [search, setSearch] = useState("");
  const [cropsData, setCropsData] = useState([]);
  const [value, setValue] = React.useState({
    humidity: [ 30, 60 ],
    nitrogen: 21.443298969072163,
    pH: 5.929662931809999,
    phosphorus: undefined,
    potassium: 199.89,
    rainfall: 112.654779275,
    temperature: 22.6309424132,
  });
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const { getCropDetails, getCropPreview } = useContext(CropContext);
  const cropDetails = new CropDetailsQuery();
  // console.log(getCropDetails);
  const format = () => {
    cropDetails.name = search;
    setQuery(cropDetails);
  };

  const handleSearch = async () => {
    format();
    if (search) {
      await getCropPreview(cropDetails);
    }
  };
  const handlePopup = () => {
    setAnchorEl(event.currentTarget);
  };

  const handleKeyDown = async (event) => {
    format();
    if (search) {
      if (event.key === "Enter") {
        await getCropPreview(cropDetails);
      }
    }
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Stack
      flexDirection="column"
      sx={{
        width: { lg: "800px", md: "600px", xs: "320px" },
        margin: "auto",
      }}
    >
      <Stack p="20px" alignItems="center" justifyContent="center">
        <Box position="relative" mb="20px">
          <Button
            className="search-btn"
            variant="contained"
            sx={{
              textTransform: "none",
              width: { lg: "120px", xs: "70px" },
              fontSize: { lg: "16px", xs: "12px" },
              height: "56px",
              position: "absolute",
              left: { lg: "-120px", xs: "-70px" },
              borderRadius: "0",
            }}
            onClick={handlePopup}
          >
            Filter
          </Button>
          <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={() => setAnchorEl(null)}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            transformOrigin={{
              vertical: "center",
              horizontal: "center",
            }}
          >
            <Grid
              container
              justifyContent="center"
              alignItems="center"
              // spacing={{ xs: 2, sm: 3 }}
              sx={{ p: 2, height: "400px", width: "500px" }}
              columns={{ xs: 1, sm: 4, md: 1 }}
            >
              <Grid item xs={2} sm={4} md={4}>
                <Typography>Humidity</Typography>
                <Slider
                  value={value.humidity}
                  min={0}
                  max={100}
                  valueLabelDisplay="auto"
                  onChange={(event, newValue) => setValue({ ...value, humidity: newValue })}
                  getAriaValueText={valueText}
                ></Slider>
              </Grid>
              <Grid item xs={2} sm={4} md={4}>
                <Typography>Nitrogen</Typography>
                <Slider
                  value={value.nitrogen}
                  valueLabelDisplay="auto"
                  onChange={(event, newValue) => setValue({ ...value, nitrogen: newValue })}
                  getAriaValueText={valueText}
                ></Slider>
              </Grid>
              <Grid item xs={2} sm={4} md={4}>
                <Typography>pH</Typography>
                <Slider
                  value={value.pH}
                  valueLabelDisplay="auto"
                  onChange={(event, newValue) => setValue({ ...value, pH: newValue })}
                  getAriaValueText={valueText}
                ></Slider>
              </Grid>
              <Grid item xs={2} sm={4} md={4}>
                <Typography>Phosphorus</Typography>
                <Slider
                  value={value.phosphorus}
                  valueLabelDisplay="auto"
                  onChange={(event, newValue) => setValue({ ...value, phosphorus: newValue })}
                  getAriaValueText={valueText}
                ></Slider>
              </Grid>
              <Grid item xs={2} sm={4} md={4}>
                <Typography>Potassium</Typography>
                <Slider
                  value={value.potassium}
                  valueLabelDisplay="auto"
                  onChange={(event, newValue) => setValue({ ...value, potassium: newValue })}
                  getAriaValueText={valueText}
                ></Slider>
              </Grid>
              <Grid item xs={2} sm={4} md={4}>
                <Typography>Rainfall</Typography>
                <Slider
                  value={value.rainfall}
                  valueLabelDisplay="auto"
                  onChange={(event, newValue) => setValue({ ...value, rainfall: newValue })}
                  getAriaValueText={valueText}
                ></Slider>
              </Grid>
              <Grid item xs={2} sm={4} md={4}>
                <Typography>Temperature</Typography>
                <Slider
                  value={value.temperature}
                  valueLabelDisplay="auto"
                  onChange={(event, newValue) => setValue({ ...value, temperature: newValue })}
                  getAriaValueText={valueText}
                ></Slider>
              </Grid>
            </Grid>
          </Popover>
          <TextField
            sx={{
              input: {
                fontWeight: "700",
                outline: "none",
                borderRadius: "4px",
              },
              width: { lg: "600px", md: "450px", xs: "240px" },
              backgroundColor: "cream",
              borderRadius: "50px",
            }}
            height="76px"
            onChange={(e) => setSearch(e.target.value.toLowerCase())}
            placeholder="Search Crops"
            type="text"
            onKeyPress={handleKeyDown}
          />

          <Button
            className="search-btn"
            variant="contained"
            sx={{
              textTransform: "none",
              width: { lg: "120px", xs: "70px" },
              fontSize: { lg: "16px", xs: "12px" },
              height: "56px",
              position: "absolute",
              right: { lg: "-120px", xs: "-70px" },
              borderRadius: "0",
            }}
            onClick={handleSearch}
          >
            Search
          </Button>
        </Box>
        <div></div>
      </Stack>
    </Stack>
  );
}

export default SearchCrops;
