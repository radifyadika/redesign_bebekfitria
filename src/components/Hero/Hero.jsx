import React from "react";
import "./Hero.css";
import dark_arrow from "../../assets/dark-arrow.png";

const Hero = () => {
  return (
    <div className="hero container">
      <div className="hero-text">
        <h1>Terbaik Di Antara Semua Pilihan</h1>
        <p>
          Anti Ribet: Proses pembiakan unggul kami dirancang untuk memberikan
          Anda produk telur bebek berkualitas tinggi, memastikan produktivitas
          maksimal, semua dengan harga yang sangat terjangkau!
        </p>
        <button className="btn">
          Pesan Sekarang <img src={dark_arrow} alt="" />
        </button>
      </div>
    </div>
  );
};

export default Hero;
