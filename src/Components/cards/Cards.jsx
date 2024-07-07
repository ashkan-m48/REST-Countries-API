/* eslint-disable react/prop-types */
import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { useEffect, useState } from "react";
import { getData } from "../../utils/fetcherData";
import "./cars.css";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";

function Cards({ background }) {
  const [info, setInfo] = useState([]);
  console.log(background);
  useEffect(() => {
    getData(
      "https://restcountries.com/v3.1/all?fields=name,flags,population,region,capital "
    ).then((data) => {
      console.log(data);
      setInfo(data);
    });
  }, []);

  return (
    <Container>
      <Grid container spacing={3}>
        {info.map((obj, index) => {
          return (
            <Grid item xs={10} md={3} key={index}>
              <Paper
                elevation={3}
                sx={
                  background
                    ? {
                        backgroundColor: "hsl(0, 0%, 98%)",
                      }
                    : {
                        backgroundColor: "hsl(209, 23%, 22%)",
                        color: "hsl(0, 0%, 100%)",
                      }
                }
                square={false}
              >
                <img src={obj.flags.png} alt="countries" className="img" />
                <Box paddingX={2}>
                  <Typography
                    variant="h6"
                    component="h2"
                    sx={{ paddingTop: "10px" }}
                  >
                    {obj.name.common}
                  </Typography>
                </Box>
                <Box
                  paddingX={2}
                  sx={{ display: "flex", alignItems: "center" }}
                >
                  <Typography
                    variant="subtitle2"
                    component="h2"
                    marginRight={0.5}
                  >
                    population:
                  </Typography>
                  <Typography
                    sx={{ fontSize: "8pt", fontWeight: "600" }}
                    component="h2"
                  >
                    {obj.population
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                  </Typography>
                </Box>
                <Box
                  paddingX={2}
                  sx={{ display: "flex", alignItems: "center" }}
                >
                  <Typography
                    variant="subtitle2"
                    component="h2"
                    marginRight={0.5}
                  >
                    Region:
                  </Typography>
                  <Typography
                    sx={{ fontSize: "8pt", fontWeight: "600" }}
                    component="h2"
                  >
                    {obj.region}
                  </Typography>
                </Box>

                <Box
                  paddingX={2}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    paddingBottom: "20px",
                  }}
                >
                  <Typography
                    variant="subtitle2"
                    component="h2"
                    marginRight={0.5}
                  >
                    Capital:
                  </Typography>
                  <Typography
                    sx={{ fontSize: "8pt", fontWeight: "600" }}
                    component="h2"
                  >
                    {obj.capital}
                  </Typography>
                </Box>
              </Paper>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
}

export default Cards;
