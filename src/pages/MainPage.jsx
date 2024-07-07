/* eslint-disable react/prop-types */
import Content from "../Components/content/Content";
import Header from "../Components/header/Header";
import "./mainPage.css";

function MainPage({ toggleTheme, background }) {
  return (
    <div data-theme={background ? "light" : "dark"}>
      <Header toggleTheme={toggleTheme} background={background} />
      <Content toggleTheme={toggleTheme} background={background} />
    </div>
  );
}

export default MainPage;
