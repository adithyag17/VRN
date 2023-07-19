import React, { useEffect, useRef, useState } from "react";
import "./home.css";
import NET from "vanta/dist/vanta.net.min";
import * as THREE from "three";
import { Link, useNavigate } from "react-router-dom";

function Home() {
  const [vantaEffect, setVantaEffect] = useState(0);
  const vantaRef = useRef(null);
  const navigate = useNavigate();
  const aboutRef = useRef(null);
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        NET({
          el: vantaRef.current,
          THREE,
          color: 0x888888, // Set the color to gray
          backgroundColor: 0xe5e0ea,
          maxDistance: 34.0,
        })
      );
    }

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);
  const scrollToAbout = () => {
    const aboutElement = document.getElementById("aboutuscontainer");
    if (aboutElement) {
      aboutElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="container">
      <div className="dashboard">
        <button onClick={() => navigate("/")}>Home</button>
        <button onClick={scrollToAbout}>About Us</button>
        <button onClick={() => navigate("/Products")}>Products</button>
        <button>Contact Us</button>
      </div>
      <div className="vanta-background" ref={vantaRef}></div>
      <div className="center">
        <h1 className="heading slide-in">VRN</h1>
        <h1 className="heading2 slide-in">INNOVATORS</h1>
      </div>
    </div>
  );
}

export default Home;
