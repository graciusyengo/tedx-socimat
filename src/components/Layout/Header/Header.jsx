import React, { useState,useEffect } from "react";
import "./Header.css";
import { IoCartOutline } from "react-icons/io5";
import { FaBars, FaTimes } from "react-icons/fa";
import { RiArrowDropDownLine } from "react-icons/ri";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState(false);


  
  const toggleSubmenu = () => {
    setSubmenuOpen(prev => !prev); // Toggle pour ouvrir/fermer le sous-menu
  };

  // Ferme le sous-menu lorsqu'on clique en dehors du menu
  const handleClickOutside = (event) => {
    const submenu = document.querySelector('.submenu');
    const dropdown = document.querySelector('.dropdown');
    if (submenu && !submenu.contains(event.target) && !dropdown.contains(event.target)) {
      setSubmenuOpen(false);
    }
  };

  // Utilisation de useEffect pour ajouter et nettoyer l'écouteur d'événements
  useEffect(() => {
    document.addEventListener('click', handleClickOutside);

    // Nettoyage de l'écouteur d'événements lors du démontage du composant
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);


  return (
    <div className="header-container">
      {/* Barre supérieure */}
      <div className="top-bar">
        <div className="top-left">
          <span><i className="fas fa-map-marker-alt"></i> Socimat, Kinshasa-Gombe</span>
          <span><i className="far fa-clock"></i> Lun - ven : 09h00 - 17h00</span>
        </div>
        <div className="top-right">
          <span><i className="fas fa-phone-alt"></i> +243 976 943 049</span>
          <div className="social-icons-header">
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-linkedin-in"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
          </div>
        </div>
      </div>

      {/* Barre de navigation */}
      <header className="header">
      <div className="logo">
        <span className="ted">TED</span>
      
        <span className="x">x</span>
        <span class="socimat">Socimat</span>

        </div>

        {/* Menu de navigation
        <nav className={`nav ${menuOpen ? "active" : ""}`}>
          <a href="#" className="active">ACCUEIL</a>
          <a href="#">À PROPOS</a>
          <a href="#">SPONSORS</a>
          <a href="#">NAVIGUEZ ▼</a>
          <a href="#">CONTACTEZ-NOUS</a>
        </nav> */}

{/* Menu déroulant NAVIGUEZ */}
              {/* Menu de navigation */}
              <nav className={`nav ${menuOpen ? "active" : ""}`}>
          <a href="#" className="active">ACCUEIL</a>
          <a href="#">À PROPOS</a>
          <a href="#">SPONSORS</a>

          {/* Menu déroulant NAVIGUEZ */}
          <div
            className="dropdown"
            onMouseEnter={() => setSubmenuOpen(true)}
            onMouseLeave={() => setSubmenuOpen(false)}
          >

            <div className="navigation"  onClick={toggleSubmenu}>
            <a href="#">NAVIGUEZ  </a>  <RiArrowDropDownLine className="button-dropdown" size={30} />
            </div>
            
            <div className={`submenu ${submenuOpen ? "show" : ""}`}>
              <NavLink href="#">Prendre rendez-vous</NavLink>
              <NavLink href="#">L'équipe TEDx Socimat</NavLink>
              <NavLink href="#">Sponsoring</NavLink>
              <NavLink href="#">Partenaires</NavLink>
              <NavLink href="#">Devenir bénévole</NavLink>
              <NavLink href="#">Offres et opportunités</NavLink>
              <NavLink href="#">Devenir speaker</NavLink>
          
            </div>
          </div>

          
        </nav>




        <a href="#" className="ticket-btn">
           CONTACTEZ-NOUS
        </a>

           {/* Menu burger pour mobile */}
           <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </header>
    </div>
  );
};

export default Header;