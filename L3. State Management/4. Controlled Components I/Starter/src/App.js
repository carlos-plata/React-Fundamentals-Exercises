import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

const App = () => {
  const [textValue, setTextValue] = useState("");

  const handleChange = (event) => {
    setTextValue(event.target.value);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">ReactND - Coding Practice</h1>
      </header>
      <div className="container">
        <input
          type="text"
          placeholder="Say Something"
          value={textValue}
          onChange={handleChange}
        />
        <p className="echo">Echo:</p>
        <p>{textValue}</p>
      </div>
    </div>
  );
};

export default App;
