import React from "react";
import "./Hero.css";
import dark_arrow from "../../assets/dark-arrow.png";

const Hero = () => {
  return (
    <div className="hero container">
      <div className="hero-text">
        <h1>Anda Belanja Anda Beramal!</h1>
        <p>
          Proses pembiakan unggul kami dirancang untuk memberikan Anda produk
          telur bebek berkualitas tinggi, memastikan produktivitas maksimal,
          semua dengan harga yang sangat terjangkau!
        </p>
        <button
          className="btn"
          onClick={() =>
            (window.location.href =
              "https://wa.me/6285711210364?text=Halo%20Bebek%20Fitria..%0APerkenalkan%20saya%2C%20%0A%0ANama%20%3A%20%0ADomilisi%20%2F%20Wilayah%20%3A%20%0A%0AMau%20bertanya%20dong%20min%20%3F")
          }
        >
          Pesan Sekarang <img src={dark_arrow} alt="" />
        </button>
      </div>
    </div>
  );
};

export default Hero;
