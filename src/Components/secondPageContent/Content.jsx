/* eslint-disable react/prop-types */
import { Button, Container, Stack } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Link, useLocation } from "react-router-dom";

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
          href="/"
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
          Back
        </Button>
      </Stack>
      <Stack
        sx={{
          marginTop: "40px",
          width: "100%",
          height: "70vh",
          display: "flex",
          flexDirection: "row",
        }}
        gap={10}
      >
        <div className="image">
          <img
            src={location.state.flags.png}
            alt={location.state.name.common}
            style={{ height: "400px", width: "500px" }}
          />
        </div>
        <div
          className="container of all content"
          style={{ padding: "10px", display: "flex", flexDirection: "column" }}
        >
          <h3 style={{ fontWeight: "700", marginBottom: "30px" }}>
            {location.state.name.common}
          </h3>
          <div
            className=" of details"
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <div>
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
            <div>
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
          <div
            className="borderButtons"
            style={{ marginTop: "25px", fontWeight: "700", fontSize: "12pt" }}
          >
            Border Countries:&nbsp;
            {location.state.borders.map((item, index) => {
              return (
                <Link
                  key={index}
                  to={`/country/${findTheNameOfCountry(item).name.common}`}
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
      </Stack>
    </Container>
  );
}

export default Content;
