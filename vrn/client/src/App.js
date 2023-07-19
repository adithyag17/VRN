import React from "react";
import "./App.css";
import { HashLink } from "react-router-hash-link";
import Home from "./pages/home.jsx";
import AboutMe from "./pages/aboutMe.jsx";
import ImageAnimation from "./pages/ImageAnimation";
import Products from "./pages/Products";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Home />
                <AboutMe />
                <ImageAnimation />
              </>
            }
          />
          <Route path="/Products" element={<Products />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
