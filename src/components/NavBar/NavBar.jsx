import React, { useState } from "react";
import "./NavBar.css";
import logoSolHaus from "../../img/logoSolHaus.png";
import { Link } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
  // Estado para el menú hamburguesa
  const [menuOpen, setMenuOpen] = useState(false);

  // Estado para la barra de búsqueda
  const [searchOpen, setSearchOpen] = useState(false);

  // Función para alternar el menú hamburguesa
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Función para alternar la barra de búsqueda
  const toggleSearch = () => {
    setSearchOpen(!searchOpen);
  };

  return (
    <div className="nav-menu">
      {/* Logo */}
      <Link to="/">
        <img className="logo" src={logoSolHaus} alt="Logo de Sol Haus" />
      </Link>

      {/* Menú */}
      <nav className={`nav ${menuOpen ? "visible" : ""}`}>
        <ul className="menu">
          <li className="menu__item">
            <Link to="/">Inicio</Link>
          </li>
          <li className="menu__item productos">
            <Link to="/productos">Productos</Link>
            <ul className="submenu">
              <li>
                <Link to="/productos/bazar">Bazar</Link>
              </li>
              <li>
                <Link to="/productos/organizacion">Organización del hogar</Link>
              </li>
              <li>
                <Link to="/productos/reposteria">Repostería</Link>
              </li>
              <li>
                <Link to="/productos/viajes">Viajes</Link>
              </li>
            </ul>
          </li>
          <li className="menu__item">
            <Link to="/informacion">Información</Link>
          </li>
          <li className="menu__item">
            <Link to="/contacto">Contacto</Link>
          </li>
        </ul>
      </nav>

      <div className="right-icons">
        <CartWidget menuOpen={menuOpen} />
      </div>

      {/* Botón hamburguesa */}
      <button className="hamburger" onClick={toggleMenu}>
        <i className={menuOpen ? "bi bi-x" : "bi bi-list"}></i>
      </button>
    </div>
  );
};

export default NavBar;
