import React from "react";
import { useInView } from "react-intersection-observer";
import { useState, useRef, useEffect } from "react";
import image1 from "./rdr.png";
import image2 from "./imgtwo.jpeg";
import image3 from "./tree.jpg";
import "./ImageAnimation.css";
const images = [image1, image2, image3];

const ImageAnimation = () => {
  const [visibleIndexes, setVisibleIndexes] = useState([]);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const containerTop = containerRef.current.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      const newVisibleIndexes = images
        .map((_, index) => index)
        .filter((index) => {
          const image = containerRef.current.children[index];
          const imageTop = image.getBoundingClientRect().top;
          return imageTop < windowHeight - containerTop;
        });

      setVisibleIndexes(newVisibleIndexes);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check on component mount

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="image-container2" ref={containerRef}>
      {images.map((image, index) => (
        <div
          key={index}
          className={`image ${visibleIndexes.includes(index) ? "visible" : ""}`}
        >
          <img src={image} alt={`Image ${index + 1}`} />
        </div>
      ))}
    </div>
  );
};

export default ImageAnimation;
