import React, { useEffect, useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import menu_icon from "../../assets/menu-icon.png";
import { Link } from "react-scroll";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 40 ? setSticky(true) : setSticky(false);
    });
  }, []);

  const [mobileMenu, setMobileMenu] = useState(false);
  const toggleMenu = () => {
    mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
  };

  return (
    <nav className={`container ${sticky ? "dark-nav" : ""}`}>
      <img src={logo} alt="" className="logo" />
      <ul className={mobileMenu ? "" : "hide-mobile-menu"}>
        <li>
          <Link to="hero" smooth={true} offset={0} duration={500}>
            Beranda
          </Link>
        </li>
        <li>
          <Link to="product" smooth={true} offset={-260} duration={500}>
            Produk
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} offset={-163} duration={500}>
            Tentang
          </Link>
        </li>
        <li>
          <Link to="distributor" smooth={true} offset={-260} duration={500}>
            Distributor
          </Link>
        </li>
        <li>
          <Link to="online-store" smooth={true} offset={-260} duration={500}>
            Toko Online
          </Link>
        </li>
        <li>
          <Link
            to="c-wrapper"
            smooth={true}
            offset={-260}
            duration={500}
            className="btn"
          >
            Kontak
          </Link>
        </li>
      </ul>
      <img src={menu_icon} alt="" className="menu-icon" onClick={toggleMenu} />
    </nav>
  );
};

export default Navbar;
