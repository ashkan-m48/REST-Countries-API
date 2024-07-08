/* eslint-disable react/prop-types */
import { Container, InputBase } from "@mui/material";
import "./searchBar.css";
import Paper from "@mui/material/Paper";
import SearchIcon from "@mui/icons-material/Search";
import { useSelector } from "react-redux";

function SearchBar({ background }) {
  function handleChange(e) {
    console.dir(e.target.value);
  }

  return (
    <Container>
      <Paper
        component="form"
        data-theme={background ? "light" : "dark"}
        sx={
          background
            ? {
                backgroundColor: "hsl(0, 0%, 98%)",
                p: "2px 4px",
                display: "flex",
                alignItems: "center",
                width: 400,
                marginBottom: "20px",
                height: "50px",
              }
            : {
                backgroundColor: "hsl(209, 23%, 22%)",
                color: "hsl(0, 0%, 100%)",
                p: "2px 4px",
                display: "flex",
                alignItems: "center",
                width: 400,
                marginBottom: "20px",
                height: "50px",
              }
        }
      >
        <SearchIcon />
        <InputBase
          sx={
            background ? { ml: 1, flex: 1 } : { ml: 1, flex: 1, color: "white" }
          }
          placeholder="Search for country"
          onChange={handleChange}
        />
      </Paper>
    </Container>
  );
}

export default SearchBar;
