/* eslint-disable react/prop-types */
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setSearchText } from "../../redux/cardSlice";

function Filter({ background }) {
  const [countries, setCountries] = useState("");
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setCountries(e.target.value);
    const searchText = e.target.value;
    dispatch(setSearchText(searchText));
  };

  console.log(countries);
  return (
    <div>
      <FormControl sx={{ m: 0.5, minWidth: 200, marginBottom: "25px" }}>
        <InputLabel id="demo-simple-select-autowidth-label">
          Filter by Region
        </InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={countries}
          onChange={handleChange}
          fullWidth
          label="Filter by Region"
          sx={
            background
              ? { backgroundColor: "hsl(0, 0%, 98%)" }
              : {
                  backgroundColor: "hsl(209, 23%, 22%)",
                  color: "white",
                }
          }
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem
            value={"Africa"}
            sx={
              background
                ? { backgroundColor: "hsl(0, 0%, 98%)" }
                : {
                    backgroundColor: "hsl(209, 23%, 22%)",
                    color: "hsl(0, 0%, 100%)",
                  }
            }
          >
            Africa
          </MenuItem>
          <MenuItem
            value={"America"}
            sx={
              background
                ? { backgroundColor: "hsl(0, 0%, 98%)" }
                : {
                    backgroundColor: "hsl(209, 23%, 22%)",
                    color: "hsl(0, 0%, 100%)",
                  }
            }
          >
            America
          </MenuItem>
          <MenuItem
            value={"Asia"}
            sx={
              background
                ? { backgroundColor: "hsl(0, 0%, 98%)" }
                : {
                    backgroundColor: "hsl(209, 23%, 22%)",
                    color: "hsl(0, 0%, 100%)",
                  }
            }
          >
            Asia
          </MenuItem>
          <MenuItem
            value={"Europe"}
            sx={
              background
                ? { backgroundColor: "hsl(0, 0%, 98%)" }
                : {
                    backgroundColor: "hsl(209, 23%, 22%)",
                    color: "hsl(0, 0%, 100%)",
                  }
            }
          >
            Europe
          </MenuItem>
          <MenuItem
            value={"Oceania"}
            sx={
              background
                ? { backgroundColor: "hsl(0, 0%, 98%)" }
                : {
                    backgroundColor: "hsl(209, 23%, 22%)",
                    color: "hsl(0, 0%, 100%)",
                  }
            }
          >
            Oceania
          </MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}

export default Filter;
