import React from "react";
import "./home.css";
function Home() {
  return (
    <div className="container">
      <div className="dashboard">
        <button>Home</button>
        <button>About Us</button>
        <button>Partners</button>
        <button>Contact Us</button>
      </div>
      <div className="center">
        <h1 className="heading slide-in">VRN</h1>
        <h1 className="heading2 slide-in">INNOVATORS</h1>
      </div>
    </div>
  );
}
export default Home;
