import { useState } from "react";
import "./app.css";

import MainPage from "./pages/MainPage";

function App() {
  const [isLight, setIsLight] = useState(true);
  return (
    <div className="App" data-theme={isLight ? "light" : "dark"}>
      <MainPage toggleTheme={() => setIsLight(!isLight)} background={isLight} />
    </div>
  );
}

export default App;
