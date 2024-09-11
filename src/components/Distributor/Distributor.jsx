import React, { useRef } from "react";
import "./Distributor.css";
import next_icon from "../../assets/next-icon.png";
import back_icon from "../../assets/back-icon.png";
import r1 from "../../assets/r1.png";
import r2 from "../../assets/r2.png";
import r3 from "../../assets/r3.png";
import r4 from "../../assets/r4.png";

const Distributor = () => {
  const slider = useRef();
  let tx = 0;

  const slideForward = () => {
    if (tx > -50) {
      tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%`;
  };
  const slideBackward = () => {
    if (tx < 0) {
      tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%`;
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
