import React, { useEffect, useRef, useState } from "react";
import "./Distributor.css";
import next_icon from "../../assets/next-icon.png";
import back_icon from "../../assets/back-icon.png";
import r1 from "../../assets/r1.png";
import r2 from "../../assets/r2.png";
import r3 from "../../assets/r3.png";
import r4 from "../../assets/r4.png";

const Distributor = () => {
  const slider = useRef();
  const [tx, setTx] = useState(0);
  const [isMobileView, setIsMobileView] = useState(false);

  const checkWindowSize = () => {
    if (window.innerWidth <= 800) {
      setIsMobileView(true);
    } else {
      setIsMobileView(false);
      // Reset tx and transform only on mobile
      if (slider.current) {
        slider.current.style.transform = `translateX(0%)`;
      }
    }
  };

  useEffect(() => {
    // Check window size on component mount
    checkWindowSize();

    // Add event listener to check window size on resize
    window.addEventListener("resize", checkWindowSize);

    // Clean up event listener when component unmounts
    return () => {
      window.removeEventListener("resize", checkWindowSize);
    };
  }, []);

  const slideForward = () => {
    // Always slide forward, but limit tx on mobile only
    const maxTx = isMobileView ? -132 : -50; // Adjust this based on desktop slider content
    if (tx > maxTx) {
      const newTx = tx - 20;
      setTx(newTx);
      slider.current.style.transform = `translateX(${newTx}%)`;
    }
  };

  const slideBackward = () => {
    // Always slide backward
    if (tx < 0) {
      const newTx = tx + 20;
      setTx(newTx);
      slider.current.style.transform = `translateX(${newTx}%)`;
    }
  };

  return (
    <div className="distributor">
      <img src={next_icon} alt="" className="next-btn" onClick={slideForward} />
      <img
        src={back_icon}
        alt=""
        className="back-btn"
        onClick={slideBackward}
      />
      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="place-info">
                <img src={r1} alt="" />
                <div>
                  <h3>Pasar Balongsari</h3>
                  <span>
                    alan Manunggal VII, Balongsari, Kec. Rawamerta, Karawang,
                    Jawa Barat
                  </span>
                </div>
              </div>
              <p>
                <strong>Kontak: 089446215045</strong>
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="place-info">
                <img src={r2} alt="" />
                <div>
                  <h3>Pasar Baru Karawang</h3>
                  <span>
                    Jl. Tuparev No.21-85, Nagasari, Kec. Karawang Barat,
                    Karawang, Jawa Barat
                  </span>
                </div>
              </div>
              <p>
                <strong>Kontak: 081124965045</strong>
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="place-info">
                <img src={r3} alt="" />
                <div>
                  <h3>Pasar Rengasdengklok</h3>
                  <span>
                    Pasar Rengasdengklok Selatan, Kec. Rengasdengklok, Karawang,
                    Jawa Barat
                  </span>
                </div>
              </div>
              <p>
                <strong>Kontak: 081254965045</strong>
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="place-info">
                <img src={r4} alt="" />
                <div>
                  <h3>Pasar Johar</h3>
                  <span>
                    Jl. Pasar Johar, Adiarsa Timur, Kec. Karawang Timur,
                    Karawang, Jawa Barat
                  </span>
                </div>
              </div>
              <p>
                <strong>Kontak: 081245991045</strong>
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Distributor;
