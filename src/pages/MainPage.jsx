/* eslint-disable react/prop-types */
import Content from "../Components/content/Content";
import Header from "../Components/header/Header";

function MainPage({ toggleTheme, background }) {
  return (
    <>
      <Header toggleTheme={toggleTheme} background={background} />
      <Content />
    </>
  );
}

export default MainPage;
