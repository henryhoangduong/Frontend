import React from "react";
import { useState,useEffect } from "react";

const Slider = () => {
  const array = [
    "https://www.lego.com/cdn/cs/set/assets/blt1a803a41d03d2a9b/Holiday23-GroupedAssets-202311-Hero-Standard-Large-10326.jpg?fit=crop&format=webply&quality=80&width=1600&height=500&dpr=1.5",
    "https://www.lego.com/cdn/cs/set/assets/blt8ef5a2eae8003d3a/Holiday23-Offers-Landing-202309-Hero-Standard-Large.jpg?fit=crop&format=webply&quality=80&width=1600&height=500&dpr=1.5",
  ];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Update the image index every 5 seconds
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % array.length);
    }, 5000);

    // Cleanup the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array means the effect runs once on mount
  return (
    <>
      <img
        src={array[currentImageIndex]}
        alt=""
        style={{ width: "100%", height: "480px", maxWidth: "100%" }}
      />

      <div
        style={{
          position: "absolute",
          top: "30px",
          right: "10px",
          color: "white",
          textAlign: "right",
        }}
      >
        <p style={{ fontSize: "40px" }}>Gift the superpower of play</p>
        <h1 style={{ fontSize: "18px" }}>
          Unleash creativity and spark holiday joy with a LEGO® gift.
        </h1>
      </div>
    </>
  );
};

export default Slider;
