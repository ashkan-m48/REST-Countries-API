/* eslint-disable react/prop-types */

import Cards from "../cards/Cards";
import "./content.css";
import Filter from "./Filter";
import SearchBar from "./SearchBar";
import { Container } from "@mui/material";

function Content({ toggleTheme, background }) {
  return (
    <div className="contentDiv">
      <Container
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          flexWrap: "wrap",
        }}
      >
        <SearchBar background={background} />
        <Filter background={background} />
      </Container>
      <Cards toggleTheme={toggleTheme} background={background} />
    </div>
  );
}

export default Content;
