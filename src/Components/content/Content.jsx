/* eslint-disable react/prop-types */

import Cards from "../cards/Cards";
import "./content.css";

function Content({ toggleTheme, background }) {
  return (
    <div className="contentDiv">
      <Cards toggleTheme={toggleTheme} background={background} />
    </div>
  );
}

export default Content;
