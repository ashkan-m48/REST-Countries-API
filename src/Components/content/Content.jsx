/* eslint-disable react/prop-types */

import Cards from "../cards/Cards";
import "./content.css";
import SearchBar from "./SearchBar";

function Content({ toggleTheme, background }) {
  return (
    <div className="contentDiv">
      <div className="searchAndFilter">
        <SearchBar background={background} />
      </div>
      <Cards toggleTheme={toggleTheme} background={background} />
    </div>
  );
}

export default Content;
