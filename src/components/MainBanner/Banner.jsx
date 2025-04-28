import React, { useState, useEffect } from 'react';
import './banner.css';


import image1 from "../../../src/components/assets/img/hero/hero4.jpg";
import image3 from "../../../src/components/assets/img/hero/hero5.jpg";
import image4 from "../../../src/components/assets/img/hero/hero4.jpg";
import image5 from "../../../src/components/assets/img/hero/hero7.jpg";
import image6 from "../../../src/components/assets/img/hero/hero8.jpg";
import image7 from "../../../src/components/assets/img/hero/hero9.jpg";



const images = [image1, image3, image4, image5, image6, image7];

export const Banner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); 
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        setFade(true); 
      }, 500); 
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="banner-img-container">
      <img
        src={images[currentIndex]}
        alt="Hero Banner"
        className={`banner-img ${fade ? 'fade-in' : 'fade-out'}`}
      />
    </div>
  );
};


