import React from "react";
import "./About.css";
import about_img from "../../assets/about.png";
import play_icon from "../../assets/play-icon.png";

const About = ({ setPlayState }) => {
  return (
    <div className="about">
      <div className="about-left">
        <img src={about_img} alt="" className="about_img" />
        <img
          src={play_icon}
          alt=""
          className="play_icon"
          onClick={() => {
            setPlayState(true);
          }}
        />
      </div>
      <div className="about-right">
        <h3>Tentang Kami</h3>
        <h2>Bebek Unggul, Kualitas Terbaik</h2>
        <p>
          Waluya Farm adalah salah satu usaha mikro, kecil, dan menengah (UMKM)
          terbesar di Kabupaten Karawang yang berfokus pada pembudidayaan telur
          bebek secara berkelanjutan di lingkungan pedesaan.
        </p>
        <p>
          Berdiri sejak lebih dari 5 tahun yang lalu, Waluya Farm telah
          berkembang menjadi salah satu UMKM lokal terkemuka yang memproduksi
          produk bebek berkualitas tinggi. Kami mengelola lebih dari 500 ekor
          bebek di lahan seluas 1 hektar di Desa Waluya, Kecamata Kutawaluya,
          Kabupaten Karawang. Usaha ini didukung oleh dedikasi dan kerja keras
          lebih dari 10 karyawan yang bersama-sama bergabung dan berkembang
          dengan Waluya Farm.
        </p>
        <p>
          Bisnis kami meliputi pemrosesan telur bebek dengan metode peternakan
          unggulan yang ramah lingkungan dan berkualitas tinggi. Komitmen kami
          adalah memberikan yang terbaik bagi pelanggan, sambil turut mendukung
          perekonomian desa dan menjaga kelestarian lingkungan sekitar.
        </p>
      </div>
    </div>
  );
};

export default About;
