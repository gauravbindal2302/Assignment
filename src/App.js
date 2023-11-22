import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Main from "./Components/Main/Main";

function App() {
  return (
    <div className="app">
      <Navbar />
      <div className="app-content">
        <Main />
      </div>
    </div>
  );
}

export default App;
