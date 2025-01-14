import React, { useRef } from "react";
import { Cloudinary } from "@cloudinary/url-gen";
import { AdvancedImage, AdvancedVideo, lazyload } from "@cloudinary/react";
import "./About.css";
import about_img from "../../assets/about.png";
import play_icon from "../../assets/play-icon.png";

const cld = new Cloudinary({
  cloud: {
    cloudName: "dtq45vooh",
  },
});

const About = ({ setPlayState }) => {
  const playerRef = useRef();

  const onMouseOver = () => {
    playerRef.current.videoRef.current.play();
  };

  const onMouseOut = () => {
    playerRef.current.videoRef.current.pause();
  };

  return (
    <div className="about">
      <div className="about-left">
        {/* Video Preview Section */}
        <div
          className="video"
          onMouseOver={onMouseOver}
          onMouseOut={onMouseOut}
        >
          <div className="about_img_wrapper">
            <AdvancedImage className="about_img" src={about_img} />
            <AdvancedImage
              className="play_icon"
              src={play_icon}
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
              }}
              onClick={() => {
                setPlayState(true);
              }}
            />
          </div>

          <AdvancedVideo
            ref={playerRef}
            loop
            muted
            width="100%"
            cldVid={cld
              .video("v1736326289/my-videos/ap7zfpmznsr3m1fhbj2a")
              .effect("e_preview:duration_15")
              .delivery("q_auto")
              .format("auto")}
            plugins={[lazyload()]}
            onClick={() => {
              setPlayState(true);
            }}
          />
        </div>
      </div>
      <div className="about-right">
        <h3>Tentang Kami</h3>
        <h2>Bebek Unggul, Kualitas Terbaik</h2>
        <p>
          Bebek Fitria adalah salah satu usaha mikro, kecil, dan menengah (UMKM)
          terbesar di Kabupaten Karawang yang berfokus pada pembudidayaan telur
          bebek secara berkelanjutan di lingkungan pedesaan.
        </p>
        <p>
          Bebek Fitria telah berdiri selama lebih dari 3 tahun, hadir untuk
          menjawab kebutuhan akan telur bebek yang terus meningkat. Meskipun
          permintaan tinggi, produksi telur bebek sering kali mengalami
          fluktuasi karena bergantung pada metode tradisional seperti angon.
        </p>
        <p>
          Saat ini, kami mengelola lebih dari 500 ekor bebek di Desa Waluya,
          Kecamatan Kutawaluya, Kabupaten Karawang. Usaha ini didukung oleh
          dedikasi dan kerja keras lebih dari 10 karyawan yang bersama-sama
          tumbuh dan berkembang bersama Bebek Fitria. Bisnis kami berfokus pada
          pemrosesan telur bebek dengan metode peternakan unggulan yang ramah
          lingkungan dan berkualitas tinggi. Kami berkomitmen untuk memberikan
          produk terbaik kepada pelanggan, sekaligus mendukung perekonomian desa
          dan menjaga kelestarian lingkungan.
        </p>
      </div>
    </div>
  );
};

export default About;
