import React, { useState } from "react";
import "./Slider.css"; // Import CSS file

const Slider = () => {
  // Slider data (images or content)
  const slides = [
    {
      image: "https://png.pngtree.com/thumb_back/fh260/background/20240522/pngtree-a-hacker-is-using-laptop-computer-to-steal-data-in-the-image_15673998.jpg",
      title: "Slide 1",
      description: "This is the first slide.",
    },
    {
      image: "https://png.pngtree.com/thumb_back/fh260/background/20230612/pngtree-hacked-computer-screen-of-a-hooded-hacker-sitting-at-his-computer-image_2914447.jpg",
      title: "Slide 2",
      description: "This is the second slide.",
    },
    {
      image: "https://png.pngtree.com/thumb_back/fh260/background/20241015/pngtree-a-hacker-in-a-hoodie-sitting-at-a-laptop-with-hologram-image_16394239.jpg",
      title: "Slide 3",
      description: "This is the third slide.",
    },
  ];

  // State to track current slide index
  const [currentSlide, setCurrentSlide] = useState(0);

  // Function to go to the next slide
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  // Function to go to the previous slide
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <div className="slider">
      {/* Slide Content */}
      <div className="slide">
        <img src={slides[currentSlide].image} alt={slides[currentSlide].title} />
        <div className="slide-content">
          <h2>{slides[currentSlide].title}</h2>
          <p>{slides[currentSlide].description}</p>
        </div>
      </div>

      {/* Navigation Buttons */}
      <button className="prev-button" onClick={prevSlide}>
        &#10094; {/* Left arrow */}
      </button>
      <button className="next-button" onClick={nextSlide}>
        &#10095; {/* Right arrow */}
      </button>
    </div>
  );
};

export default Slider;