import React, { useContext, useEffect, useState } from "react";
import Card from "@mui/material/Card";
import {
  Stack,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Container,
  Box,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { CropContext } from "../../../context/crops";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";

function SearchCard({ query, crop }) {
  const { crops, getCropDetails } = useContext(CropContext);
  const navigate = useNavigate()
  const random = Math.floor(Math.random() * crop.data.images.length);

  let pH = crop.preview.pH;
  let rainfall = crop.preview.rainfall;
  let temperature = crop.preview.temperature;
  // for (const [key, value] of crops) {
  //   crop = crops.get(key);
  //   pH = crop === undefined ? 0 : crop.preview.pH;
  //   temperature = crop === undefined ? 0 : crop.preview.temperature;
  //   rainfall = crop === undefined ? 0 : crop.preview.rainfall;
  // }
  const handleClick = async () => {


    query.name = crop.data.name;
    await getCropDetails(query);

    navigate('/details/' + query.name);
    // navigate("/content")
  }
  return (
    <Container maxWidth='lg'>
      <Box
        margin="auto"

      >
        <Card sx={{ display: "flex", flexDirection: "column", width: "100%" }}>
          <div to="/content" style={{ textDecoration: "none" }}>
            <CardMedia
              style={{
                height: "300px",
              }}
              className="brighten"
              component="img"
              image={crop === undefined ? "" : crop.data.images[random]}
              alt="crops"
            />
          </div>

          <CardContent>
            <Typography
              textAlign="center"
              gutterBottom
              variant="h4"
              component="div"
              lineHeight={3}
            >
              {crop === undefined ? "" : crop.data.name}
            </Typography>
            <Stack
              display="flex"
              justifyContent="center"
              alignItems="center"
            ></Stack>
            <Stack display="flex" alignItems="center" justifyContent="center">
              <Typography variant="h7" lineHeight={2}>
                pH = {crop.preview.pH}{" "}
                <RadioButtonCheckedIcon
                  style={{
                    color:
                      pH > 7
                        ? "#1fc531"
                        : pH >= 5 && pH < 7
                          ? "#f2db00"
                          : "#ba1d00",
                  }}
                />
              </Typography>
              <Typography>
                rainfall = {crop.preview.rainfall}
                <RadioButtonCheckedIcon
                  style={{
                    color:
                      rainfall >= 200
                        ? "#1fc531"
                        : rainfall >= 100 && rainfall < 200
                          ? "#f2db00"
                          : "#ba1d00",
                  }}
                />
              </Typography>
              <Typography>
                temperature = {crop.preview.temperature}
                <RadioButtonCheckedIcon
                  style={{
                    color:
                      temperature >= 30
                        ? "#1fc531"
                        : temperature >= 20 && temperature < 30
                          ? "#f2db00"
                          : "#ba1d00",
                  }}
                />
              </Typography>
            </Stack>
          </CardContent>
          <Stack alignItems="center">
            <div style={{ textDecoration: "none" }}>
              <CardActions>
                <Button onClick={handleClick} size="small">Learn More</Button>
              </CardActions>
            </div>
          </Stack>
        </Card>
      </Box>
    </Container>
  );
}

export default SearchCard;
