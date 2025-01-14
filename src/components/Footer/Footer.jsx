import React from "react";
import "./Footer.css";
import { SocialIcon } from "react-social-icons";
import mail_icon from "../../assets/mail-icon.png";
import phone_icon from "../../assets/phone-icon.png";
import location_icon from "../../assets/location-icon.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-col">
        <h3>Bebek Fitria</h3>
        <p>
          Sumber terpercaya Anda untuk telur bebek berkualitas langsung dari
          peternakan.
        </p>
        <div className="social-icons">
          <SocialIcon
            url="https://instagram.com"
            bgColor="#A7D6C2"
            style={{ height: 35, width: 35 }}
          />
          <SocialIcon
            url="https://facebook.com"
            bgColor="#A7D6C2"
            style={{ height: 35, width: 35 }}
          />
          <SocialIcon
            url="https://tokopedia.com"
            bgColor="#A7D6C2"
            style={{ height: 35, width: 35 }}
          />
        </div>
      </div>
      <div className="footer-col">
        <h3>Info Kontak</h3>
        <ul>
          <li>
            <img src={mail_icon} alt="" />
            info@bebekfitria.com
          </li>
          <li>
            <img src={phone_icon} alt="" />
            +62 857-1121-0364
          </li>
          <li>
            <img src={location_icon} alt="" />
            Dusun Semplek RT/RW 021/005
            <br />
            Desa Sampalan
            <br />
            Kutawaluya, Karawang
          </li>
        </ul>
      </div>
      <div className="footer-col">
        <h3>Lokasi Kami</h3>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d810.1489393779593!2d107.33230733865823!3d-6.175847221512976!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sid!4v1725512273774!5m2!1sen!2sid"
          width="300"
          height="200"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Our Location"
        ></iframe>
      </div>
    </div>
  );
};

export default Footer;
