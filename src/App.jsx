import { useState } from "react";
import "./app.css";
import Header from "./Components/Header";

function App() {
  const [isLight, setIsLight] = useState(true);
  return (
    <div className="App" data-theme={isLight ? "light" : "dark"}>
      <Header toggleTheme={() => setIsLight(!isLight)} background={isLight} />
    </div>
  );
}

export default App;
