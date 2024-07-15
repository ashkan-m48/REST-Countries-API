import { useState } from "react";
import "./app.css";

import MainPage from "./pages/MainPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Individul from "./pages/secondPage/Individul";

function App() {
  const [isLight, setIsLight] = useState(true);
  return (
    <div className="App" data-theme={isLight ? "light" : "dark"}>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <MainPage
                toggleTheme={() => setIsLight(!isLight)}
                background={isLight}
              />
            }
          />
          <Route
            path="/country/:name"
            element={
              <Individul
                toggleTheme={() => setIsLight(!isLight)}
                background={isLight}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
