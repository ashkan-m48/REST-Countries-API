/* eslint-disable react/prop-types */
import { InputBase } from "@mui/material";
import "./searchBar.css";
import Paper from "@mui/material/Paper";
import SearchIcon from "@mui/icons-material/Search";
import { useDispatch } from "react-redux";
import { setSearchText } from "../../redux/cardSlice";

function SearchBar({ background }) {
  const dispatch = useDispatch();

  function handleChange(e) {
    const searchText = e.target.value;
    dispatch(setSearchText(searchText));
  }

  return (
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
              maxWidth: 400,
              marginBottom: "20px",
              height: "50px",
            }
          : {
              backgroundColor: "hsl(209, 23%, 22%)",
              color: "hsl(0, 0%, 100%)",
              p: "2px 4px",
              display: "flex",
              alignItems: "center",
              maxWidth: 400,
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
  );
}

export default SearchBar;
