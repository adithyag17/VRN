import React from "react";
import "./App.css";
import Home from "./pages/home.jsx";
import AboutMe from "./pages/aboutMe.jsx";
import ImageAnimation from "./pages/ImageAnimation";
function App() {
  return (
    <div className="App">
      <Home />
      <AboutMe />
      <ImageAnimation />
    </div>
  );
}

export default App;
