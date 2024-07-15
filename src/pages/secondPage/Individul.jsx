/* eslint-disable react/prop-types */
import Header from "../../Components/header/Header";
import Content from "../../Components/secondPageContent/Content";
import "./individual.css";

function Individul({ toggleTheme, background }) {
  return (
    <div data-theme={background ? "light" : "dark"}>
      <Header toggleTheme={toggleTheme} background={background} />
      <Content toggleTheme={toggleTheme} background={background} />
    </div>
  );
}

export default Individul;
