import { useState } from "react";
import "./app.css";

import MainPage from "./pages/MainPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Individul from "./pages/Individul";

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
          <Route path="/country" element={<Individul />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
