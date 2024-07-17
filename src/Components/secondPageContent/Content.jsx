/* eslint-disable react/prop-types */
import { Button, Container, Stack } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Link, useLocation } from "react-router-dom";
import "./content.css";

function Content({ background }) {
  const location = useLocation();
  console.log(location.state);

  function findTheNameOfCountry(abb) {
    const countries = JSON.parse(localStorage.getItem("countries"));

    const hello = countries.find((item) => {
      return item.cca3.toLowerCase() == abb.toLowerCase();
    });
    return hello;
  }

  return (
    <Container>
      <Stack direction="row" sx={{ marginTop: "25px" }}>
        <Button
          variant="outlined"
          href="/REST-Countries-API/"
          sx={
            background
              ? {}
              : {
                  backgroundColor: "hsl(209, 23%, 22%)",
                  color: "white",
                  border: "none",
                }
          }
        >
          <ArrowBackIcon />
          Back To Main Page
        </Button>
      </Stack>
      <div className="informationPart">
        <img
          src={location.state.flags.png}
          alt={location.state.name.common}
          className="countriesImage"
        />

        <div className="containerOfAllContent">
          <h3 style={{ fontWeight: "700", marginBottom: "30px" }}>
            {location.state.name.common}
          </h3>
          <div className="details">
            <div className="leftFront">
              <p
                style={{
                  fontWeight: "700",
                  fontSize: "12pt",
                }}
              >
                Official Name: &nbsp;
                <span style={{ fontWeight: "400" }}>
                  {location.state.name.official}
                </span>
              </p>

              <p
                style={{
                  fontWeight: "700",
                  fontSize: "12pt",
                }}
              >
                Population: &nbsp;
                <span style={{ fontWeight: "400" }}>
                  {location.state.population
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                </span>
              </p>

              <p
                style={{
                  fontWeight: "700",
                  fontSize: "12pt",
                }}
              >
                Region: &nbsp;
                <span style={{ fontWeight: "400" }}>
                  {location.state.region}
                </span>
              </p>

              <p
                style={{
                  fontWeight: "700",
                  fontSize: "12pt",
                }}
              >
                Sub Region: &nbsp;
                <span style={{ fontWeight: "400" }}>
                  {location.state.subregion}
                </span>
              </p>
              <p
                style={{
                  fontWeight: "700",
                  fontSize: "12pt",
                }}
              >
                Capital: &nbsp;
                <span style={{ fontWeight: "400" }}>
                  {location.state.capital}
                </span>
              </p>
            </div>
            <div className="rightFront">
              <p style={{ fontWeight: "700", fontSize: "12pt" }}>
                Top Level Domain:&nbsp;
                <span style={{ fontWeight: "400" }}>{location.state.tld}</span>
              </p>

              <p style={{ fontWeight: "700", fontSize: "12pt" }}>
                Currencies:&nbsp;
                <span style={{ fontWeight: "400" }}>
                  {Object.values(location.state.currencies)[0].name}
                </span>
              </p>

              <p style={{ fontWeight: "700", fontSize: "12pt" }}>
                Languages:&nbsp;
                <span style={{ fontWeight: "400" }}>
                  {Object.values(location.state.languages).join(",")}
                </span>
              </p>
            </div>
          </div>
          <div className="borderButtons">
            Border Countries:&nbsp;
            {location.state.borders.map((item, index) => {
              return (
                <Link
                  key={index}
                  to={`/REST-Countries-API/country/${
                    findTheNameOfCountry(item).name.common
                  }`}
                  state={findTheNameOfCountry(item)}
                >
                  <Button
                    variant="outlined"
                    sx={
                      background
                        ? { marginLeft: "7px", marginBottom: "5px" }
                        : {
                            backgroundColor: "hsl(209, 23%, 22%)",
                            color: "white",
                            border: "none",
                            marginLeft: "7px",
                            marginBottom: "5px",
                          }
                    }
                  >
                    {findTheNameOfCountry(item).name.common}
                  </Button>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Content;
