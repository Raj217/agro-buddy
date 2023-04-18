import React, { useContext, useState } from "react";
import {
  Box,
  Button,
  Stack,
  TextField,
  Typography,
  Popover,
  Slider,
  Grid,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { CropContext } from "../../../context/crops";
import CropDetailsQuery from "../../../api/models/cropDetailsQuery";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import FilterAltOffIcon from "@mui/icons-material/FilterAltOff";
import ReactGa from "react-ga";
import "./styles.css";
import CircularProgress from '@mui/material/CircularProgress';
import Alert from '@mui/material/Alert';


const valueText = (value) => {
  return `${value}`;
};

function SearchCrops({ query, setQuery, hasFilter, ranges }) {


  const [loading, setLoading] = React.useState(false);
  const [done, setDone] = React.useState("Search");

  const handleButtonClick = () => {
    if (!loading) {
      setLoading(true);
      setDone("");
    }
    else {
      setLoading(false);
    }
  };


  const navigate = useNavigate();
  const { setCropData } = React.useContext(CropContext);
  const [isFilter, setIsFilter] = React.useState(false);
  const [search, setSearch] = useState("");
  const [value, setValue] = React.useState({
    humidity: [ranges.humidity.min, ranges.humidity.max],
    nitrogen: [ranges.nitrogen.min, ranges.nitrogen.max],
    pH: [ranges.pH.min, ranges.pH.max],
    phosphorous: [ranges.phosphorous.min, ranges.phosphorous.max],
    potassium: [ranges.potassium.min, ranges.potassium.max],
    rainfall: [ranges.rainfall.min, ranges.rainfall.max],
    temperature: [ranges.temperature.min, ranges.temperature.max],
  });
  const { getCropDetails, getCropPreview, crops } = useContext(CropContext);
  const initRange = () => {
    value.humidity[0] = ranges.humidity.min;
    value.humidity[1] = ranges.humidity.max;
    value.nitrogen[0] = ranges.nitrogen.min;
    value.nitrogen[1] = ranges.nitrogen.max;
    value.pH[0] = ranges.pH.min;
    value.pH[1] = ranges.pH.max;
    value.phosphorous[0] = ranges.phosphorous.min;
    value.phosphorous[1] = ranges.phosphorous.max;
    value.potassium[0] = ranges.potassium.min;
    value.potassium[1] = ranges.potassium.max;
    value.rainfall[0] = ranges.rainfall.min;
    value.rainfall[1] = ranges.rainfall.max;
    value.temperature[0] = ranges.temperature.min;
    value.temperature[1] = ranges.temperature.max;
    setQuery(query);
    setQuery(query);
  };
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  const handlePopup = async () => {
    setAnchorEl(event.currentTarget);
  };

  const format = () => {
    setCropData(new Map());
    query.name = search;
    setQuery(query);
    query.name = search;
    setQuery(query);
  };

  const handleSearch = async () => {
    if (window.location.pathname !== "/search") {
      navigate("/search");
    }

    ReactGa.event({
      category: "Button",
      label: "Search Crop Button",
      value: query.toQuery(),
    });
    format();
    await getCropPreview(query);
    setLoading(false);
    setDone("Search");
  };

  const handleKeyDown = async (event) => {
    ReactGa.event({
      category: "Button",
      label: "Search Crop Enter Button",
      value: query.toQuery(),
    });
    if (event.key === "Enter") {
      setLoading(true);
      setDone("");
      format();
      await getCropPreview(query);
      setLoading(false);
      setDone("Search");
    }
  };
  const handleApplyFilter = () => {
    setQuery(new CropDetailsQuery());
    query.fromHumidityLevel = value.humidity[0];
    query.toHumidityLevel = value.humidity[1];
    query.fromNitrogenLevel = value.nitrogen[0];
    query.toNitrogenLevel = value.nitrogen[1];
    query.fromPHLevel = value.pH[0];
    query.toPHLevel = value.pH[1];
    query.fromPhosphorusLevel = value.phosphorous[0];
    query.toPhosphorusLevel = value.phosphorous[1];
    query.fromPotassiumLevel = value.potassium[0];
    query.toPotassiumLevel = value.potassium[1];
    query.fromRainfallLevel = value.rainfall[0];
    query.toRainfallLevel = value.rainfall[1];
    query.fromTemperatureLevel = value.temperature[0];
    query.toTemperatureLevel = value.temperature[1];
    query.fromHumidityLevel = value.humidity[0];
    query.toHumidityLevel = value.humidity[1];
    query.fromNitrogenLevel = value.nitrogen[0];
    query.toNitrogenLevel = value.nitrogen[1];
    query.fromPHLevel = value.pH[0];
    query.toPHLevel = value.pH[1];
    query.fromPhosphorusLevel = value.phosphorous[0];
    query.toPhosphorusLevel = value.phosphorous[1];
    query.fromPotassiumLevel = value.potassium[0];
    query.toPotassiumLevel = value.potassium[1];
    query.fromRainfallLevel = value.rainfall[0];
    query.toRainfallLevel = value.rainfall[1];
    query.fromTemperatureLevel = value.temperature[0];
    query.toTemperatureLevel = value.temperature[1];
    setIsFilter(true);

    setQuery(query);

    setQuery(query);
    setAnchorEl(null);
  };
  const handleClearFilter = () => {
    initRange();
    setIsFilter(false);
    setAnchorEl(null);
  };

  return (
    <Stack
      flexDirection="column"
      sx={{
        width: { lg: "800px", md: "600px", xs: "320px" },
        margin: "50px auto",
      }}
    >
      <Stack sx={{ width: '100%' }} spacing={2}>
        <Alert variant="outlined" severity="info">
        We currently have limited data, so only a select set of commonly grown crops are available for search results. We apologize for the inconvenience and are working to expand our database for more comprehensive information on a wider range of crops
        </Alert>
    </Stack>
      <Stack p="20px" alignItems="center" justifyContent="center">
        <Box position="relative" mb="20px">
          {hasFilter && (
            <div>
              <Button
                className="search-btn"
                variant="contained"
                sx={{
                  textTransform: "none",
                  width: { lg: "150px", xs: "80px" },
                  fontSize: { lg: "16px", xs: "12px" },
                  height: "56px",
                  position: "absolute",
                  left: { lg: "-150px", xs: "-80px" },
                  borderRadius: "0",
                }}
                onClick={handlePopup}
                endIcon={isFilter ? <FilterAltIcon /> : <FilterAltOffIcon />}
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
                      min={ranges?.humidity?.min}
                      max={ranges?.humidity?.max}
                      valueLabelDisplay="auto"
                      onChange={(event, newValue) =>
                        setValue({ ...value, humidity: newValue })
                      }
                      getAriaValueText={valueText}
                    ></Slider>
                  </Grid>
                  <Grid item xs={2} sm={4} md={4}>
                    <Typography>Nitrogen</Typography>
                    <Slider
                      value={value.nitrogen}
                      min={ranges?.nitrogen?.min}
                      max={ranges?.nitrogen?.max}
                      valueLabelDisplay="auto"
                      onChange={(event, newValue) =>
                        setValue({ ...value, nitrogen: newValue })
                      }
                      getAriaValueText={valueText}
                    ></Slider>
                  </Grid>
                  <Grid item xs={2} sm={4} md={4}>
                    <Typography>pH</Typography>
                    <Slider
                      value={value.pH}
                      min={ranges?.pH?.min}
                      max={ranges?.pH?.max}
                      valueLabelDisplay="auto"
                      onChange={(event, newValue) =>
                        setValue({ ...value, pH: newValue })
                      }
                      getAriaValueText={valueText}
                    ></Slider>
                  </Grid>
                  <Grid item xs={2} sm={4} md={4}>
                    <Typography>Phosphorous</Typography>
                    <Slider
                      value={value.phosphorous}
                      min={ranges?.phosphorous?.min}
                      max={ranges?.phosphorous?.max}
                      valueLabelDisplay="auto"
                      onChange={(event, newValue) =>
                        setValue({ ...value, phosphorous: newValue })
                      }
                      getAriaValueText={valueText}
                    ></Slider>
                  </Grid>
                  <Grid item xs={2} sm={4} md={4}>
                    <Typography>Potassium</Typography>
                    <Slider
                      value={value.potassium}
                      min={ranges?.potassium?.min}
                      max={ranges?.potassium?.max}
                      valueLabelDisplay="auto"
                      onChange={(event, newValue) =>
                        setValue({ ...value, potassium: newValue })
                      }
                      getAriaValueText={valueText}
                    ></Slider>
                  </Grid>
                  <Grid item xs={2} sm={4} md={4}>
                    <Typography>Rainfall</Typography>
                    <Slider
                      value={value.rainfall}
                      min={ranges?.rainfall?.min}
                      max={ranges?.rainfall?.max}
                      valueLabelDisplay="auto"
                      onChange={(event, newValue) =>
                        setValue({ ...value, rainfall: newValue })
                      }
                      getAriaValueText={valueText}
                    ></Slider>
                  </Grid>
                  <Grid item xs={2} sm={4} md={4}>
                    <Typography>Temperature</Typography>
                    <Slider
                      value={value.temperature}
                      min={ranges?.temperature?.min}
                      max={ranges?.temperature?.max}
                      valueLabelDisplay="auto"
                      onChange={(event, newValue) =>
                        setValue({ ...value, temperature: newValue })
                      }
                      getAriaValueText={valueText}
                    ></Slider>
                  </Grid>
                  <Grid item xs={2} sm={4} md={4}>
                    <Button
                      className="search-btn"
                      variant="contained"
                      sx={{
                        textTransform: "none",
                        margin: "10px",
                        width: { lg: "120px", xs: "70px" },
                        fontSize: { lg: "16px", xs: "12px" },
                        height: "56px",

                        borderRadius: "0",
                      }}
                      onClick={handleApplyFilter}
                    >
                      Apply
                    </Button>
                    <Button
                      className="search-btn"
                      variant="outlined"
                      sx={{
                        textTransform: "none",
                        margin: "10px",
                        width: { lg: "120px", xs: "70px" },
                        fontSize: { lg: "16px", xs: "12px" },
                        height: "56px",

                        borderRadius: "0",
                      }}
                      onClick={handleClearFilter}
                    >
                      Clear
                    </Button>
                  </Grid>
                </Grid>
              </Popover>
            </div>
          )}
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
            onClick={() => { handleSearch(); handleButtonClick() }}
            endIcon={
              loading && (
                <CircularProgress
                  size={20}
                  sx={{
                    color: 'white',
                  }}
                />
              )
            }
          >
            {done}
          </Button>
        </Box>
        <div></div>
      </Stack>
    </Stack>
  );
}

export default SearchCrops;
