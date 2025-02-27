// import './Header.css'

// export function Header(){
//     function toggleMenu() {
//         const navLinks = document.getElementById("navLinks");
//         navLinks.classList.toggle("active");
//     }
//     return(
//     <div>
      


  
//     <header class="modern-header">
//         <div class="logo">
//             <h1>MyWebsite</h1>
//         </div>
//         {/* <!-- Hamburger Menu Icon --> */}
//         <div class="hamburger" onclick="toggleMenu()">
//             <i class="fas fa-bars"></i>
//         </div>
//         {/* <!-- Navigation Links --> */}
//         <nav id="navLinks">
//             <a href="#home">Home</a>
//             <a href="#about">About Us</a>
//             <a href="#services">Services</a>
//             <a href="#contact">Contact Us</a>
//         </nav>
//     </header>

//     {/* <!-- Home Section --> */}
//     <section id="home" class="section">
//         <h2>Home</h2>
//         <p>Welcome to the home section of our website.</p>
//     </section>

//     {/* <!-- About Us Section --> */}
//     <section id="about" class="section">
//         <h2>About Us</h2>
//         <p>Learn more about our team and mission.</p>
//     </section>

//     {/* <!-- Services Section --> */}
//     <section id="services" class="section">
//         <h2>Services</h2>
//         <p>Explore the services we offer.</p>
//     </section>

//     {/* <!-- Contact Us Section --> */}
//     <section id="contact" class="section">
//         <h2>Contact Us</h2>
//         <p>Get in touch with us for any queries.</p>
//     </section>





//         </div>
//     )
// }



import React, { useState } from "react";
import "./Header.css"; // Import CSS file
import { FaBars } from "react-icons/fa"; // Hamburger icon from react-icons

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to toggle menu

  // Function to toggle menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="modern-header">
      <div className="logo">
        <h1>MyWebsite</h1>
      </div>

      {/* Hamburger Menu Icon (Visible on Small Devices) */}
      <div className="hamburger" onClick={toggleMenu}>
        <FaBars />
      </div>

      {/* Navigation Links */}
      <nav className={`nav-links ${isMenuOpen ? "active" : ""}`}>
        <a href="#home" onClick={toggleMenu}>
          Home
        </a>
        <a href="#about" onClick={toggleMenu}>
          About Us
        </a>
        <a href="#services" onClick={toggleMenu}>
          Services
        </a>
        <a href="#contact" onClick={toggleMenu}>
          Contact Us
        </a>
      </nav>
    </header>
  );
};

export default Header;