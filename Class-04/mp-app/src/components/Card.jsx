import React from "react";
import "./Card.css"; // Import CSS file

const Card = ({ image, title, description, buttonText }) => {
  return (
    <div className="card">
      {/* Card Image */}
      <img src={"https://img.drz.lazcdn.com/static/pk/p/b6b1b25d0ee17b9b655348919d62d411.jpg_200x200q80.jpg_.webp"} alt={"img"} className="card-image" />

      {/* Card Content */}
      <div className="card-content">
        <h2 className="card-title"></h2>
        <p className="card-description">{"P47 Wireless Headset Bluetooth Foldable On-Ear Headphone (Connect with All Smart Cell Phones / Laptops / Computer Systems)."}</p>
        <button className="card-button">{"see"}</button>
      </div>
    </div>
  );
};

export default Card;